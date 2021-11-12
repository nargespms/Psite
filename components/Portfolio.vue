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

    <v-row no-gutters justify="center">
      <v-col cols="12">
        <v-container>
          <v-row v-for="(project, index) in projects" :key="project.name">
            <v-card class="mb-3 pa-5">
              <Project
                :project-index="index + 1"
                :name="project.name"
                :images="project.images"
                :description="project.description"
                :technologies="project.technologies"
                :roles="project.roles"
              />
            </v-card>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',

  // data: () => ({
  //   projects: [
  //     'cosmetic.jpg',
  //     'project2.jpeg',
  //     'crm.png',
  //     'bookExchange.jpg',
  //     'sita.png',
  //   ],
  // }),

  data() {
    return {
      projects: [
        {
          name: 'Cosmetic shop',
          description: `This website belongs to an online cosmetic shop that has a products page, product page, cosmetic-related weblogs, etc., like any other online shop.
            `,
          technologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            { name: 'Nuxt', icon: 'mdi-nuxt', color: 'teal accent-3' },
            { name: 'Vuex' },
          ],
          roles: ['Frontend developer'],
          images: [
            { name: 'cosmetic2.jpg' },
            { name: 'cosmetic4.jpg' },
            { name: 'cosmetic5.jpg' },
          ],
        },
        {
          name: 'Sita',
          description: `This website belongs to an online cosmetic shop that has a products page, product page, cosmetic-related weblogs, etc., like any other online shop.
            `,
          technologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            { name: 'Nuxt', icon: 'mdi-nuxt', color: 'teal accent-3' },
            { name: 'Vuetify', icon: 'mdi-vuetify', color: 'light-blue ' },
            { name: 'Vuex' },
          ],
          roles: ['Frontend developer', 'UX designer'],
          images: [
            { name: 'cosmetic2.jpg' },
            { name: 'cosmetic4.jpg' },
            { name: 'cosmetic5.jpg' },
          ],
        },
      ],
    }
  },
}
</script>
