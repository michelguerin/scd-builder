<script setup lang="ts">
import { computed } from 'vue'
import { useTreeStore } from '@/stores/tree'
import { storeToRefs } from 'pinia'
// CONSTANTS
import { DEFINITION } from '@/constants/definition'

//====== INITIALIZE ======//

// store
const treeStore = useTreeStore()
const { currentSelectedTreeElement } = storeToRefs(treeStore)

//====== COMPUTED ======//

const currentAttributes = computed(() => {
  const currentElementKey = currentSelectedTreeElement.value.key
  const currentDefaultAttributes = Object.fromEntries(
    DEFINITION[currentElementKey].attributes.available.map((key) => [key, null]),
  )
  const currentElementAttributes = currentSelectedTreeElement.value.value.attributes

  return {
    ...currentDefaultAttributes,
    ...currentElementAttributes,
  }
})

const hasAttributes = computed(() => {
  return Object.keys(currentAttributes).length > 0
})
</script>

<template>
  <div v-if="hasAttributes" class="flex flex-col w-full p-10 h-full">
    <h2 class="text-xl mb-5">Attributes</h2>
    <template
      v-for="[attributeKey, attributeValue] of Object.entries(currentAttributes)"
      :key="attributeKey"
    >
      <div class="flex items-center justify-between">
        <span>{{ attributeKey }}: </span>
        <span>{{ attributeValue }}</span>
      </div>
    </template>
  </div>
</template>
