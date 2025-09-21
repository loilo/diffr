<!--
An animated loader, playing with the parts of the Diffr logo.
Thanks to the CSS animation, the loader is already visible and animated
before any JavaScript is loaded on the page.
-->

<script lang="ts" setup>
let props = withDefaults(
  defineProps<{
    finish?: boolean
    delayAfterFinish?: number
  }>(),
  {
    finish: false,
    delayAfterFinish: 0,
  },
)

let emit = defineEmits<{
  (e: 'done'): void
}>()

let square1Ref = ref<HTMLElement>()!
let square2Ref = ref<HTMLElement>()!

watch(
  () => props.finish,
  value => {
    if (!value) return
    finishAnimation()
  },
)

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function finishAnimation() {
  // Skip all animation steps if the document is hidden
  if (document.hidden) {
    emit('done')
    return
  }

  square1Ref.value!.style.animationPlayState = 'paused'
  square2Ref.value!.style.animationPlayState = 'paused'

  const square1Transform = window.getComputedStyle(square1Ref.value!).transform
  const square2Transform = window.getComputedStyle(square2Ref.value!).transform

  square1Ref.value!.style.animation = 'none'
  square1Ref.value!.style.transform = square1Transform
  square2Ref.value!.style.animation = 'none'
  square2Ref.value!.style.transform = square2Transform

  await delay(0)

  let whenTransitionEnd = new Promise<void>(resolve => {
    square1Ref.value!.addEventListener(
      'transitionend',
      () => {
        resolve()
      },
      { once: true },
    )
  })

  square1Ref.value!.removeAttribute('style')
  square2Ref.value!.removeAttribute('style')

  await delay(0)
  await whenTransitionEnd

  await delay(props.delayAfterFinish)

  emit('done')
}
</script>

<template>
  <div
    ref="loading"
    class="loading z-1 absolute inset-0 flex h-full flex-col items-center justify-center"
    :class="{ 'loading--finish': finish }"
  >
    <div class="loading__spinner" role="presentation">
      <div
        ref="square1Ref"
        class="loading__spinner-square-1 bg-gradient-to-t from-blue-500 to-teal-400"
      />
      <div
        ref="square2Ref"
        class="loading__spinner-square-2 bg-gradient-to-t from-teal-500 to-teal-700"
      />
    </div>
    <span class="mt-6 block text-2xl"
      ><slot>Loading Diffr Editor...</slot></span
    >
    <span
      class="mt-2 block animate-fade-in text-base opacity-0"
      style="--animation-delay: 3000ms"
      ><slot name="subtitle"
        >This may take a moment on your first visit.</slot
      ></span
    >
  </div>
</template>

<style lang="scss" scoped>
$shadow-distance: 1px;
$shadow-blur: 2px;
$shadow-spread: 0;
$shadow-color: rgba(0, 0, 0, 0.25);

.loading {
  &__label {
    display: block;
    margin-top: 1.5em;
  }

  &__spinner {
    margin-top: -2.5em;

    width: 68px;
    height: 68px;
    position: relative;

    &-square-1,
    &-square-2 {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0 $shadow-distance $shadow-blur $shadow-spread $shadow-color;

      animation: spin-square 2.5s infinite ease-in-out;
    }

    &-square-2 {
      animation-delay: -1.1s;
    }
  }
}

.loading--finish {
  .loading__spinner-square-1,
  .loading__spinner-square-2 {
    animation: none;
    transition: all 0.4s;
    box-shadow: #{0.5 * $shadow-distance} #{0.5 * $shadow-distance} $shadow-blur
      $shadow-spread $shadow-color;
  }

  .loading__spinner-square-1 {
    transform: translate(-13px, -13px) translate(24px, 34px) rotate(45deg);
  }

  .loading__spinner-square-2 {
    transform: translate(-13px, -13px) translate(24px, 34px) translateX(35px)
      translateX(-14px) rotate(45deg);
  }
}

@keyframes spin-square {
  0% {
    box-shadow: 0 $shadow-distance $shadow-blur $shadow-spread $shadow-color;
    transform: rotate(0deg);
  }

  25% {
    box-shadow: -#{2 * $shadow-distance} 0 #{2 * $shadow-blur} #{2 * $shadow-spread}
      $shadow-color;
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }

  50% {
    box-shadow: 0 -#{$shadow-distance} $shadow-blur $shadow-spread $shadow-color;
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }

  75% {
    box-shadow: #{2 * $shadow-distance} 0 #{2 * $shadow-blur} #{2 *
      $shadow-spread} $shadow-color;
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }

  100% {
    box-shadow: 0 $shadow-distance $shadow-blur $shadow-spread $shadow-color;
    transform: rotate(-360deg);
  }
}
</style>
