<template>
  <div class="wrapper">
    <div>
      <noscript v-html="noscript" />

      <UnsupportedIE />
      <UnsupportedAndroid />

      <DiffEditor
        :original.sync="original"
        :modified.sync="modified"
        :display="splitView ? 'split' : 'unified'"
        :ignore-trim-whitespace="ignoreTrimWhitespace"
        class="diff-editor"
      />
    </div>
    <div class="actions" style="--actions-number: 5">
      <button
        v-focus-ring
        type="button"
        class="action-button"
        :class="{ active: splitView, disabled: !mounted }"
        :aria-pressed="String(splitView)"
        @click="splitView = !splitView"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="action-button__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z"></path></svg>
        <span class="action-button__label">Split View</span>
      </button>

      <button
        v-focus-ring
        type="button"
        class="action-button"
        :class="{ active: ignoreTrimWhitespace, disabled: !mounted }"
        :aria-pressed="String(ignoreTrimWhitespace)"
        @click="ignoreTrimWhitespace = !ignoreTrimWhitespace"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="action-button__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M27.31 148.7a15.63 15.63 0 0 0-11.17-4.7A16 16 0 0 0 0 160v192a16 16 0 0 0 16.13 16 15.58 15.58 0 0 0 11.18-4.7l96-96a16 16 0 0 0 0-22.62zM32 313.36V198.64L89.37 256zM440 48H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm0 384H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"></path></svg>
        <span class="action-button__label">Ignore Trim Whitespace</span>
      </button>

      <button
        v-focus-ring
        type="button"
        class="action-button action-button--split"
        :class="{ disabled: !mounted }"
        @click="swap"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="action-button__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.485 184.485l-92.485 92c-4.687 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.687-4.686-4.687-12.284 0-16.971L452.893 192H12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h440.905l-60.946-60.444c-4.687-4.686-4.687-12.284 0-16.971l7.07-7.07c4.687-4.686 12.284-4.686 16.971 0l92.485 92c4.687 4.686 4.686 12.284 0 16.97zm-504.97 160l92.485 92c4.687 4.686 12.284 4.686 16.971 0l7.07-7.07c4.687-4.686 4.687-12.284 0-16.971L59.095 352H500c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12H59.107l60.934-60.444c4.687-4.686 4.687-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.687-16.97 0l-92.485 92c-4.686 4.686-4.687 12.284 0 16.97z"></path></svg>
        <span class="action-button__label">Swap</span>
      </button>

      <button
        v-focus-ring
        type="button"
        class="action-button"
        :class="{ active: darkMode, disabled: !mounted }"
        :aria-pressed="String(darkMode)"
        @click="darkMode = !darkMode"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="action-button__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M333.9 426.2c-.6 0-1.2.1-1.8.2-9.6 1.8-19.2 2.7-28.6 2.7-81.3 0-150-66.1-150-150.4 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7-11.6-2.1-23.3-3.2-35-3.2C85.9 128 0 213.9 0 320c0 106 85.8 192 191.8 192 59.2 0 113.2-26.9 149-71.1 4.9-6 .3-14.7-6.9-14.7zM191.8 480C103.7 480 32 408.2 32 320c0-78.5 56.8-144 131.4-157.5-26.6 32.2-41.8 73.2-41.8 116.2 0 89.8 65.1 164.7 150.5 179.7-24 14-51.6 21.6-80.3 21.6zm311.4-286.3l-48.6-24.3-24.3-48.6c-5.4-10.8-23.2-10.8-28.6 0l-24.3 48.6-48.6 24.3c-5.4 2.7-8.8 8.2-8.8 14.3s3.4 11.6 8.8 14.3l48.6 24.3 24.3 48.6c2.7 5.4 8.2 8.8 14.3 8.8s11.6-3.4 14.3-8.8l24.3-48.6 48.6-24.3c5.4-2.7 8.8-8.2 8.8-14.3s-3.4-11.6-8.8-14.3zm-67.7 26.7c-3.1 1.5-5.6 4.1-7.2 7.2L416 252.2l-12.3-24.7c-1.6-3.1-4.1-5.6-7.2-7.2L371.8 208l24.7-12.4c3.1-1.5 5.6-4.1 7.2-7.2l12.3-24.7 12.3 24.7c1.6 3.1 4.1 5.6 7.2 7.2l24.7 12.4-24.7 12.4zM304 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32z"></path></svg>
        <span class="action-button__label">Dark mode</span>
      </button>

      <a
        v-focus-ring
        class="action-button"
        :href="`${POSSIBLY_EMPTY_PUBLIC_PATH}/about`"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="action-button__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M208 368.667V208c0-15.495-7.38-29.299-18.811-38.081C210.442 152.296 224 125.701 224 96c0-52.935-43.065-96-96-96S32 43.065 32 96c0 24.564 9.274 47.004 24.504 64H56c-26.467 0-48 21.533-48 48v48c0 23.742 17.327 43.514 40 47.333v65.333C25.327 372.486 8 392.258 8 416v48c0 26.467 21.533 48 48 48h144c26.467 0 48-21.533 48-48v-48c0-23.742-17.327-43.514-40-47.333zM128 32c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zm88 432c0 8.837-7.163 16-16 16H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h24V272H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h104c8.837 0 16 7.163 16 16v192h24c8.837 0 16 7.163 16 16v48z"></path></svg>
        <span class="action-button__label">About Diffr</span>
      </a>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash-es'
