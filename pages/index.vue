<script lang="ts" setup>
let themeToggle = useThemeToggle()

let original = ref('')
let modified = ref('')

let loaded = ref(false)
let loaderFinished = ref(false)

let ignoreTrimWhitespace = ref(true)
let splitView = ref(true)

let options = computed(() => ({
  ignoreTrimWhitespace: unref(ignoreTrimWhitespace),
  renderSideBySide: unref(splitView),
  readOnly: !unref(splitView),
  renderLineHighlight: !unref(splitView) ? ('none' as const) : ('all' as const),
  theme: themeToggle.theme === 'dark' ? 'dark' : 'light',
}))

function swap() {
  ;[original.value, modified.value] = [modified.value, original.value]
}

function clear() {
  original.value = ''
  modified.value = ''
}

let sessionDocument = useSessionStorage<State | null>('document', null, {
  serializer: {
    read: (v: any) => {
      try {
        return JSON.parse(v)
      } catch {
        return null
      }
    },
    write: (v: any) => JSON.stringify(v),
  },
})

let urlState = useUrlState()
onMounted(() => {
  urlState.read().then(value => {
    if (value == null) {
      if (sessionDocument.value === null) return
      value = toRaw(sessionDocument.value)
    }

    if (typeof value.original === 'string') {
      original.value = value.original
    }

    if (typeof value.modified === 'string') {
      modified.value = value.modified
    }

    if (typeof value.ignoreTrimWhitespace === 'boolean') {
      ignoreTrimWhitespace.value = value.ignoreTrimWhitespace
    }

    if (typeof value.splitView === 'boolean') {
      splitView.value = value.splitView
    }

    let url = new URL(window.location.href)
    url.hash = ''
    history.replaceState(history.state, '', url.href)
  })
})

type State = {
  original: string
  modified: string
  ignoreTrimWhitespace: boolean
  splitView: boolean
}
let storableState = computed<State>(() => {
  return {
    original: original.value,
    modified: modified.value,
    ignoreTrimWhitespace: ignoreTrimWhitespace.value,
    splitView: splitView.value,
  }
})
let throttledStorableState = refThrottled(storableState, 1000)

function writeDocument(value: State) {
  sessionDocument.value = toRaw(value)
}

watch(throttledStorableState, value => {
  if (!loaderFinished.value) return

  if (typeof window.requestIdleCallback === 'function') {
    requestIdleCallback(
      () => {
        writeDocument(value)
      },
      { timeout: 400 },
    )
  } else {
    writeDocument(value)
  }
})

let showShare = ref(false)
let sharer = useShare()

let shareUrl = ref('')
let permissionRead = usePermission('clipboard-read')
let clipboard = useClipboard({ source: shareUrl })
let justCopied = ref(false)

watch(showShare, value => {
  if (value) {
    justCopied.value = false
  }
})

function copy() {
  clipboard.copy(shareUrl.value)
  justCopied.value = true
}

function share() {
  urlState.encode(storableState.value).then(hash => {
    const url = new URL(window.location.href)
    url.hash = hash!
    shareUrl.value = url.toString()
  })
  showShare.value = true
}
</script>

