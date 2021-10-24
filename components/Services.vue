<template>
  <section id="services" class="overflow-hidden">
    <v-row class="accent" no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/services.png')" height="100%" />
      </v-col>

      <v-col class="text-center pa-5" cols="12" md="6">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12">
            <BaseBubble2 style="transform: translateX(55%)" />
            <BaseHeading class="info--text"> Services </BaseHeading>

            <BaseText class="mb-5">
              Curabitur venenatis tortor erat, quis laoreet nis<br />
              lobortis eget. Fusce tempor aucto.
            </BaseText>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            <v-avatar class="elevation-6 mb-2" color="#69A1BB" size="64" tile>
              <v-icon dark size="52" v-text="service.icon" />
            </v-avatar>

            <base-text>
              <span class="mb-2 d-block" v-text="service.name" />
              <span>
                {{ service.blurb }}
              </span>
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Services',

  data: () => ({
    services: [
      {
        name: 'Research',
        icon: 'mdi-clipboard-text-outline',
        blurb: 'Curabitur et nisi semper,<br> pellent e sque ',
      },
      {
        name: 'Design',
        icon: 'mdi-pencil-outline',
        blurb: 'Curabitur et nisi semper, <br>pellent.',
      },
      {
        name: 'Development',
        icon: 'mdi-settings-outline',
        blurb: 'Curabitur et nisi semper, <br>pellent.',
      },
      {
        name: 'Support',
        icon: 'mdi-account',
        blurb: 'Curabitur et nisi semper, <br>pellent.',
      },
    ],
  }),
}
</script>
