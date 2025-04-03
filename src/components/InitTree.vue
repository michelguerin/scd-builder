<script setup lang="ts">
import { useTreeStore } from '@/stores/tree'

//====== INITIALIZE ======//

// store
const treeStore = useTreeStore()
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <button class="bg-green-700 text-white p-2 rounded" @click="treeStore.init">Init Tree</button>
  </div>
</template>
