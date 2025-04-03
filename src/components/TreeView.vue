<script setup lang="ts">
import { TreeItem, TreeRoot } from 'reka-ui'
import { Icon } from '@iconify/vue'
// COMPONENTS
import AddElementDialog from './add-element/AddElementDialog.vue'
import InitTree from './InitTree.vue'
// STORE
import { storeToRefs } from 'pinia'
import { useTreeStore } from '@/stores/tree'
// TYPES
import type { AvailableElement, TreeNode } from '@/types/tree'

//====== INITIALIZE ======//

// store
const treeStore = useTreeStore()
const { tree, currentSelectedTreeElement } = storeToRefs(treeStore)

const getCurrentItemChildren = (item: TreeNode<AvailableElement>) => {
  if (!Object.keys(item.subElements).length) return undefined

  return Object.values(item.subElements).flatMap((value) => value) as
    | TreeNode<AvailableElement>[]
    | undefined
}
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    class="list-none select-none w-full h-full bg-white text-stone-700 border shadow-sm p-2 text-sm font-medium overflow-y-auto"
    :items="tree"
    :get-key="(item) => item.id"
    :get-children="getCurrentItemChildren"
  >
    <h1 class="font-semibold text-sm text-stone-400 px-2 pt-1 pb-3">Build SCD structure</h1>
    <template v-if="tree && Object.keys(tree).length">
      <TreeItem
        v-for="item in flattenItems"
        v-slot="{ isExpanded }"
        :key="item._id"
        :style="{ 'padding-left': `${item.level - 0.5}rem` }"
        v-bind="item.bind"
        class="cursor-pointer flex items-center py-1 px-2 my-0.5 rounded outline-none focus:ring-green-600 focus:ring-2 data-[selected]:bg-green-100"
        @click="treeStore.setSelectedTreeElement(item)"
      >
        <template v-if="item.hasChildren">
          <Icon v-if="!isExpanded" icon="lucide:folder" class="h-4 w-4" />
          <Icon v-else icon="lucide:folder-open" class="h-4 w-4" />
        </template>

        <span class="pl-2 mr-5">
          {{ item.value.tag }}
        </span>
        <AddElementDialog
          v-if="item._id === currentSelectedTreeElement.value.id && treeStore.selectOptions.length"
        />
      </TreeItem>
    </template>
    <template v-else>
      <InitTree />
    </template>
  </TreeRoot>
</template>
