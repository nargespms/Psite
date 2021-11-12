<template>
  <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="align-content-space-between layout wrap" cols="12">
        <BaseBubble1 style="transform: rotate(180deg) translateY(25%)" />

        <v-row align="center" justify="center">
          <v-avatar
            :src="require('@/assets/welcome.png')"
            color="secondary"
            size="200"
            class="mr-5"
          ></v-avatar>
          <v-col cols="10" md="6">
            <BaseHeading>Welcome!</BaseHeading>
            <BaseText>
              Hi! My name is Narges Pourmoghadasi. I have 5+ years of experience
              in Front-end and JavaScript programming with extensive knowledge
              of Vue.js web apps development. Eager to learn new technologies
              and be a proactive member of a team of motivated, expert, and
              friendly people. Wildly enthusiastic about having the opportunity
              for advancement and learning more.
            </BaseText>
          </v-col>
        </v-row>

        <BaseBubble2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
