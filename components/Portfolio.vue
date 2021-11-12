<template>
  <section id="recent-projects" class="overflow-hidden secondary">
    <v-row no-gutters justify="center">
      <v-col class="text-center pa-3 white--text my-3" cols="12" md="6">
        <BaseHeading> My portfolio </BaseHeading>

        <BaseText class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipi<br />
          scin elit. Etiam vulputate augue vel felis gravida<br />
          porta. Lorem ipsum dolor sit amet.
        </BaseText>
      </v-col>
    </v-row>

    <v-card>
      <v-container class="pa-5">
        <v-row>
          <v-col v-for="project in projects" :key="project" cols="12" md="6">
            <a href="#">
              <v-img :src="require(`@/assets/${project}`)" max-height="300" />
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',

  data: () => ({
    projects: [
      'cosmetic.jpg',
      'project2.jpeg',
      'crm.png',
      'bookExchange.jpg',
      'sita.png',
    ],
  }),
}
</script>
