<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
      :href="item.link"
      target="_blank"
    >
      <v-icon dark v-text="item.icon" />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        name: 'Linkedin',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/narges-pourmoghadasi/',
      },
      {
        name: 'Email',
        icon: 'mdi-email',
      },
      {
        name: 'StackOverflow',
        icon: 'mdi-stack-overflow',
        link: 'https://stackoverflow.com/users/6514438/narges-pms',
      },
      {
        name: 'Phone',
        icon: 'mdi-phone',
      },
    ],
  }),
}
</script>
