<!--
A warning bar, clarifying the missing support for Internet Explorer.
Only displayed in Internet Explorer (according to user agent).
-->

<template>
  <WarningBar id="unsupported-ie" @ignore="ignore">
    Sorry, this app does not run on Internet Explorer — please
    <a href="http://outdatedbrowser.com/en">install a modern browser</a>
    to use this Diffr.

    <script>
      document.addEventListener('DOMContentLoaded', function() {
        if (window.navigator.appVersion.indexOf('Trident') !== -1) {
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
#unsupported-ie {
  display: none;
}

:root[data-unsupported-ie] #unsupported-ie {
  display: block;
}
</style>
