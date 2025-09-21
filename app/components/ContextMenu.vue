<script lang="ts" setup>
import type { MaybeElementRef } from '@vueuse/core'

type ContextItem = {
  label: string
  icon?: string
  action: (event: MouseEvent) => void
}

let props = withDefaults(
  defineProps<{
    target?: MaybeElementRef
    items: ContextItem[] | ((event: PointerEvent) => ContextItem[])
    strategy?: 'offset' | 'page'
    preventMousedown?: boolean
  }>(),
  {
    strategy: 'page',
    preventMousedown: true,
  },
)

let emit = defineEmits<{
  (e: 'open', event: PointerEvent): void
}>()

let parentEl = useParentElement()
let target = computed(() => unrefElement(props.target) ?? unref(parentEl))
let items = ref<ContextItem[]>([])

let anchorStyle = ref({
  left: '0px',
  top: '0px',
})

let menuItemsRef = ref<any>()
let triggerRef = ref<HTMLElement>()
let pending = autoResetRef(false, 200)

function calculateOffset(
  element: HTMLElement | null,
  property: 'offsetLeft' | 'offsetTop',
) {
  if (!element) return 0

  let value = 0
  do {
    if (!isNaN(element![property])) {
      value += element![property]
    }
  } while ((element = element!.offsetParent as HTMLElement | null))

  return value
}

useEventListener(target, 'mousedown', (event: MouseEvent) => {
  if (event.button !== 2) return
  event.preventDefault()
})

useEventListener(target, 'contextmenu', (event: PointerEvent) => {
  event.preventDefault()
  pending.value = true

  items.value =
    typeof props.items === 'function' ? props.items(event) : props.items

  let element = event.target as HTMLElement

  let [left, top] =
    props.strategy === 'offset'
      ? [
          calculateOffset(element, 'offsetLeft') + event.offsetX,
          calculateOffset(element, 'offsetTop') + event.offsetY,
        ]
      : [event.x, event.y]

  anchorStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
  }

  setTimeout(() => {
    triggerRef.value!.click()
    emit('open', event)
  }, 0)
})

function onHide() {
  if (pending.value) {
    triggerRef.value!.click()
  }
}

function onShow() {
  setTimeout(() => {
    unrefElement(menuItemsRef.value!)?.focus()
  }, 50)
}

function action(callback: (event: MouseEvent) => void, event: MouseEvent) {
  callback(event)
  triggerRef.value!.click()
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <div data-context-menu class="absolute" :style="anchorStyle">
        <VDropdown
          theme="ctx"
          :auto-hide="true"
          placement="bottom-start"
          :distance="-5"
          :skidding="-5"
          :triggers="['click']"
          @apply-show="onShow"
          @apply-hide="onHide"
        >
          <button
            data-ctx-trigger
            tabindex="-1"
            aria-hidden="true"
            ref="triggerRef"
            class="pointer-events-none absolute h-px w-px opacity-0"
          />
          <template #popper>
            <HeadlessMenu>
              <HeadlessMenuItems
                ref="menuItemsRef"
                static
                class="min-w-[7rem] rounded border border-slate-300 bg-white shadow focus:outline-none"
              >
                <div class="px-1 py-1">
                  <template v-for="item in items">
                    <HeadlessMenuItem v-slot="{ active }">
                      <slot name="item" v-bind="item">
                        <button
                          :class="[
                            active
                              ? 'bg-slate-100 text-teal-900'
                              : 'text-slate-600',
                            'group flex w-full items-center rounded px-2.5 py-2 text-sm',
                          ]"
                          @click="action(item.action, $event)"
                        >
                          <slot name="inner-item" v-bind="item">
                            <span class="flex items-center gap-2.5">
                              <Icon
                                :name="item.icon ?? 'blank'"
                                class="h-4 w-auto"
                              />
                              {{ item.label }}
                            </span>
                          </slot>
                        </button>
                      </slot>
                    </HeadlessMenuItem>
                  </template>
                </div>
              </HeadlessMenuItems>
            </HeadlessMenu>
          </template>
        </VDropdown>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style>
.v-popper__arrow-container,
.v-popper__arrow-container * {
  visibility: hidden !important;
}

.v-popper__inner {
  overflow: visible !important;
}
</style>
