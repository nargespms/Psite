import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0096c7',
        secondary: '#bfada5',
        accent: '#f47a7a',
        info: '#2196f3',
      },
    },
  },
})
