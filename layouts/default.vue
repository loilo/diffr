<!--
Include some important initial inline scripts/styles and include the Nuxt app.
-->

<template>
  <div>
    <!-- prettier-ignore -->
    <script v-html="`
      // Set theme as early as possible
      if (window.localStorage.getItem('theme')) {
        document.documentElement.dataset.theme = window.localStorage.getItem(
          'theme'
        )
      }

      // Use correct height for mobile devices
      const adjustVh = () => document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`)
      adjustVh()
      window.addEventListener('resize', adjustVh)
    `" />
    <style v-once v-html="generateRules()" />

    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      themeName: state => state.theme.name
    })
  },
  watch: {
    themeName: 'applyTheme'
  },
  created() {
    // Detect initial theme and adjust the store accordingly, even
    // before the component is mounted (to avoid a theme flash).
    if (process.browser) {
      /* eslint-disable nuxt/no-globals-in-created */

      let initialTheme = 'light'

      if (window.localStorage.getItem('theme')) {
        initialTheme = window.localStorage.getItem('theme')
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialTheme = 'dark'
      }

      this.$store.commit('theme/set', initialTheme)

      /* eslint-enable nuxt/no-globals-in-created */
    }
  },
  mounted() {
    this.applyTheme()
  },
  methods: {
    // Generate CSS custom properties from some theme colors
    generateVars(colors) {
      return {
        '--background': colors['editor.background'],
        '--foreground': colors['editor.foreground'],
        '--context-menu-background': colors['editor.contextMenuBackground'],
        '--shadow': colors['editor.foreground'].slice(0, 7) + '33',
        '--shadow-light': colors['editor.foreground'].slice(0, 7) + '11',
        '--remove': colors['diffEditor.removedTextBackground'],
        '--add': colors['diffEditor.insertedTextBackground'],
        '--selection': colors['editor.selectionBackground'],
        '--highlight': colors['editor.hoverHighlightBackground'],
        '--highlight-strong': colors['editor.hoverHighlightBackground'].slice(
          0,
          7
        )
      }
    },

    // Create a string of CSS declarations from a custom properties object
    generateVarsCssString(vars) {
      return Object.entries(vars)
        .map(([property, value]) => `${property}: ${value}`)
        .join(';')
    },

    // Generate some basic styling rules for theming behavior which
    // is applied until the document's scripts have been loaded
    generateRules(colors) {
      return `
      :root[data-theme="light"] {
        ${this.generateVarsCssString(
          this.generateVars(this.$store.state.theme.all.light.colors)
        )}
      }

      @media (prefers-color-scheme: light) {
        :root {
          ${this.generateVarsCssString(
            this.generateVars(this.$store.state.theme.all.light.colors)
          )}
        }
      }

      :root[data-theme="dark"] {
        ${this.generateVarsCssString(
          this.generateVars(this.$store.state.theme.all.dark.colors)
        )}
      }

      @media (prefers-color-scheme: dark) {
        :root {
          ${this.generateVarsCssString(
            this.generateVars(this.$store.state.theme.all.dark.colors)
          )}
        }
      }
      `
    },

    // Apply a theme by setting its name on the
    // <html> element's data-theme property
    applyTheme() {
      document.documentElement.dataset.theme = this.$store.state.theme.name
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/normalize.scss';

// Include some general styles in the default theme

body {
  background-color: var(--background);
  color: var(--foreground);
  transition: color 0.2s, background-color 0.2s;
}

.link {
  color: var(--highlight-strong);
  transition: color 0.2s;
  border-radius: 0.1em;

  &:focus {
    outline: none;
  }

  &[data-focus] {
    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--highlight-strong);
  }
}

.list {
  padding-left: 1.5em;
}

.list li {
  list-style-type: none;
  margin-bottom: 0.5em;

  &::before {
    content: '';
    position: absolute;
    transform: translateX(-100%) translateX(-0.5em) translateY(0.5em);
    width: 0.55em;
    height: 0.55em;
    background-color: var(--highlight-strong);
    clip-path: url('data:image/svg+xml;utf8,<svg width="46" height="24" viewBox="0 0 46 24" xmlns="http://www.w3.org/2000/svg"><path d="M34.69.69L46 12 34.69 23.31 23.37 12 34.7.69zm-22.63 0L23.37 12 12.06 23.31.75 12 12.05.69z" style="fill: var(--highlight-strong)" fill-rule="evenodd"/></svg>');
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
  }
}

.ruler {
  background-color: var(--shadow);
  border: none;
  height: 1px;
  padding: 0;
  margin: 2em 0;
}

::selection {
  background-color: var(--selection);
}
</style>
