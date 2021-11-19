<template>
  <v-row
    no-gutters
    justify="space-between"
    class="my-4 py-5"
    :class="!revertDir ? 'rtl' : ''"
  >
    <v-col cols="12" md="5" class="ltr mt-9">
      <BaseHeading>
        {{ name }}
      </BaseHeading>

      <BaseText class="mb-5">
        {{ description }}
      </BaseText>

      <p class="mb-5">
        <BaseSubheading> Technologies used in the website are:</BaseSubheading>
        <span v-for="(tech, index) in uiTechnologies" :key="index" class="pr-3">
          <v-icon v-if="tech.icon" :color="tech.color">{{ tech.icon }}</v-icon>
          <img
            v-if="!tech.icon"
            class="d-inline-flex"
            :src="tech.imgUrl"
            width="20"
            :style="'margin-bottom:-2px'"
          />
          {{ tech.name }}
        </span>
        <v-divider class="my-2" />
        <span
          v-for="(tech, index) in apiTechnologies"
          :key="index"
          class="pr-3"
        >
          <v-icon v-if="tech.icon" :color="tech.color">{{ tech.icon }}</v-icon>
          <img
            v-if="!tech.icon"
            class="d-inline-flex"
            :src="tech.imgUrl"
            width="20"
            :style="'margin-bottom:-2px'"
          />
          {{ tech.name }}
        </span>
      </p>

      <p>
        <BaseSubheading> My roles in this Project: </BaseSubheading>
        <span v-for="(role, index) in roles" :key="index" class="mb-1 d-block">
          {{ role }}
        </span>
      </p>
    </v-col>

    <v-col cols="12" md="6">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <v-img
            :src="
              require(`@/assets/projects/${image.folderName}/${image.name}`)
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
    projectIndex: {
      type: Number,
      default: 0,
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
    uiTechnologies: {
      type: Array,
      default: () => {},
    },
    apiTechnologies: {
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

  computed: {
    revertDir() {
      return Boolean(this.projectIndex % 2)
    },
  },
}
</script>

<style lang="scss">
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}
</style>
