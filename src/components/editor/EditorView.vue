<script setup lang="ts">
import { shallowRef } from 'vue'
// MONACO
import { loader, VueMonacoDiffEditor } from '@guolao/vue-monaco-editor'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// STORES
import { storeToRefs } from 'pinia'
import { useTreeStore } from '@/stores/tree'

//====== INITIALIZE ======//

// editor
self.MonacoEnvironment = {
  getWorker: (_: string, label: string) => new editorWorker(),
}

loader.config({ monaco })

const OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: true,
}
const editor = shallowRef()
const handleMount = (editorInstance: monaco.editor.IStandaloneCodeEditor) =>
  (editor.value = editorInstance)

// store
const treeStore = useTreeStore()
const { currentXmlString, previousXmlString } = storeToRefs(treeStore)
</script>

<template>
  <VueMonacoDiffEditor
    theme="vs"
    :original="previousXmlString"
    :modified="currentXmlString"
    language="xml"
    :options="OPTIONS"
    @mount="handleMount"
  />
</template>
