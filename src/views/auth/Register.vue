<template>
  <v-app>
    <v-main>
      <v-container
          class="fill-height"
          fluid
      >
        <v-row
            align="center"
            justify="center"
        >
          <v-col
              cols="12"
              md="4"
              sm="8"
          >
            <v-card
                elevation="12"
            >
              <v-toolbar
                  color="primary"
                  dark
                  flat
              >
                <v-toolbar-title>
                  Register Form
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    flat
                >
                  <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="Rules.name"
                      label="Name"
                      prepend-icon="mdi-account"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="email"
                      :rules="Rules.email"
                      label="E-mail"
                      prepend-icon="mdi-email"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="password"
                      ref="password"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="Rules.password"
                      :type="showPass ? 'text' : 'password'"
                      name="input-10-1"
                      label="Enter password"
                      hint="At least 8 characters"
                      counter
                      @click:append="showPass = !showPass"
                      prepend-icon="mdi-lock"
                      required
                  ></v-text-field>
                  <v-text-field
                      v-model="passwordConfirmation"
                      ref="passwordConfirmation"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="Rules.passwordConfirmation.concat(checkPassConf)"
                      :type="showPass ? 'text' : 'password'"
                      name="input-10-1"
                      label="Enter your password again"
                      counter
                      @click:append="showPass = !showPass"
                      prepend-icon="mdi-lock"
                      required
                  ></v-text-field>
                  <v-row
                      justify="space-around"
                      class="my-4"
                  >

                    <router-link to="/login" class="text-decoration-none">
                      <v-btn
                          color="success"
                          outlined
                          class="mr-3"
                      >
                        Login
                      </v-btn>
                    </router-link>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        @click="register"
                    >
                      Register
                    </v-btn>

                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import {RegisterReq} from "@/requests/auth";

export default {
  name: 'Register',


  data: () => ({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    showPass: false,
    valid: true,


    Rules: {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      password: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
      ],

      passwordConfirmation: [
        v => !!v || 'Password is required',
      ],
    },
  }),

  methods: {
    checkPassConf(value) {
      return value === this.password || "Passwords must match."
    },

    register() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      }

      RegisterReq(formData).then( res => {

        alert('Registered successfully.')
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },

  },
}
</script>

<style scoped>

</style>