<template>
  <div
    class="flex h-[100dvh] flex-col items-stretch"
    :style="{
      '--sidebar-measure': '6.75rem',
      '--sidebar-width': loaded ? 'var(--sidebar-measure)' : '0rem',
    }"
  >
    <HeadlessTransitionRoot appear :show="showShare" as="template">
      <HeadlessDialog as="div" @close="showShare = false" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-blue-900/25 backdrop-blur-sm dark:bg-slate-500/50"
          />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="diffr-prose w-full max-w-lg transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all prose-headings:my-0 prose-hr:my-8 dark:bg-slate-800 sm:p-8 md:p-10"
              >
                <HeadlessDialogTitle as="h2">
                  Share this diff
                </HeadlessDialogTitle>
                <div class="mt-2 text-base">
                  <p>
                    <template v-if="sharer.isSupported.value">
                      Use the button below to share your diff with others.
                    </template>
                    <template v-else>
                      Copy the URL below to share your diff with others:

                      <input
                        class="-mb-2 mt-6 w-full rounded border-2 border-slate-100 bg-slate-100 px-3 py-3 text-sm text-slate-600 focus:border-blue focus:outline-none dark:border-slate-600 dark:bg-slate-600 dark:text-slate-300 dark:focus:border-teal-400"
                        :value="shareUrl"
                        readonly
                      />
                    </template>
                  </p>
                </div>

                <div class="mt-4 flex items-center gap-7 md:mt-6">
                  <template v-if="sharer.isSupported.value">
                    <Button
                      theme="fancy"
                      @click="sharer.share({ url: shareUrl, title: 'My Diff' })"
                      :disabled="permissionRead === 'denied'"
                    >
                      Share
                    </Button>
                  </template>
                  <template v-else>
                    <Button
                      theme="fancy"
                      @click="copy"
                      :disabled="permissionRead === 'denied'"
                    >
                      Copy URL
                    </Button>
                  </template>

                  <Button theme="text" @click="showShare = false">
                    Close
                  </Button>
                </div>

                <div v-if="!sharer.isSupported && permissionRead === 'denied'">
                  <p class="text-sm">
                    Unfortunately, your browser denies copying to your
                    clipboard. Please copy the URL manually.
                  </p>
                </div>

                <Alert v-if="justCopied" class="mt-4">
                  The URL has been copied to your clipboard.
                </Alert>

                <hr />

                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Note that Diffr's highest maxim is to never share your input
                  with a third party. Therefore, no direct collaboration on your
                  diff is possible with people you share it with — they will
                  receive a fresh copy of the text, and their changes will not
                  affect your data.
                </p>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>

    <div
      class="grid h-full min-h-0 grid-rows-[1fr_auto] transition-[grid-template-columns] duration-500 md:grid-cols-[1fr_var(--sidebar-width)]"
    >
      <div
        v-if="!loaderFinished"
        class="relative col-span-1 col-start-1 row-span-1 row-start-1"
      >
        <SquareLoader
          :delay-after-finish="400"
          :finish="loaded"
          @done="loaderFinished = true"
        />
      </div>
      <div
        class="col-span-1 col-start-1 row-span-1 row-start-1"
        :class="{ 'opacity-0': !loaderFinished }"
      >
        <DiffEditor
          v-model:original="original"
          v-model:modified="modified"
          :options="options"
          @load="loaded = true"
        />
      </div>

      <div
        data-sidebar
        class="flex items-stretch gap-1 overflow-auto bg-slate-50 p-2 shadow-xl dark:bg-slate-800 sm:grid sm:grid-cols-6 md:flex md:w-[var(--sidebar-measure)] md:flex-col"
      >
        <ToggleButton v-model="splitView" icon="split" label="Split View" />
        <ToggleButton
          v-model="ignoreTrimWhitespace"
          icon="indent"
          label="Ignore Trim Whitespace"
        />

        <IconButton
          class="md:my-auto"
          @click="share"
          highlight
          label="Share"
          icon="share"
          size="h-5 sm:h-6 w-auto"
          :disabled="original.length === 0 && modified.length === 0"
        />

        <IconButton
          @click="swap"
          highlight
          label="Swap"
          icon="swap"
          :disabled="!splitView"
        />
        <IconButton @click="clear" highlight label="Clear" icon="trash" />
        <IconButton
          @click="themeToggle.toggle()"
          highlight
          :label="
            themeToggle.auto
              ? 'System'
              : themeToggle.theme === 'dark'
              ? 'Dark Mode'
              : 'Light Mode'
          "
          :icon="
            themeToggle.auto
              ? 'screen'
              : themeToggle.theme === 'dark'
              ? 'moon'
              : 'sun'
          "
        />
        <IconButton
          highlight
          link="/about"
          label="About Diffr"
          icon="diffr"
          size="h-6 w-auto"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-sidebar] {
  --sb-track-color: theme('colors.slate.200');
  --sb-thumb-color: theme('colors.slate.300');
  --sb-size: 6px;

  @at-root :root.dark & {
    --sb-track-color: theme('colors.slate.900');
    --sb-thumb-color: theme('colors.blue.800');
  }

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 6px;
  }
}
</style>
