import lightTheme from '~/assets/themes/theme-light'
import darkTheme from '~/assets/themes/theme-dark'

const themeDetails = {
  light: {
    ...lightTheme,
    colors: { ...lightTheme.colors },
    tokens: lightTheme.rules
  },
  dark: {
    ...darkTheme,
    colors: { ...darkTheme.colors },
    tokens: darkTheme.rules
  }
}

export const state = () => ({
  name: 'light',
  all: themeDetails
})

export const getters = {
  raw: state => themeDetails[state.name],
  colors: state => themeDetails[state.name].colors,
  tokens: state => themeDetails[state.name].tokens
}

export const mutations = {
  set(state, name) {
    state.name = name
  }
}
