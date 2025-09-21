<script lang="ts" setup>
withDefaults(
  defineProps<{
    modelValue: boolean
    icon?: string
    label: string
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

let emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <IconButton
    @click="emit('update:modelValue', !modelValue)"
    :highlight="modelValue && !disabled"
    :label="label"
    :icon="icon"
    :aria-pressed="String(modelValue)"
  />
</template>
