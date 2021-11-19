<template>
  <section id="about" class="overflow-hidden">
    <v-row class="white" no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/services.png')" height="100%" />
      </v-col>

      <v-col class="pa-5 secondary" cols="12" md="6">
        <BaseBubble1 style="transform: translate(5%, -5%)" />

        <v-row no-gutters class="mb-8" justify="center">
          <BaseHeading class="text-center"> My skills </BaseHeading>
        </v-row>

        <v-row class="mt-8" no-gutters justify="center">
          <v-col
            cols="12"
            md="9"
            class="mt-3 d-flex justify-center flex-nowrap"
          >
            <template v-for="(icon, index) in row1">
              <img
                :key="index"
                :src="icon.url"
                aspect-ratio="1"
                class="pa-4 mx-4"
                width="100"
              />
            </template>
          </v-col>
        </v-row>

        <v-row no-gutters justify="center">
          <v-col cols="12" class="mt-3 d-flex justify-center flex-nowrap">
            <template v-for="(icon, index) in row2">
              <img
                :key="index"
                :src="icon.url"
                aspect-ratio="1"
                class="pa-4 mx-4"
                width="100"
              />
            </template>
          </v-col>
        </v-row>

        <v-row no-gutters justify="center">
          <v-col cols="12" class="mt-3 d-flex justify-center flex-nowrap">
            <template v-for="(icon, index) in row3">
              <img
                :key="index"
                :src="icon.url"
                aspect-ratio="1"
                class="pa-4 mx-4"
                width="100"
              />
            </template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Technologies',

  data() {
    return {
      row1: [
        {
          url: 'https://symbols.getvecta.com/stencil_25/35_html5.a8680135ba.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/14_css3.ab1968a045.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/75_sass.29e9166988.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/39_javascript.bb3179952d.svg',
        },
      ],

      row2: [
        {
          url: 'https://symbols.getvecta.com/stencil_25/87_vuejs.6c17fd59a6.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/0_angular.505d6b80f0.svg',
        },

        {
          url: 'https://symbols.getvecta.com/stencil_25/61_nodejs.9eb30a05a7.svg',
        },
      ],

      row3: [
        {
          url: 'https://symbols.getvecta.com/stencil_25/62_npm.58abfb76f3.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/31_grunt.12b5af2ac7.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/88_webpack.9dab398c02.svg',
        },
        {
          url: 'https://symbols.getvecta.com/stencil_25/28_gitlab.0d6a5a2bb4.svg',
        },
      ],
    }
  },
}
</script>
