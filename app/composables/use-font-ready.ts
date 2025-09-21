export function useFontReady(font: string, size = 12) {
  if (typeof document !== 'object') return readonly(ref(false))

  let checkString = `${size}px ${font}`

  let ready = ref(document.fonts.check(checkString))

  useEventListener(document.fonts, 'loadingdone', () => {
    ready.value = document.fonts.check(checkString)
  })

  return readonly(ready)
}
