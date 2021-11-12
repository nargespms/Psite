<template>
  <p class="baseText-font" style="line-height: 1.7 !important">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseText',
}
</script>

<style lang="scss">
.baseText-font {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
}
</style>
