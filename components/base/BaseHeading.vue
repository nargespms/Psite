<template>
  <component :is="tag" class="mb-3 Header-font">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',

  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style lang="scss">
.v-heading {
  letter-spacing: 3px !important;
}
.Header-font {
  font-family: 'Domine', serif;
  font-size: 44px;
}
</style>
