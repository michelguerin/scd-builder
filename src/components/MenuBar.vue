<script setup lang="ts">
import { ref } from 'vue'
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarPortal,
  MenubarRoot,
  MenubarTrigger,
} from 'reka-ui'
// STORES
import { useTreeStore } from '@/stores/tree'

const currentMenu = ref('')

//====== INITIALIZE ======//

// store
const treeStore = useTreeStore()

const handleNotImplemented = () => {
  alert('Not implemented yet! 🤫')
}
</script>

<template>
  <MenubarRoot v-model="currentMenu" class="flex bg-white p-[3px] border shadow-sm mb-2">
    <MenubarMenu value="file">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none text-green-700 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green-100 data-[state=open]:bg-green-100"
      >
        File
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem
            class="group text-xs leading-none text-green-700 flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-700 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green-600 data-[highlighted]:to-green-600 data-[highlighted]:text-green-100 data-[highlighted]:data-[state=open]:text-green-100 data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none"
            @click="handleNotImplemented"
          >
            Open File
            <!-- <div
              class="ml-auto pl-5 text-gray-700 group-data-[highlighted]:text-white group-data-[disabled]:text-gray-300"
            >
              ⌘ N
            </div> -->
          </MenubarItem>
          <MenubarItem
            class="group text-xs leading-none text-green-700 flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-700 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green-600 data-[highlighted]:to-green-600 data-[highlighted]:text-green-100 data-[highlighted]:data-[state=open]:text-green-100 data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none"
            @click="handleNotImplemented"
          >
            Save File
            <!-- <div
              class="ml-auto pl-5 text-gray-700 group-data-[highlighted]:text-white group-data-[disabled]:text-gray-300"
            >
              ⌘ S
            </div> -->
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>

    <MenubarMenu value="Edit">
      <MenubarTrigger
        class="py-2 px-3 outline-none select-none font-semibold leading-none text-green-700 text-xs flex items-center justify-between gap-[2px] data-[highlighted]:bg-green-100 data-[state=open]:bg-green-100"
      >
        Edit
      </MenubarTrigger>
      <MenubarPortal>
        <MenubarContent
          class="min-w-[220px] outline-none bg-white p-[5px] border shadow-sm [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
          align="start"
          :side-offset="5"
          :align-offset="-3"
        >
          <MenubarItem
            class="group text-xs leading-none text-green-700 flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-700 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green-600 data-[highlighted]:to-green-600 data-[highlighted]:text-green-100 data-[highlighted]:data-[state=open]:text-green-100 data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none"
            @click="treeStore.undo"
          >
            Undo
            <!-- <div
              class="ml-auto pl-5 text-gray-700 group-data-[highlighted]:text-white group-data-[disabled]:text-gray-300"
            >
              ⌘ Z
            </div> -->
          </MenubarItem>
          <MenubarItem
            class="group text-xs leading-none text-green-700 flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green-100 data-[state=open]:text-green-700 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green-600 data-[highlighted]:to-green-600 data-[highlighted]:text-green-100 data-[highlighted]:data-[state=open]:text-green-100 data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none"
            @click="treeStore.redo"
          >
            Redo
            <!-- <div
              class="ml-auto pl-5 text-gray-700 group-data-[highlighted]:text-white group-data-[disabled]:text-gray-300"
            >
              ⇧ ⌘ Z
            </div> -->
          </MenubarItem>
        </MenubarContent>
      </MenubarPortal>
    </MenubarMenu>
  </MenubarRoot>
</template>
