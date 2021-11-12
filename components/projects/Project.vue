<template>
  <v-row no-gutters justify="space-between" class="my-4 py-5">
    <v-col cols="12" md="5">
      <BaseHeading>
        {{ name }}
      </BaseHeading>

      <BaseText class="mb-5">
        {{ description }}
      </BaseText>

      <p>
        <BaseSubheading> Technologies used in the website are:</BaseSubheading>
        <span v-for="(tech, index) in technologies" :key="index" class="pr-3">
          <v-icon :color="tech.color">{{ tech.icon }}</v-icon>
          {{ tech.name }}
        </span>
      </p>

      <p>
        <BaseSubheading> Roles: </BaseSubheading>
        <BaseText v-for="(role, index) in roles" :key="index" class="mb-5">
          {{ role }}
        </BaseText>
      </p>
    </v-col>

    <v-col cols="12" md="6" class="pr-md-5">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <v-img
            :src="require(`@/assets/${image.name}`)"
            :width="
              $vuetify.breakpoint.lgAndUp
                ? '600'
                : $vuetify.breakpoint.xs
                ? '280'
                : '400'
            "
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Project',

  props: {
    name: {
      type: String,
      default: '',
    },
    dir: {
      type: String,
      default: 'left',
    },
    gallery: {
      type: Boolean,
      default: false,
    },
    primaryImage: {
      type: String,
      default: '',
    },
    thumbnails: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => {},
    },
    description: {
      type: String,
      default: '',
    },
    technologies: {
      type: Array,
      default: () => {},
    },
    roles: {
      type: Array,
      default: () => {},
    },
  },

  data() {
    return {
      model: 0,
    }
  },
}
</script>
