<script setup lang="ts">
import TreeView from './components/TreeView.vue'
import MenuBar from './components/MenuBar.vue'
import AttributesView from './components/AttributesView.vue'
import EditorView from './components/editor/EditorView.vue'
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
</script>

<template>
  <MenuBar />
  <main class="w-full font-semibold text-sm" style="height: calc(100vh - 44px)">
    <SplitterGroup id="splitter-group-1" direction="horizontal">
      <SplitterPanel
        id="splitter-group-1-panel-1"
        class="overflow-hidden"
        style="height: calc(100vh - 44px)"
      >
        <TreeView />
      </SplitterPanel>
      <SplitterResizeHandle id="splitter-group-1-resize-handle-1" class="w-2" />
      <SplitterPanel id="splitter-group-1-panel-2" :min-size="20">
        <SplitterGroup id="splitter-group-2" direction="vertical">
          <SplitterPanel
            id="splitter-group-2-panel-1"
            :min-size="20"
            class="bg-white border flex items-center justify-center"
          >
            <AttributesView />
          </SplitterPanel>
          <SplitterResizeHandle id="splitter-group-2-resize-handle-1" class="h-2" />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            :min-size="20"
            class="bg-white border flex items-center justify-center"
          >
            <EditorView />
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </main>
</template>
