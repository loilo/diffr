<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string
    label: string
    highlight?: boolean
    disabled?: boolean
    size?: string
  }>(),
  {
    highlight: false,
    disabled: false,
  },
)
</script>

<template>
  <ActionTrigger
    class="group flex flex-col items-stretch rounded-sm px-3 py-1 text-center text-xs/none focus:outline-none focus-visible:outline-2 focus-visible:outline-blue not-disabled:hover:bg-slate-100 dark:focus-visible:outline-teal-400 dark:not-disabled:hover:bg-slate-700 sm:px-2 sm:py-2 sm:text-icon/[1.15] md:py-3"
    :class="
      disabled
        ? 'text-slate-400 dark:text-slate-700'
        : highlight
        ? 'text-teal-900 dark:text-slate-300'
        : 'text-slate-600 dark:text-slate-500'
    "
    :disabled="disabled"
  >
    <div
      class="flex flex-col items-center gap-2 group-not-disabled:group-active:scale-[0.96]"
    >
      <Icon
        v-if="icon"
        :name="icon"
        class="bg-gradient-to-tr"
        :class="[
          typeof size === 'string' ? size : 'h-[1.125rem] w-auto sm:h-5',
          disabled
            ? 'from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-600'
            : highlight
            ? 'from-blue-700 to-teal-300 dark:from-blue-600 dark:to-teal-400'
            : 'from-slate-400 to-slate-300 dark:from-slate-500 dark:to-slate-400',
        ]"
      />
      {{ label }}
    </div>
  </ActionTrigger>
</template>
