<template>
  <section id="get-in-touch" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="pa-5 secondary" cols="12" md="6">
        <BaseBubble1 />
        <BaseHeading class="mb-5 text-center"> Get In Touch </BaseHeading>

        <v-card light class="pa-5 grey lighten-2 ma-auto" max-width="600">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="message.name"
              color="contrastColor"
              light
              label="Name"
              placeholder="Name"
              solo
            />
            <v-text-field
              v-model="message.email"
              color="contrastColor"
              light
              label="Email"
              placeholder="Email"
              solo
              required
              :rules="emailRules"
            />
            <v-text-field
              v-model="message.subject"
              color="contrastColor"
              light
              label="Subject"
              placeholder="Subject"
              solo
            />

            <v-textarea
              v-model="message.text"
              required
              :rules="requireRule"
              color="contrastColor"
              label="Message"
              solo
              light
            />
            <div class="d-flex justify-center">
              <v-btn
                color="info"
                class="white--text"
                width="200"
                @click="submitEmail"
              >
                <span class="font-weight-black"> Send </span>
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>

      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/aboutme.png')" height="100%" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'GetInTouch',

  data() {
    return {
      message: {},

      valid: true,
      requireRule: [(v) => !!v || 'This field is required'],
      emailRules: [
        (value) => !!value || 'This field is required',
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid email'
        },
      ],
    }
  },

  methods: {
    submitEmail() {
      this.$refs.form.validate()
    },
  },
}
</script>
