export const useColorPreferenceCycleStore = defineStore(
  'color-preference-cycle',
  () => {
    let colorMode = useColorMode()

    return useCycleList<'light' | 'system' | 'dark'>(
      ['light', 'system', 'dark'],
      {
        initialValue: colorMode.preference as 'light' | 'system' | 'dark',
      },
    )
  },
)
