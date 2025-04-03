import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// LIBRARIES
import { v4 as uuidv4 } from 'uuid'
// CONSTANTS
import { DEFINITION } from '@/constants/definition'
// COMPOSABLES
import { useManualRefHistory } from '@vueuse/core'
// UTILS
import { pascalToCamelCase } from '@/utils/formatter'
import { isPropertyOfObject } from '@/utils/guards'
// TYPES
import type { TreeNode, CurrentDefinition, AvailableElement } from '@/types/tree'
import type { Definition } from '@/types/definition'
import type { FlattenedItem } from 'reka-ui'

export const useTreeStore = defineStore('tree', () => {
  //====== STATE ======//

  // reactive
  const tree = ref<TreeNode<AvailableElement>[]>([])

  const currentSelectedTreeElement = reactive<{
    key: AvailableElement
    value: TreeNode<AvailableElement>
    level: number
  }>({
    key: 'sCL',
    value: {} as TreeNode<AvailableElement>,
    level: 0,
  })

  const selectedOption = ref<AvailableElement>()

  // composable
  const { history, undo, redo, commit } = useManualRefHistory(tree, { clone: true, capacity: 20 })

  //====== GETTERS ======//

  const selectOptions = computed<AvailableElement[]>(() => {
    if (!currentSelectedTreeElement.key) return []
    const currentAvailableSubElements =
      DEFINITION[currentSelectedTreeElement.key].subElements.available
    const currentSubElementsDetails = DEFINITION[currentSelectedTreeElement.key].subElements
      .details as Record<AvailableElement, Definition.SingleRawSubElement>
    const currentSubElements = currentSelectedTreeElement.value.subElements
    const authorizedSubElements: AvailableElement[] = []

    if (!currentAvailableSubElements.length) return []

    for (const key of currentAvailableSubElements) {
      if (!isPropertyOfObject(key, currentSubElementsDetails)) continue
      const maxOccurrences = currentSubElementsDetails[key].maxOccurrences
      if (!maxOccurrences) authorizedSubElements.push(key)
      else if (
        currentSubElements.filter((element) => pascalToCamelCase(element.tag) === key).length <
        maxOccurrences
      )
        authorizedSubElements.push(key)
    }

    return authorizedSubElements
  })

  const currentXmlString = computed(() => {
    return treeToXml(tree.value)
  })

  const previousXmlString = computed(() => {
    if (!history.value[1]) return currentXmlString.value
    return treeToXml(history.value[1].snapshot)
  })

  //====== ACTIONS ======//

  //===== HELPERS

  const treeToXml = (tree: TreeNode<AvailableElement>[], indentLevel: number = 0): string => {
    const indent = '  '.repeat(indentLevel) // Use two spaces for indentation

    const nodeToXml = (node: TreeNode<AvailableElement>, level: number): string => {
      const attributes = Object.entries(node.attributes)
        .map(([key, value]) => `${key}="${value ?? ''}"`)
        .join(' ')

      const subElementsXml = node.subElements
        .map((subNode) => nodeToXml(subNode, level + 1))
        .join('\n')

      if (subElementsXml) {
        return `${indent}${'  '.repeat(level)}<${node.tag}${
          attributes ? ' ' + attributes : ''
        }>\n${subElementsXml}\n${indent}${'  '.repeat(level)}</${node.tag}>`
      } else {
        return `${indent}${'  '.repeat(level)}<${node.tag}${attributes ? ' ' + attributes : ''} />`
      }
    }

    // Convert the root tree array to XML
    return tree.map((node) => nodeToXml(node, indentLevel)).join('\n')
  }

  const resetOptionIfNeeded = () => {
    if (selectedOption.value && !selectOptions.value.includes(selectedOption.value))
      selectedOption.value = undefined
  }

  const insertObjectAtCorrectPosition = (newElement: TreeNode<AvailableElement>) => {
    const ORDERED_KEYS: readonly AvailableElement[] =
      DEFINITION[currentSelectedTreeElement.key].subElements.available
    const currentSubElements = currentSelectedTreeElement.value.subElements

    const newElementKey = pascalToCamelCase(newElement.tag)
    const newElementIndex = ORDERED_KEYS.indexOf(newElementKey)

    if (newElementIndex === -1) {
      throw new Error(`The tag "${newElement.tag}" is not in the orderedKeys array.`)
    }

    // Find the correct position in the objects array
    let insertIndex = currentSubElements.length // Default to the end of the array

    for (let i = 0; i < currentSubElements.length; i++) {
      const currentSubElementKey = pascalToCamelCase(currentSubElements[i].tag)
      const currentSubElementIndex = ORDERED_KEYS.indexOf(currentSubElementKey)

      if (currentSubElementIndex > newElementIndex) {
        insertIndex = i
        break
      }
    }

    // Insert the new object at the correct position
    currentSubElements.splice(insertIndex, 0, newElement)
  }

  const resolveSubElement = (currentElementKey: AvailableElement) => {
    const CURRENT_ELEMENT = DEFINITION[currentElementKey]
    //const currentTreeElement = builderStore.treeItems[level]

    const newSubElement: TreeNode<AvailableElement> = {
      id: uuidv4(),
      tag: CURRENT_ELEMENT.tag,
      attributes: {} as TreeNode<AvailableElement>['attributes'],
      subElements: [] as TreeNode<AvailableElement>['subElements'],
    }

    if (CURRENT_ELEMENT.attributes.available.length) {
      const attributeEntries = Object.entries(CURRENT_ELEMENT.attributes.details) as [
        Definition.CurrentElementAttribute<CurrentDefinition, AvailableElement>,
        Definition.SingleRawAttribute,
      ][]

      for (const [attributeKey, attributeDetail] of attributeEntries) {
        if (attributeDetail.required)
          newSubElement.attributes[attributeKey] =
            attributeDetail.default || attributeDetail.enum?.[0] || 'requiredAttributeToBeSet'
      }
    }

    if (CURRENT_ELEMENT.subElements.available.length) {
      const subElementEntries = Object.entries(CURRENT_ELEMENT.subElements.details) as [
        Definition.CurrentElementSubElement<CurrentDefinition, AvailableElement>,
        Definition.SingleRawSubElement,
      ][]

      for (const [subElementKey, subElementDetail] of subElementEntries) {
        if (subElementDetail.required) {
          // @ts-ignore - ts can't infer this as it goes to deep
          newSubElement.subElements = [
            // @ts-ignore - ts can't infer this as it goes to deep
            ...newSubElement.subElements,
            resolveSubElement(subElementKey),
          ]
        }
      }
    }

    return newSubElement
  }

  //===== HANDLERS

  const setSelectedTreeElement = (item: FlattenedItem<TreeNode<AvailableElement>>) => {
    selectedOption.value = undefined
    currentSelectedTreeElement.key = pascalToCamelCase(item.value.tag)
    currentSelectedTreeElement.level = item.level
    currentSelectedTreeElement.value = item.value
  }

  const handleAddElement = () => {
    if (!selectedOption.value) return
    const newElement = resolveSubElement(selectedOption.value)

    if (selectedOption.value === 'sCL') {
      tree.value = [newElement]
      commit()
    } else {
      insertObjectAtCorrectPosition(newElement)
      commit()
    }

    resetOptionIfNeeded()
  }

  //===== INIT

  const init = () => {
    selectedOption.value = 'sCL'
    handleAddElement()
  }

  return {
    // state
    tree,
    selectedOption,
    currentSelectedTreeElement,
    // getters
    selectOptions,
    currentXmlString,
    previousXmlString,
    // actions
    handleAddElement,
    setSelectedTreeElement,
    undo,
    redo,
    init,
  }
})
