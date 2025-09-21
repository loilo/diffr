<script lang="ts" setup>
let props = defineProps<{
  name: string
  alt?: string
}>()

let iconUrl = computed(() => useAbsoluteUrl(`icons/${props.name}.svg`))
let iconCssUrl = computed(() => `url('${iconUrl.value}')`)
</script>

<template>
  <div class="icon inline-flex" :style="{ '--icon-mask': iconCssUrl }">
    <img class="block opacity-0" :src="iconUrl" :alt="alt" draggable="false" />
  </div>
</template>

<style scoped>
.icon {
  mask-image: var(--icon-mask);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
}

:where(.icon) {
  background-color: currentColor;
}
</style>
