<!--
A dismissble bar at the top of the screen, showing a used-defined warning message.
-->

<template>
  <div class="warning" role="alert">
    <slot />
    <client-only>
      <button class="warning__button" @click="$emit('ignore')">
        Ignore
      </button>
    </client-only>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.warning {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  padding: 1.25em 7em 1.35em 2em;
  background: #ffd88f;
  color: #71592b;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

  line-height: 1.35;

  a {
    color: #71592b;
    text-shadow: 0 1px #ffebc6cc;
  }

  &__button {
    position: absolute;
    right: 1em;
    padding: 0.5em 1em;
    background: #eac580;
    border-radius: 0.2em;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media screen and (max-width: 768px) {
  .warning {
    padding: 1.25em 1.5em 1.35em;

    &__button {
      display: block;
      position: static;
      margin-top: 1em;
      transform: none;
    }
  }
}
</style>
