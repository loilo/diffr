<template>
  <div
    data-editor
    ref="editorElementRef"
    class="h-full"
    :data-no-cursor="props.options.readOnly ? '' : undefined"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @dragover.prevent
    @drop.prevent="onDrop"
  >
    <ContextMenu :items="contextMenuItems" @open="selectEditor" />
    <slot v-if="isLoading" />
  </div>
</template>

<script lang="ts" setup>
import type * as Monaco from 'monaco-editor'
import lightTheme from '~/assets/theme-light.json'
import darkTheme from '~/assets/theme-dark.json'

interface Props {
  /**
   * Programming Language (Not a locale for UI);
   * overrides `options.language`
   */
  lang?: string
  /**
   * Options passed to the second argument of `monaco.editor.createDiffEditor`
   */
  options?: Monaco.editor.IStandaloneDiffEditorConstructionOptions
  original?: string
  modified?: string
}

interface Emits {
  (event: 'update:original', value: string): void
  (event: 'update:modified', value: string): void
  (event: 'load', editor: Monaco.editor.IStandaloneDiffEditor): void
}

let props = withDefaults(defineProps<Props>(), {
  lang: () => 'plaintext',
  options: () => ({}),
  original: () => '',
  modified: () => '',
})
let emit = defineEmits<Emits>()
let isLoading = ref(true)

let editorElementRef = ref<HTMLDivElement>()
let monaco = await useMonaco()!

let editor: Monaco.editor.IStandaloneDiffEditor
let originalModel: Monaco.editor.ITextModel
let modifiedModel: Monaco.editor.ITextModel
let editorRef = ref()

watch(
  () => [props.original, props.modified],
  () => {
    if (
      originalModel &&
      modifiedModel &&
      (originalModel.getValue() !== props.original ||
        modifiedModel.getValue() !== props.modified)
    ) {
      originalModel.setValue(props.original)
      modifiedModel.setValue(props.modified)
    }
  },
)

watch(
  () => props.lang,
  () => {
    if (originalModel) {
      originalModel.dispose()
    }
    if (modifiedModel) {
      originalModel.dispose()
    }
    originalModel = monaco.editor.createModel(props.original, props.lang)
    modifiedModel = monaco.editor.createModel(props.modified, props.lang)
    editor.setModel({
      original: originalModel,
      modified: modifiedModel,
    })
  },
)

watch(
  () => props.options,
  () => {
    editor?.updateOptions(props.options)
  },
)

let containerSize = useElementSize(editorElementRef)
watch([containerSize.width, containerSize.height], () => {
  editor?.layout()
})

defineExpose({
  /**
   * Monaco editor instance
   */
  $editor: editorRef,
})

let mounted = useMounted()
let hasEditorElementRef = computed(() => isDefined(editorElementRef))
let fontIsReady = useFontReady('Fragment Mono')

watch(fontIsReady, ready => {
  if (!ready) return
  monaco.editor.remeasureFonts()
})

until(() => unref(mounted) && unref(hasEditorElementRef))
  .toBe(true)
  .then(() => {
    monaco.editor.defineTheme('light', lightTheme as any)
    monaco.editor.defineTheme('dark', darkTheme as any)

    editor = monaco.editor.createDiffEditor(editorElementRef.value!, {
      contextmenu: false,
      enableSplitViewResizing: false,
      fontFamily:
        '"Fragment Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontSize: 16,
      // ignoreTrimWhitespace: this.ignoreTrimWhitespace,
      ignoreTrimWhitespace: true,
      links: false,
      matchBrackets: 'never',
      originalEditable: true,
      occurrencesHighlight: 'off',
      renderWhitespace: 'selection',
      lightbulb: {
        enabled: monaco.editor.ShowLightbulbIconMode.Off,
      },
      quickSuggestions: false,
      inlineSuggest: { enabled: false },
      scrollBeyondLastColumn: 100,
      scrollBeyondLastLine: false,
      showUnused: false,
      tabCompletion: 'off',
      // theme: this.$store.state.theme.name,
      theme: 'light',
      useTabStops: false,
      wordWrap: 'on',
      wrappingStrategy: 'advanced',
      renderGutterMenu: false,
      // wordWrapColumn
      ...props.options,
    })
    editorRef.value = editor
    originalModel = monaco.editor.createModel(props.original, props.lang)
    modifiedModel = monaco.editor.createModel(props.modified, props.lang)
    editor.setModel({
      original: originalModel,
      modified: modifiedModel,
    })
    editor.onDidUpdateDiff(() => {
      emit('update:original', editor.getModel()!.original.getValue())
      emit('update:modified', editor.getModel()!.modified.getValue())
    })
    isLoading.value = false
    emit('load', editor)
  })

