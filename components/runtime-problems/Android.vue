<!--
A warning bar, clarifying the missing support for Android.
Only displayed on Android devices (according to user agent).
-->

<template>
  <WarningBar id="unsupported-android" @ignore="ignore">
    Hey there! We're really sorry, but the text editor we use in Diffr does not
    support Android devices. 🙁
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        if (window.navigator.appVersion.indexOf('Android') !== -1) {
          document.documentElement.dataset.unsupportedAndroid = ''
        }
      })
    </script>
  </WarningBar>
</template>

<script>
import WarningBar from '~/components/WarningBar'

export default {
  components: { WarningBar },
  methods: {
    ignore() {
      delete document.documentElement.dataset.unsupportedAndroid
    }
  }
}
</script>

<style lang="scss">
#unsupported-android {
  display: none;
}

:root[data-unsupported-android] #unsupported-android {
  display: block;
}
</style>
