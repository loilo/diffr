<template>
  <div style="position: relative; height: 100%">
    <transition name="fade">
      <SquareLoader
        v-if="!loaded"
        :delay-after-finish="400"
        :finish="finishLoadingAnimation"
        @done="initializeEditor"
      >
        Loading Diffr Editor...
      </SquareLoader>
    </transition>
    <client-only>
      <ContextMenu ref="ctx" class="context-menu">
        <li>
          <a
            class="context-menu__item"
            @keydown.enter.prevent="
              cut()
              closeContextMenu()
            "
            @click.prevent="cut"
          >
            <span class="context-menu__icon-wrapper">
              <!-- prettier-ignore -->
              <svg aria-hidden="true" focusable="false" class="context-menu__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M263.39 256L445.66 73.37c3.12-3.12 3.12-8.19 0-11.31-18.74-18.74-49.14-18.74-67.88 0L223.82 216.35l-43.1-43.18C187.92 159.71 192 144.33 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c16.31 0 31.66-4.07 45.11-11.24L184.26 256l-43.15 43.24C127.66 292.07 112.31 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-16.33-4.08-31.71-11.28-45.17l43.1-43.18 153.95 154.29c18.74 18.74 49.14 18.74 67.88 0 3.12-3.12 3.12-8.19 0-11.31L263.39 256zM96 176c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm0 256c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path></svg>
            </span>
            Cut
          </a>
        </li>
        <li>
          <a
            class="context-menu__item"
            @keydown.enter.prevent="
              copy()
              closeContextMenu()
            "
            @click.prevent="copy"
          >
            <span class="context-menu__icon-wrapper">
              <!-- prettier-ignore -->
              <svg aria-hidden="true" focusable="false" class="context-menu__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>
            </span>
            Copy
          </a>
        </li>
        <li>
          <a
            class="context-menu__item"
            @keydown.enter.prevent="
              paste()
              closeContextMenu()
            "
            @click.prevent="paste"
          >
            <span class="context-menu__icon-wrapper">
              <!-- prettier-ignore -->
              <svg aria-hidden="true" focusable="false" class="context-menu__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 193.941l-51.882-51.882A48 48 0 0 0 348.118 128H320V80c0-26.51-21.49-48-48-48h-61.414C201.582 13.098 182.294 0 160 0s-41.582 13.098-50.586 32H48C21.49 32 0 53.49 0 80v288c0 26.51 21.49 48 48 48h80v48c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V227.882a48 48 0 0 0-14.059-33.941zm-84.066-16.184l48.368 48.368a6 6 0 0 1 1.757 4.243V240h-64v-64h9.632a6 6 0 0 1 4.243 1.757zM160 38c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18zm-32 138v192H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h55.414c9.004 18.902 28.292 32 50.586 32s41.582-13.098 50.586-32H266a6 6 0 0 1 6 6v42h-96c-26.51 0-48 21.49-48 48zm266 288H182a6 6 0 0 1-6-6V182a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v170a6 6 0 0 1-6 6z"></path></svg>
            </span>
            Paste
          </a>
        </li>
      </ContextMenu>
      <keep-alive>
        <div
          ref="editor"
          class="editor"
          style="height: 100%"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
          @dragover.prevent
          @drop.prevent="handleDrop"
          @contextmenu.prevent="openContextMenu"
        ></div>
      </keep-alive>
    </client-only>
  </div>
</template>

<script>
import { throttle } from 'lodash-es'
import reactivator from 'vue-reactivator'
import { viewportSize } from 'vue-browser-state'
import ContextMenu from '~/components/context-menu'
import SquareLoader from '~/components/SquareLoader'
import { string, boolean } from '~/assets/prop-types'
import listenOutside from '~/assets/listen-outside'
import monaco from '~/assets/monaco'
import { readBlob } from '~/assets/util'

