<script lang="ts" setup>
let logoUrl = useAbsoluteUrl('logo.svg')
</script>

<template>
  <div class="px-4 pb-8 pt-4 sm:px-8 sm:py-8 md:px-16 md:py-12">
    <div class="diffr-prose mx-auto lg:prose-lg xl:prose-xl">
      <header class="flex justify-between">
        <NuxtLink to="/" class="flex items-center gap-[1.5ch]">
          <!-- prettier-ignore -->
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="448" height="512" class="w-auto h-[1.5em]"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
          <span class="whitespace-nowrap">to the Diffr App</span>
        </NuxtLink>
        <ColorModeSwitch />
      </header>

      <img
        alt="The Diffr logo: two slightly overlapping diamond shapes"
        :src="logoUrl"
        width="270"
        height="174"
        class="!my-8 mx-auto block max-w-[60%] sm:!my-10 md:!my-12 lg:!my-12 xl:!my-16 2xl:!my-20"
      />

      <div>
        <h1>About Diffr</h1>
        <p>
          Diffr is a tool for comparing text files. It was created out of
          dissatisfaction with existing diffing tools (and a certain amount of
          paranoia because virtually every diffing tool has to send your data to
          their server to compare). In Diffr, all the work happens locally and
          your data never leaves the browser.
        </p>
        <h2>Features</h2>
        <ul class="list">
          <li>
            Fully local diffing removes the need for a network connection — once
            the app is loaded, it will continue to work even when you're
            offline.
          </li>
          <li>
            Share your diffs with others — all diffing data is contained in the
            shared URL.
          </li>
          <li>
            Drag&amp;Drop files from your filesystem into the editor to compare
            them.
          </li>
          <li>Full support for dark and light mode.</li>
        </ul>
        <h2>Drawbacks</h2>
        <ul class="list">
          <li>
            The editor which Diffr uses under the hood does not currently
            support mobile devices running Android. For that reason, Diffr can
            not support those targets either.
          </li>
          <li>
            Bringing the editor and diffing experience entirely into the browser
            requires quite some bandwidth, which means that the whole site is
            pretty heavyweight (roughly 3&#8239;MB). This does not hurt past
            initial load since the app is cached and not loaded again on further
            visits, but the initial load may be an issue for users with an
            unstable connection or a limited data plan.
          </li>
        </ul>
      </div>
      <hr class="ruler" />
      <footer class="footer">
        The Diffr App is Open Source software under the MIT license. Feel free
        to leave feedback or contribute improvements in our
        <a href="https://github.com/loilo/diffr" class="link github-link">
          <!-- prettier-ignore -->
          <svg aria-hidden="true" focusable="false" class="h-[1.25em] -mt-[0.15em] ml-[0.4ch] mr-[0.2ch] w-auto inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          GitHub repository</a
        >.
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.list {
  @apply flex list-none flex-col items-start gap-2 pl-6;
}

.list li {
  &::before {
    content: '';
    @apply absolute h-[0.55em] w-[0.55em] translate-x-[calc(-100%_-_0.65em)] translate-y-[0.55em] bg-gradient-to-t from-blue-500 to-teal-400;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
  }
}
</style>