let ctxEditor = shallowRef<Monaco.editor.IStandaloneCodeEditor>()
function selectEditor(event: PointerEvent) {
  ctxEditor.value = getCtxEditor(event)
}

function getComposedPath(event: MouseEvent | PointerEvent) {
  return document.elementsFromPoint(event.clientX, event.clientY)
}

function getCtxEditor(event: MouseEvent | PointerEvent) {
  let hits = getComposedPath(event)

  return hits.includes(editor.getOriginalEditor().getDomNode()!)
    ? editor.getOriginalEditor()
    : editor.getModifiedEditor()
}

function getSelectedText(editor: Monaco.editor.IStandaloneCodeEditor) {
  if (!editor) return ''

  return (editor.getSelections() as any[])
    .map(selection => editor.getModel()!.getValueInRange(selection))
    .join('\n')
}

function overwriteRange(
  editor: Monaco.editor.IStandaloneCodeEditor,
  range: Monaco.Range,
  content: string,
) {
  let id = {}
  let operation = {
    identifier: id,
    range,
    text: content,
    forceMoveMarkers: true,
  }
  editor.executeEdits('overwrite', [operation])
}

function overwriteSelection(
  editor: Monaco.editor.IStandaloneCodeEditor,
  content: string,
) {
  let selection = editor.getSelection()
  if (!selection) return

  let range = new monaco.Range(
    selection.startLineNumber,
    selection.startColumn,
    selection.endLineNumber,
    selection.endColumn,
  )

  overwriteRange(editor, range, content)
}

let contextMenuItems = [
  {
    label: 'Cut',
    icon: 'cut',
    action: (event: MouseEvent) => {
      let selectedText = getSelectedText(ctxEditor.value!)
      navigator.clipboard.writeText(selectedText)
      overwriteSelection(ctxEditor.value!, '')
    },
  },
  {
    label: 'Copy',
    icon: 'copy',
    action: (event: MouseEvent) => {
      let selectedText = getSelectedText(ctxEditor.value!)
      navigator.clipboard.writeText(selectedText)
    },
  },
  {
    label: 'Paste',
    icon: 'paste',
    action: async (event: MouseEvent) => {
      let content: string
      try {
        content = await navigator.clipboard.readText()
      } catch {
        alert('Could not paste content because clipboard access was denied.')
        return
      }
      overwriteSelection(ctxEditor.value!, content)
    },
  },
]

let dragTarget = shallowRef<Monaco.editor.IStandaloneCodeEditor>()

watch(dragTarget, (editor, previousEditor) => {
  if (previousEditor) {
    previousEditor.getDomNode()!.classList.remove('drop-zone')
  }

  if (editor) {
    editor.getDomNode()!.classList.add('drop-zone')
  }
})

function onDragEnter(event: DragEvent) {
  if (props.options.renderSideBySide === false) return

  let hits = getComposedPath(event)

  if (hits.includes(editor.getOriginalEditor().getDomNode()!)) {
    dragTarget.value = editor.getOriginalEditor()
  } else if (hits.includes(editor.getModifiedEditor().getDomNode()!)) {
    dragTarget.value = editor.getModifiedEditor()
  }

  if (!dragTarget.value) return

  dragTarget.value.getDomNode()!.dataset.dropLabel =
    event.dataTransfer?.types.includes('Files')
      ? 'Drop file here to compare'
      : event.dataTransfer?.types.includes('text/plain')
        ? 'Drop text here to compare'
        : undefined
}

function onDragLeave(event: DragEvent) {
  if (
    (dragTarget.value === editor.getOriginalEditor() &&
      event.target === editor.getOriginalEditor().getDomNode()) ||
    (dragTarget.value === editor.getModifiedEditor() &&
      event.target === editor.getModifiedEditor().getDomNode())
  ) {
    dragTarget.value = undefined
  }
}

async function onDrop(event: DragEvent) {
  if (!dragTarget.value) return

  event.preventDefault()

  let value: string
  if (event.dataTransfer?.types.includes('Files')) {
    value = (await event.dataTransfer.files[0]?.text()) ?? ''
  } else {
    value = event.dataTransfer?.getData('text')!
  }

  dragTarget.value.getModel()!.setValue(value)
  dragTarget.value = undefined
}
</script>

<style>
[data-editor] .codicon-light-bulb {
  display: none;
}

[data-editor][data-no-cursor] .cursors-layer > .cursor {
  display: none !important;
}

[data-editor] .drop-zone::after {
  @apply absolute inset-1 box-border flex items-center justify-center rounded bg-blue-400/20 text-2xl text-blue-400 dark:bg-teal-400/20 dark:text-teal-500;
  content: attr(data-drop-label);
}

[data-editor] :is(.monaco-editor, .monaco-diff-editor, .monaco-component) {
  --vscode-focusBorder: #e5e7eb;
}
</style>
