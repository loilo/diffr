<template>
  <div class="wrapper">
    <header class="header">
      <a v-focus-ring href="/" class="link back-link" @click="toTheApp">
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
        to the Diffr App
      </a>

      <label class="switch" :class="{ 'switch--ready': mounted }">
        <input
          v-model="darkMode"
          v-focus-ring
          type="checkbox"
          class="switch__input"
        />
        <span class="switch__slider"></span>

        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="switch__sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 143.7c-61.8 0-112 50.3-112 112.1s50.2 112.1 112 112.1 112-50.3 112-112.1-50.2-112.1-112-112.1zm0 192.2c-44.1 0-80-35.9-80-80.1s35.9-80.1 80-80.1 80 35.9 80 80.1-35.9 80.1-80 80.1zm256-80.1c0-5.3-2.7-10.3-7.1-13.3L422 187l19.4-97.9c1-5.2-.6-10.7-4.4-14.4-3.8-3.8-9.1-5.5-14.4-4.4l-97.8 19.4-55.5-83c-6-8.9-20.6-8.9-26.6 0l-55.5 83-97.8-19.5c-5.3-1.1-10.6.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4L90 187 7.1 242.5c-4.4 3-7.1 8-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3L90 324.6l-19.4 97.9c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.5 14.4 4.4l97.8-19.4 55.5 83c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.5-83 97.8 19.4c5.4 1.2 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4L422 324.6l82.9-55.5c4.4-3 7.1-8 7.1-13.3zm-116.7 48.1c-5.4 3.6-8 10.1-6.8 16.4l16.8 84.9-84.8-16.8c-6.6-1.4-12.8 1.4-16.4 6.8l-48.1 72-48.1-71.9c-3-4.5-8-7.1-13.3-7.1-1 0-2.1.1-3.1.3l-84.8 16.8 16.8-84.9c1.2-6.3-1.4-12.8-6.8-16.4l-71.9-48.1 71.9-48.2c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.9 84.8 16.8c6.5 1.3 12.8-1.4 16.4-6.8l48.1-72 48.1 72c3.6 5.4 9.9 8.1 16.4 6.8l84.8-16.8-16.8 84.9c-1.2 6.3 1.4 12.8 6.8 16.4l71.9 48.2-71.9 48z"></path></svg>

        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="switch__moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 0 0 280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z"></path></svg>
      </label>
    </header>

    <img
      alt="The Diffr logo: two slightly overlapping diamond shapes"
      src="~assets/icons/logo.svg"
      class="logo"
    />

    <h1>About Diffr</h1>

    <p>
      Diffr is a tool for comparing text files. It was created out of
      dissatisfaction with existing diffing tools (and a certain amount of
      paranoia because virtually every diffing tool has to send your data to
      their server to compare). In Diffr, all the work happens locally and your
      data never leaves the browser.
    </p>

    <h2>Features</h2>
    <ul class="list">
      <li>
        Fully local diffing removes the need for a network connection — once the
        app is loaded, it will continue to work even when you're offline.
      </li>
      <li>Share your diffs with others by just copying the current URL.</li>
      <li>
        Drag&amp;Drop files from your filesystem into the editor to compare
        them.
      </li>
      <li>Full support for dark and light mode.</li>
    </ul>

    <h2>Drawbacks</h2>
    <ul class="list">
      <li>
        The editor which Diffr uses under the hood does not currently support
        mobile devices running Android. For that reason, Diffr can not support
        those targets either.
      </li>
      <li>
        Bringing the editor and diffing experience entirely into the browser
        requires quite some bandwidth, which means that the whole site is pretty
        heavyweight (roughly 3&#8239;MB). This does not hurt past initial load
        since the app is cached and not loaded again on further visits, but the
        initial load may be an issue for users with an unstable connection or a
        limited data plan.
      </li>
    </ul>

    <hr class="ruler" />

    <footer class="footer">
      The Diffr App is Open Source software under the MIT license. Feel free to
      leave feedback or contribute improvements in our
      <a
        v-focus-ring
        href="https://github.com/loilo/diffr"
        class="link github-link"
      >
        <!-- prettier-ignore -->
        <svg aria-hidden="true" focusable="false" class="option-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

        GitHub repository</a
      >.
    </footer>
  </div>
</template>

<script>
import focusRing from '~/assets/focus-ring'

export default {
  directives: {
    focusRing
  },
  data: () => ({
    mounted: false
  }),
  computed: {
    darkMode: {
      get() {
        return this.$store.state.theme.name === 'dark'
      },
      set(on) {
        const name = on ? 'dark' : 'light'

        window.localStorage.setItem('theme', name)
        this.$store.commit('theme/set', name)
      }
    }
  },
  mounted() {
    // this.mounted = true
  },
  methods: {
    toTheApp(event) {
      // If the user came from the app, use history.back()
      // instead of the link to preserve their input data
      if (
        document.referrer === `${window.location.origin}/` &&
        window.history.length > 1
      ) {
        event.preventDefault()
        window.history.back()
      }
    }
  },
  head() {
    return {
      title: `About Diffr`
    }
  }
}
</script>

<style lang="scss">
@function strip-unit($value) {
  @return $value / ($value * 0 + 1);
}

@mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {
  $u1: unit($min-vw);
  $u2: unit($max-vw);
  $u3: unit($min-font-size);
  $u4: unit($max-font-size);

  @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
    & {
      font-size: $min-font-size;
      @media screen and (min-width: $min-vw) {
        font-size: calc(
          #{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} *
            ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)})
        );
      }
      @media screen and (min-width: $max-vw) {
        font-size: $max-font-size;
      }
    }
  }
}

