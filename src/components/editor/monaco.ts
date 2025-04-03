import { loader } from '@guolao/vue-monaco-editor'

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
  getWorker: (_: string, label: string) => new editorWorker(),
}

loader.config({ monaco })
