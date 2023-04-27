<script lang="ts" setup>
let props = withDefaults(
  defineProps<{
    theme?: 'text' | 'fancy'
  }>(),
  {
    theme: 'text',
  },
)
</script>

<template>
  <ActionTrigger
    :class="{
      'inline-flex justify-center rounded bg-gradient-to-tr from-blue-700 to-teal-300 px-4 py-2 text-sm font-medium text-white shadow [text-shadow:0_0.125em_0.25em_rgba(0,0,0,0.2)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue disabled:bg-slate-100 disabled:bg-none disabled:text-slate-300 disabled:[text-shadow:none] not-disabled:hover:bg-blue-200 not-disabled:hover:from-blue-600 not-disabled:hover:to-teal-200 not-disabled:active:translate-y-px not-disabled:active:scale-[0.98] not-disabled:active:from-blue-800 not-disabled:active:to-teal-400 not-disabled:active:text-teal-100 dark:from-teal-700 dark:to-teal-500 dark:text-teal-50 dark:focus-visible:outline-teal-400 dark:disabled:bg-slate-400 dark:disabled:text-slate-300 dark:not-disabled:hover:from-teal-600 dark:not-disabled:hover:to-teal-400 dark:not-disabled:hover:text-white dark:not-disabled:active:from-teal-800 dark:not-disabled:active:to-teal-600 dark:not-disabled:active:text-teal-100 md:px-5 md:py-2.5':
        theme === 'fancy',
      'inline-flex text-sm text-teal-900 underline decoration-blue-400 underline-offset-2 disabled:text-slate-300 disabled:decoration-slate-100 not-disabled:hover:text-teal-700 not-disabled:active:text-teal-800 dark:text-teal-200 dark:decoration-teal-400 dark:disabled:text-slate-500 dark:disabled:decoration-slate-600 dark:not-disabled:hover:text-teal-100 dark:not-disabled:active:text-teal-400':
        theme === 'text',
    }"
    v-bind="$attrs"
    ><slot
  /></ActionTrigger>
</template>