export default {
  components: { ContextMenu, SquareLoader },
  mixins: [
    reactivator({ viewportSize }),
    listenOutside(
      () => window,
      'blur',
      function() {
        this.$refs.ctx.close()
      }
    )
  ],
  props: {
    original: string.def(''),
    modified: string.def(''),
    display: string.oneOf('split', 'unified').def('split'),
    ignoreTrimWhitespace: boolean.def(true),
    originalEditable: boolean.def(false),
    modifiedEditable: boolean.def(false),
    wordWrap: string.def('on')
  },
  data: vm => ({
    originalModel: undefined,
    modifiedModel: undefined,
    editor: undefined,
    showContextMenu: false,
    contextMenuEditor: undefined,
    dragTarget: undefined,
    loaded: false,
    finishLoadingAnimation: false
  }),
  computed: {
    themeName() {
      return this.$store.state.theme.name
    }
  },
  watch: {
    // Adjust Monaco Editor size on viewport resize
    viewportSize: throttle(function() {
      if (!this.editor) return

      this.editor.layout()
    }, 250),

    // Handle drag&drop classes on editor DOM nodes
    dragTarget(editor, previousEditor) {
      if (previousEditor) {
        previousEditor.getDomNode().classList.remove('drop-zone')
      }

      if (editor) {
        editor.getDomNode().classList.add('drop-zone')
      }
    },

    // Update `ignoreTrimWhitespace` prop/option
    ignoreTrimWhitespace(value) {
      if (!this.editor) return

      this.editor.updateOptions({
        ignoreTrimWhitespace: value
      })
    },

    // Update `display` prop / `renderSideBySide`+`readonly` options
    display(value) {
      if (!this.editor) return

      const isSplit = value === 'split'

      this.editor.updateOptions({
        renderSideBySide: isSplit,
        originalEditable: isSplit,
        modifiedEditable: isSplit,
        readOnly: !isSplit
      })
    },

    // Update `original` editor content
    original(value) {
      if (!this.editor) return

      // Only update the model when the new value actually deviates from it
      if (this.originalModel.getValue() !== value) {
        this.originalModel.setValue(value)
      }
    },

    // Update `modified` editor content
    modified(value) {
      if (!this.editor) return

      // Only update the model when the new value actually deviates from it
      if (this.modifiedModel.getValue() !== value) {
        this.modifiedModel.setValue(value)
      }
    },

    // Set Monaco Editor theme (globally)
    themeName(value) {
      monaco.editor.setTheme(value)
    }
  },
  mounted() {
    // Loading animation is already running through server-side rendered page
    // so the best time to finish it is when the component is embedded.
    this.finishLoadingAnimation = true
  },
  methods: {
    initializeEditor() {
      this.loaded = true

      const originalModel = monaco.editor.createModel(
        this.original,
        'text/plain'
      )
      const modifiedModel = monaco.editor.createModel(
        this.modified,
        'text/plain'
      )

      originalModel.onDidChangeContent(() => {
        this.$emit('update:original', originalModel.getValue())
      })

      modifiedModel.onDidChangeContent(() => {
        this.$emit('update:modified', modifiedModel.getValue())
      })

      for (const themeName in this.$store.state.theme.all) {
        monaco.editor.defineTheme(
          themeName,
          this.$store.state.theme.all[themeName]
        )
      }

      const editor = monaco.editor.createDiffEditor(this.$refs.editor, {
        contextmenu: false,
        enableSplitViewResizing: false,
        fontFamily:
          '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        fontSize: 17,
        ignoreTrimWhitespace: this.ignoreTrimWhitespace,
        links: false,
        matchBrackets: 'never',
        modifiedEditable: true,
        occurrencesHighlight: false,
        originalEditable: true,
        renderSideBySide: this.display === 'split',
        renderWhitespace: 'selection',
        scrollBeyondLastColumn: false,
        scrollBeyondLastLine: false,
        showUnused: false,
        tabCompletion: 'off',
        theme: this.$store.state.theme.name,
        useTabStops: false,
        wordWrap: 'on'
      })

      // Disable editor functionalities by disabling the associated keybinding
      // This is a workaround to avoid extra widgets which break tab navigation
      this.modifyEditorBehavior(editor.getOriginalEditor())
      this.modifyEditorBehavior(editor.getModifiedEditor())

      window.editor = editor

      const stopTabs = event => {
        if (event.code === 'Tab') {
          event.stopPropagation()
        }
      }
      editor.getOriginalEditor().onKeyDown(stopTabs)
      editor.getModifiedEditor().onKeyDown(stopTabs)
      editor.getOriginalEditor().onKeyUp(stopTabs)
      editor.getModifiedEditor().onKeyUp(stopTabs)

      editor.setModel({
        original: originalModel,
        modified: modifiedModel
      })

      this.editor = editor
      this.originalModel = originalModel
      this.modifiedModel = modifiedModel
    },
    modifyEditorBehavior(editor) {
      const keybindings = editor._standaloneKeybindingService

      const disabledActions = [
        'actions.find',
        'actions.findWithSelection',
        'editor.action.startFindReplaceAction',
        'editor.action.nextMatchFindAction',
        'editor.action.previousMatchFindAction',
        'editor.action.nextSelectionMatchFindAction',
        'editor.action.previousSelectionMatchFindAction',
        'editor.action.startFindReplaceAction',
        'editor.action.referenceSearch.trigger'
      ]

      for (const action of disabledActions) {
        keybindings.addDynamicKeybinding(`-${action}`)
      }
    },
    handleDragEnter(event) {
      if (this.display === 'unified') {
        return
      }

      if (
        event
          .composedPath()
          .includes(this.editor.getOriginalEditor().getDomNode())
      ) {
        this.dragTarget = this.editor.getOriginalEditor()
      } else if (
        event
          .composedPath()
          .includes(this.editor.getModifiedEditor().getDomNode())
      ) {
        this.dragTarget = this.editor.getModifiedEditor()
      }

      if (!this.dragTarget) {
        return
      }

      this.dragTarget.getDomNode().dataset.dropLabel = event.dataTransfer.types.includes(
        'Files'
      )
        ? 'Drop file here to compare'
        : event.dataTransfer.types.includes('text/plain')
        ? 'Drop text here to compare'
        : undefined
    },
    handleDragLeave(event) {
      if (
        (this.dragTarget === this.editor.getOriginalEditor() &&
          event.target === this.editor.getOriginalEditor().getDomNode()) ||
        (this.dragTarget === this.editor.getModifiedEditor() &&
          event.target === this.editor.getModifiedEditor().getDomNode())
      ) {
        this.dragTarget = undefined
      }
    },
    async handleDrop(event) {
      if (!this.dragTarget) {
        return
      }

      event.preventDefault()

      let value
      if (event.dataTransfer.types.includes('Files')) {
        value = await readBlob(event.dataTransfer.files[0])
      } else {
        value = event.dataTransfer.getData('text')
      }

      this.dragTarget.getModel().setValue(value)
      this.dragTarget = undefined
    },
    openContextMenu(event) {
      const editor = event
        .composedPath()
        .includes(this.editor.getOriginalEditor().getDomNode())
        ? this.editor.getOriginalEditor()
        : this.editor.getModifiedEditor()

      this.contextMenuEditor = editor
      setImmediate(() => {
        this.$refs.ctx.open(event)
      })
    },
    async cut() {
      const content = this.getSelectedText(this.contextMenuEditor)
      if (content.length > 0) {
        await navigator.clipboard.writeText(content)
        this.overwriteSelection(this.contextMenuEditor, '')
      }
    },
    async copy() {
      const content = this.getSelectedText(this.contextMenuEditor)
      if (content.length > 0) {
        await navigator.clipboard.writeText(content)
      }
    },
    async paste() {
      if (!navigator.clipboard.readText) {
        alert(
          `Your browser does not allow reading from the clipboard.\nPlease press the [${
            navigator.appVersion.includes('Macintosh') ? '⌘V' : 'Ctrl + V'
          }] shortcut on your keyboard or drag&drop a file onto the editor to compare content.`
        )
        return
      }

      let content
      try {
        content = await navigator.clipboard.readText()
      } catch {
        alert('Could not paste content because clipboard access was denied.')
        return
      }

      const editor = this.contextMenuEditor
      this.overwriteSelection(editor, content)
    },
    closeContextMenu() {
      this.$refs.ctx.close()
    },
    getSelectedText(editor) {
      return editor
        .getSelections()
        .map(selection => editor.getModel().getValueInRange(selection))
        .join('\n')
    },
    overwrite(editor, content) {
      const range = new monaco.Range(1, 1, Infinity, Infinity)

      this.overwriteRange(editor, range, content)
    },
    overwriteRange(editor, range, content) {
      const id = {}
      const operation = {
        identifier: id,
        range,
        text: content,
        forceMoveMarkers: true
      }
      editor.executeEdits('overwrite', [operation])
    },
    overwriteSelection(editor, content) {
      const selection = editor.getSelection()
      const range = new monaco.Range(
        selection.startLineNumber,
        selection.startColumn,
        selection.endLineNumber,
        selection.endColumn
      )

      this.overwriteRange(editor, range, content)
    }
  }
}
</script>