import UnsupportedAndroid from '~/components/runtime-problems/Android.vue'
import UnsupportedIE from '~/components/runtime-problems/InternetExplorer.vue'
import DiffEditor from '~/components/DiffEditor.vue'
import focusRing from '~/assets/focus-ring'
import { read, write } from '~/assets/url-state'

function idle() {
  if (window.requestIdleCallback) {
    return new Promise(resolve => window.requestIdleCallback(resolve))
  } else {
    return Promise.resolve()
  }
}

export default {
  components: {
    UnsupportedAndroid,
    UnsupportedIE,
    DiffEditor
  },
  directives: {
    focusRing
  },
  data: vm => ({
    original: '',
    modified: '',
    splitView: true,
    ignoreTrimWhitespace: true,
    mounted: false,
    ready: false,
    noscript: `<header class="warning" role="alert">
        Diffr is a client-side app. Please enable JavaScript and refresh this
        page to use it.
      </header>`
  }),
  computed: {
    darkMode: {
      get() {
        return this.$store.state.theme.name === 'dark'
      },
      set(on) {
        const name = on ? 'dark' : 'light'

        window.localStorage.setItem('theme', name)
        this.$store.commit('theme/set', name)
      }
    }
  },
  created() {
    if (process.browser) {
      this.readyPromise = read().then(data => {
        if (data) {
          this.original = data.original
          this.modified = data.modified
          this.splitView = data.splitView
          this.ignoreTrimWhitespace = data.ignoreTrimWhitespace
        }

        this.ready = true
      })
    }
  },
  async mounted() {
    await this.readyPromise

    this.mounted = true

    this.$watch('original', this.saveStateToUrl)
    this.$watch('modified', this.saveStateToUrl)
    this.$watch('splitView', this.saveStateToUrl)
    this.$watch('ignoreTrimWhitespace', this.saveStateToUrl)
  },
  methods: {
    saveStateToUrl: throttle(async function() {
      // Await browser idle state to avoid blocking the UI
      await idle()

      await write(
        JSON.stringify({
          original: this.original,
          modified: this.modified,
          splitView: this.splitView,
          ignoreTrimWhitespace: this.ignoreTrimWhitespace
        })
      )
    }, 500),
    swap() {
      const original = this.original
      const modified = this.modified

      this.original = modified
      this.modified = original
    }
  }
}
</script>

<style lang="scss">
:root,
body {
  overscroll-behavior: none;
}
</style>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 7em;
  height: calc(var(--vh, 1vh) * 100);
}

.actions {
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-width: 0;
  box-shadow: 0 0 2px var(--shadow);
}

.wrapper::v-deep {
  // Make light/dark mode switch a little bit smoother
  .monaco-editor,
  .monaco-editor-background,
  .monaco-editor .inputarea.ime-input,
  .monaco-editor .margin,
  .monaco-diff-editor .line-insert,
  .monaco-diff-editor .char-insert,
  .monaco-diff-editor .line-delete,
  .monaco-diff-editor .char-delete {
    transition: background-color 0.2s;
  }

  .monaco-editor .view-overlays .current-line {
    transition: border-color 0.2s;
  }

  .monaco-editor .delete-sign + .line-numbers {
    color: var(--remove-text);
  }

  .monaco-editor .insert-sign + .line-numbers {
    color: var(--add-text);
  }
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.825em;
  padding: 0.75em;
  margin: 0.25em 0.5em;
  border-radius: 0.2em;
  border: 1px solid transparent;
  color: inherit;
  text-decoration: none;
  line-height: inherit;
  background-color: transparent;

  &--split {
    margin-top: auto;
  }

  &:active {
    transform: scale(0.965);
  }

  &:focus {
    outline: none;
  }

  &[data-focus] {
    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--highlight-strong);
  }

  &:first-child {
    margin-top: 0.5em;
  }

  &:last-child {
    margin-bottom: 0.5em;
  }

  &:not(a) {
    cursor: default;
  }

  &.active {
    /* background-color: var(--shadow-light); */

    svg {
      color: var(--highlight-strong);
    }
  }

  &.disabled {
    opacity: 0.4;
  }

  &:not(.disabled):hover {
    background-color: var(--highlight);
  }
}

.action-button__icon {
  width: auto;
  height: 1.5em;
  padding-bottom: 0.75em;
  flex-shrink: 0;
}

@media screen and (max-width: 768px) {
  .options {
    flex-direction: row;
  }

  .wrapper {
    grid-template-columns: auto;
    grid-template-rows: 1fr 5em;
  }

  .actions {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }

  .action-button {
    margin: 0.25em 0;
    flex-basis: 7.5em;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;

    &:first-child,
    &:last-child {
      margin: 0.25em 0;
    }
  }
}

@media screen and (max-width: 414px) {
  .wrapper {
    grid-template-rows: 1fr 3.5em;
  }

  .actions {
    justify-content: stretch;
  }

  .action-button {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: calc(100% / var(--actions-number, 5));
    margin: 0.25em 0;
    justify-content: center;
    box-sizing: border-box;

    &__label {
      display: none;
    }

    &__icon {
      padding: 0;
    }
  }
}
</style>
