<template>
  <component :is="tag" class="subHeader-font">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseSubheading',

  props: {
    tag: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style lang="scss">
.subHeader-font {
  font-family: 'Domine', serif;
  font-size: 20px;
}
</style>