<style lang="scss" scoped>
.context-menu {
  background-color: var(--context-menu-background);
  box-shadow: var(--shadow) 0px 2px 4px;
  border: none;
  border-radius: 0;
  padding: 0.5em 0;
  display: block;
  margin: 0;
  min-width: 10rem;
  z-index: 1500;
  position: fixed;
  list-style: none;
  box-sizing: border-box;
  max-height: calc(100% - 50px);
  overflow-y: auto;
  outline: none;

  &__item {
    display: flex;
    align-items: center;
    font-weight: 400;
    text-decoration: none;
    white-space: nowrap;
    padding: 0.5em 1.25em 0.4em;
    font-size: 0.85em;
    cursor: default;
    color: var(--foreground);

    &:hover,
    &:focus {
      background-color: var(--highlight);
      outline: none;
    }
  }

  &__icon-wrapper {
    width: 1.7em;
    display: inline-block;
  }

  &__icon {
    width: auto;
    height: 1.1em;
  }
}

.editor::v-deep .drop-zone::after {
  content: attr(data-drop-label);
  color: var(--highlight-strong);
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  right: 0.25rem;
  bottom: 0.25rem;
  background-color: var(--highlight);
  border: 2px dashed var(--highlight-strong);
  border-radius: 0.2rem;
  box-sizing: border-box;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.4s;
}
</style>
