export function useDiffrHead() {
  useHead({
    title: 'Diffr',
    link: [
      {
        rel: 'icon',
        href: useAbsoluteUrl('favicon.ico'),
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: useAbsoluteUrl('favicon.svg'),
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: useAbsoluteUrl('apple-touch-icon.png'),
      },
      {
        rel: 'mask-icon',
        color: '#FAFBFC',
        href: useAbsoluteUrl('maskable.svg'),
      },
    ],
    script: [
      {
        innerHTML: `if (
            localStorage.theme === 'dark' ||
            (
              (
                !('theme' in localStorage) ||
                localStorage.theme === 'auto'
              ) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
            )
          ) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`,
      },
    ],
  })
}
