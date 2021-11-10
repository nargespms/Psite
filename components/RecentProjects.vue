<template>
  <section id="recent-projects" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="primary text-center pa-5 white--text" cols="12" md="6">
        <BaseBubble1 style="transform: rotate(180deg) translateX(25%)" />

        <BaseHeading> My portfolio </BaseHeading>

        <BaseText class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipi<br />
          scin elit. Etiam vulputate augue vel felis gravida<br />
          porta. Lorem ipsum dolor sit amet.
        </BaseText>

        <v-card color="secondary">
          <v-container class="pa-5">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}`)"
                    max-height="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/services.png')" height="100%" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'RecentProjects',

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
