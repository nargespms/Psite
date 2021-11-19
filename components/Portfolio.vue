<template>
  <section id="recent-projects" class="overflow-hidden secondary">
    <v-row no-gutters justify="center">
      <v-col class="text-center pa-3 white--text my-3" cols="12" md="6">
        <BaseHeading> My portfolio </BaseHeading>

        <BaseText class="mb-5"> </BaseText>
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
                :ui-technologies="project.uiTechnologies"
                :api-technologies="project.apiTechnologies"
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
          description: `This website belongs to an online cosmetic shop with a home page for introducing categories of its products and different cosmetic-related blogs. Then in each category, there is a page for listing the items and, after that, the users can select their chosen product, and finally, they have to go through the checkout process.
            `,
          uiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            { name: 'Nuxt', icon: 'mdi-nuxt', color: 'teal accent-3' },
            { name: 'sass', icon: 'mdi-sass', color: 'pink lighten-1 ' },

            { name: 'Vuex' },
          ],
          roles: ['Frontend developer'],
          images: [
            { name: 'cosmetic2.jpg', folderName: 'cosmetic' },
            { name: 'cosmetic4.jpg', folderName: 'cosmetic' },
            { name: 'cosmetic5.jpg', folderName: 'cosmetic' },
          ],
        },
        {
          name: 'Sita',
          description: `Sita is the Persian abbreviation of the integrated advertisement system of AASAAM. The first goal is to help news agencies to be able to publish different categories of advertisements on their site quickly and easily. The second one is to provide a platform for small businesses to advertise their work. These categories are push notifications,
reportage and there will be more in the future.
            `,
          uiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            { name: 'Nuxt', icon: 'mdi-nuxt', color: 'teal accent-3' },
            { name: 'Vuetify', icon: 'mdi-vuetify', color: 'light-blue ' },
            { name: 'sass', icon: 'mdi-sass', color: 'pink lighten-1 ' },
            { name: 'Vuex' },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          apiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'nodejs', icon: 'mdi-nodejs', color: 'teal darken-1' },
            { name: 'graphQL', icon: 'mdi-graphql', color: 'pink lighten-1' },
            { name: 'mongodb', icon: 'mdi-leaf', color: 'green darken-1' },
            { name: 'Redis', icon: 'mdi-database', color: 'red darken-1' },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          roles: [
            'Frontend developer',
            'UI/UX designer',
            'Co-operation in backend developing',
          ],
          images: [
            { name: 'register.png', folderName: 'sita' },
            { name: 'login.png', folderName: 'sita' },
            { name: 'profile.png', folderName: 'sita' },
            { name: 'customersList.png', folderName: 'sita' },
            { name: 'editMedia.png', folderName: 'sita' },
            { name: 'mediaListAction.png', folderName: 'sita' },
            { name: 'buy.png', folderName: 'sita' },
            { name: 'orderList.png', folderName: 'sita' },
            { name: 'increaseCredit.png', folderName: 'sita' },
            { name: 'supportPage.png', folderName: 'sita' },
            { name: 'editFCMproject.png', folderName: 'sita' },
          ],
        },
        {
          name: 'Customer relationship management ',
          description: ` This panel was one the most vital needs of our company! Its duties are to manage support tickets, financial issues, services of the company, and ALSO employees tasks. So this CRM is not just about customer management, but it can also help managers analyze employees' works. Everything that a medium-size company needs.
            `,
          uiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            {
              name: 'Quasar',
              color: 'teal accent-3',
              imgUrl: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg',
            },
            { name: 'sass', icon: 'mdi-sass', color: 'pink lighten-1' },

            { name: 'Vuex' },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          apiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'nodejs', icon: 'mdi-nodejs', color: 'teal darken-1' },
            { name: 'mongodb', icon: 'mdi-leaf', color: 'green darken-1' },
            { name: 'Redis', icon: 'mdi-database', color: 'red darken-1' },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          roles: ['Frontend developer'],
          images: [
            { name: 'crmRegister.png', folderName: 'crm' },
            { name: 'CrmLogin.png', folderName: 'crm' },
            { name: 'crmDashboard.png', folderName: 'crm' },
            { name: 'crmProfile.png', folderName: 'crm' },
            { name: 'TicketsList.png', folderName: 'crm' },
            { name: 'CrmTicket.png', folderName: 'crm' },
            { name: 'crmKanboard.png', folderName: 'crm' },
            { name: 'crmTimesheet.png', folderName: 'crm' },
          ],
        },
        {
          name: 'Book exchange web application ',
          description: `
This web application is for a book center exchange that buys and sells second-handed books. Based on users' transactions on the platform, they could earn credit and use it for buying books. The app provides the opportunity for users to register their old books to be reviewed by the staff, and after that, books are available for everyone to buy them.
            `,
          uiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'Vuejs', icon: 'mdi-vuejs', color: 'teal darken-1' },
            { name: 'Vuetify', icon: 'mdi-vuetify', color: 'light-blue ' },
            { name: 'sass', icon: 'mdi-sass', color: 'pink lighten-1' },
            { name: 'Vuex' },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          apiTechnologies: [
            {
              name: 'Javascript',
              icon: 'mdi-language-javascript',
              color: 'yellow',
            },
            { name: 'nodejs', icon: 'mdi-nodejs', color: 'teal darken-1' },
            { name: 'mongodb', icon: 'mdi-leaf', color: 'green darken-1' },
            { name: 'Redis', icon: 'mdi-database', color: 'red darken-1' },
            {
              name: 'Postgress',
              imgUrl:
                'https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png',
              color: 'red darken-1',
            },
            { name: 'Docker', icon: 'mdi-docker', color: 'blue darken-2' },
          ],
          roles: ['Frontend developer', 'UI/UX designer', 'Backend developer'],
          // images: [{ name: 'crmRegister.png', folderName: 'tabadol' }],
        },
      ],
    }
  },
}
</script>
