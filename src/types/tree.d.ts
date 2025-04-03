import type { DEFINITION } from '@/constants/definition'
import type { Definition } from './definition'

export type CurrentDefinition = typeof DEFINITION
export type AvailableElement = Definition.AvailableElement<CurrentDefinition>

export type CurrentElement<GenericElement extends AvailableElement> = {
  tag: Definition.CurrentElementTag<CurrentDefinition, GenericElement>
  attributes: Record<
    Definition.CurrentElementAttribute<CurrentDefinition, GenericElement>,
    string | null
  >
  subElements: TreeNode<GenericElement>[]
}

export type TreeNode<GenericElement extends AvailableElement> = CurrentElement<GenericElement> & {
  id: string
}
