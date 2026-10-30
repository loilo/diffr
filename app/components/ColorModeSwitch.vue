<script lang="ts" setup>
let mounted = useMounted()
let themeToggle = useThemeToggle()
</script>

<template>
  <ActionTrigger
    @click="themeToggle.toggle()"
    :aria-pressed="
      themeToggle.auto ? 'mixed' : String(themeToggle.theme === 'dark')
    "
    class="switch disabled:opacity-40"
    :class="{ mounted }"
    :disabled="!mounted"
  >
    <span class="sr-only">Color Mode: </span>
    <ClientOnly>
      <input
        ref="checkboxRef"
        :checked="themeToggle.theme === 'dark'"
        :indeterminate="themeToggle.auto"
        type="checkbox"
        class="switch__input"
        tabindex="-1"
      />
    </ClientOnly>
    <span class="switch__slider">
      <span
        class="switch__icon flex items-center justify-center text-slate-200 dark:text-slate-700"
      >
        <Icon
          name="screen"
          alt="Align with the operating system"
          class="h-4 w-4"
          :class="themeToggle.auto ? 'block' : 'hidden'"
        />
        <Icon
          name="sun"
          alt="Light Mode"
          class="h-4 w-4"
          :class="
            !themeToggle.auto && themeToggle.theme === 'light'
              ? 'block'
              : 'hidden'
          "
        />
        <Icon
          name="moon"
          alt="Dark Mode"
          class="h-4 w-4"
          :class="
            !themeToggle.auto && themeToggle.theme === 'dark'
              ? 'block'
              : 'hidden'
          "
        />
      </span>
    </span>
  </ActionTrigger>
</template>

<style lang="scss">
// The switch itself - the box around the slider
.switch {
  --switch-size: 2em;
  --switch-padding: 0.2em;
  --switch-additional-width: 0.3em;
  --switch-transition: 200ms;

  --background: theme('colors.slate.300');
  --foreground: theme('colors.slate.700');
  --highlight-strong: theme('colors.blue.400');

  @at-root :root.dark & {
    --background: theme('colors.slate.700');
    --foreground: theme('colors.slate.300');
    --highlight-strong: theme('colors.teal.400');
  }

  position: relative;
  display: inline-block;
  width: calc(
    2 * var(--switch-size) + 2 * var(--switch-padding) +
      var(--switch-additional-width)
  );
  height: calc(var(--switch-size) + 2 * var(--switch-padding));

  // Hide default HTML checkbox
  &__input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  // The slider
  &__slider {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    border-radius: calc(var(--switch-size) + 2 * var(--switch-padding));
    @apply shadow-inner-xs;

    &::before {
      opacity: 0;
      position: absolute;
      content: '';
      height: var(--switch-size);
      width: var(--switch-size);
      left: var(--switch-padding);
      bottom: var(--switch-padding);
      background-color: var(--foreground);
      border-radius: 50%;
      transition-property: transform, opacity;
      transition-duration: var(--switch-transition);
      @apply shadow shadow-slate-500/50;
    }
  }

  &__icon {
    opacity: 0;
    position: absolute;
    height: var(--switch-size);
    width: var(--switch-size);
    left: var(--switch-padding);
    bottom: var(--switch-padding);
    transition-property: transform, opacity;
    transition-duration: var(--switch-transition);
  }

  &.mounted &__slider::before,
  &.mounted &__icon {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible &__slider::before {
    outline: 2px solid var(--highlight-strong);
    outline-offset: 2px;
  }

  // Use a fallback to avoid the switch
  // flipping over when the component is hydrated
  &__input:checked + &__slider::before,
  &__input:checked + &__slider &__icon {
    transform: translateX(
      calc(var(--switch-size) + var(--switch-additional-width))
    );
  }

  &__input:indeterminate + &__slider::before,
  &__input:indeterminate + &__slider &__icon {
    transform: translateX(
      calc((var(--switch-size) + var(--switch-additional-width)) / 2)
    );
  }
}
</style>