$min-width: 320px;
$max-width: 1920px;
$min-font: 16px;
$max-font: 24px;

:root {
  @include fluid-type($min-width, $max-width, $min-font, $max-font);
  font-weight: 300;
  line-height: 1.6;
  padding: 0 1em;
}

h1,
h2 {
  font-weight: 400;
  opacity: 0.5;
}

h1 {
  @include fluid-type($min-width, $max-width, 1.5em, 2em);
}

h1 {
  @include fluid-type($min-width, $max-width, 1.15em, 1.5em);
}

.logo {
  max-width: 60%;
  width: 240px;
  margin: 2em auto 0.25em auto;
  height: auto;
  display: block;
}

.wrapper {
  max-width: 55ch;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 2.5em 0 1em;
}

.footer {
  font-size: 0.85em;
  margin: 2.5em 0 3em;
}

.back-link {
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    width: auto;
    height: 0.85em;
    margin-right: 0.25em;
  }
}

.github-link {
  text-decoration: none;

  svg {
    height: 1.25em;
    margin-right: 0.25em;
    transform: translate(0.2em, 0.2em);
  }
}

$switch-size: 1em;
$switch-padding: 0.2em;
$switch-additional-width: 0.3em;
$switch-transition: 0.2s;

// The switch itself - the box around the slider
.switch {
  position: relative;
  display: inline-block;
  width: 2 * $switch-size + 2 * $switch-padding + $switch-additional-width;
  height: $switch-size + 2 * $switch-padding;

  &__sun,
  &__moon {
    $margin: 0.075em;

    position: absolute;
    top: $switch-padding;
    margin: $margin;
    width: $switch-size - 2 * $margin;
    height: $switch-size - 2 * $margin;
    color: var(--foreground);
  }

  &__sun {
    left: $switch-padding;
  }

  &__moon {
    right: $switch-padding;
  }

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
    background-color: var(--shadow);
    border-radius: $switch-size + 2 * $switch-padding;
    transition: all $switch-transition;

    &::before {
      position: absolute;
      content: '';
      height: $switch-size;
      width: $switch-size;
      left: $switch-padding;
      bottom: $switch-padding;
      background-color: var(--foreground);
      border-radius: 50%;
      transition: all $switch-transition;
    }
  }

  &__input[data-focus] + &__slider::before {
    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--highlight-strong);
  }

  // Use data-theme as a fallback to avoid the switch
  // flipping over when the component is hydrated
  :root[data-theme='dark'] &:not(#{&}--ready) &__slider:before,
  &__input:checked + &__slider:before {
    transform: translateX($switch-size + $switch-additional-width);
  }
}
</style>
