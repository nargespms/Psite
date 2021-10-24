import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#d3c3bc',
        secondary: '#bfada5',
        accent: '#d8ebf1',
        info: '#5b5c79',
      },
      light: {
        primary: '#d3c3bc',
        secondary: '#bfada5',
        accent: '#d8ebf1',
        info: '#5b5c79',
      },
    },
  },
})
