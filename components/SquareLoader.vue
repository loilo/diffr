<!--
An animated loader, playing with the parts of the Diffr logo.
Thanks to the CSS animation, the loader is already visible and animated
before any JavaScript is loaded on the page.
-->

<template>
  <div ref="loading" class="loading" :class="{ 'loading--finish': finish }">
    <div class="loading__spinner" role="presentation">
      <div ref="square1" class="loading__spinner-square-1" />
      <div ref="square2" class="loading__spinner-square-2" />
    </div>
    <span class="loading__label"><slot>Loading</slot></span>
  </div>
</template>

<script>
import { boolean, number } from '~/assets/prop-types'
import { whenEventDispatches, delay } from '~/assets/util'

export default {
  props: {
    finish: boolean.def(false),
    delayAfterFinish: number.def(0)
  },
  watch: {
    finish(value) {
      if (value) {
        this.finishAnimation()
      }
    }
  },
  methods: {
    async finishAnimation() {
      this.$refs.square1.style.animationPlayState = 'paused'
      this.$refs.square2.style.animationPlayState = 'paused'

      const square1Transform = window.getComputedStyle(this.$refs.square1)
        .transform
      const square2Transform = window.getComputedStyle(this.$refs.square2)
        .transform

      this.$refs.square1.style.animation = 'none'
      this.$refs.square1.style.transform = square1Transform
      this.$refs.square2.style.animation = 'none'
      this.$refs.square2.style.transform = square2Transform

      await delay(0)

      const whenTransitionEnd = whenEventDispatches(
        this.$refs.square1,
        'transitionend'
      )

      this.$refs.square1.removeAttribute('style')
      this.$refs.square2.removeAttribute('style')

      await delay(0)
      await whenTransitionEnd

      await delay(this.delayAfterFinish)

      this.$emit('done')
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow-distance: 1px;
$shadow-blur: 2px;
$shadow-spread: 0;
$shadow-color: rgba(0, 0, 0, 0.25);

.loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5em;
  font-weight: 300;

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

    &-square-1 {
      background-color: #2fb1f0;
    }

    &-square-2 {
      background-color: #1d7caa;
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
    mix-blend-mode: color-dodge;
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
