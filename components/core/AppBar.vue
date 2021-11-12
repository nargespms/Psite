<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    height="80"
    fixed
    flat
  >
    <v-slide-x-transition>
      <span v-if="showLogo" class="pacifico-font contrastColor--text fn-30">
        Narges Pourmoghadasi
      </span>
    </v-slide-x-transition>

    <v-spacer />

    <SocialMedia />
  </v-app-bar>
</template>

<script>
export default {
  name: 'CoreAppBar',

  data: () => ({
    showLogo: false,
    isScrolling: false,
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset
      this.isScrolling = offset > 50
      this.showLogo = offset > 200
    },
  },
}
</script>

<style lang="scss">
.pacifico-font {
  font-family: 'Pacifico', cursive;
}
.fn-30 {
  font-size: 30px;
}
</style>
