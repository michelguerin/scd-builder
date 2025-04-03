<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import AddElementSelect from './AddElementSelect.vue'
import { Icon } from '@iconify/vue'
// STORES
import { useTreeStore } from '@/stores/tree'

//====== INITIALIZE ======//

// store
const treeStore = useTreeStore()
</script>

<template>
  <DialogRoot>
    <DialogTrigger
      class="text-green-700 font-semibold hover:bg-green-700 hover:text-white inline-flex h-[35px] items-center justify-center rounded-md bg-white px-[15px] leading-none shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-green-700 dark:focus:shadow-green-700 focus:outline-none border"
      @click.stop
    >
      Add new element
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          Add new Element
        </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-sm leading-normal">
          Adding a new element will create all required attributes and children elements as well.
        </DialogDescription>
        <div class="flex items-center justify-center">
          <AddElementSelect />
        </div>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="text-md text-white bg-green-600 rounded px-3 py-1.5 cursor-pointer"
              :disabled="!treeStore.selectedOption"
              @click.stop="treeStore.handleAddElement"
            >
              Add element
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-green-700 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
