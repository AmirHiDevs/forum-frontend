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
                  Login Form
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-progress-linear
                  v-if="loading"
                  absolute
                  color="orange"
                  height="6"
                  indeterminate
              ></v-progress-linear>
              <v-card-text>
                <v-form
                    ref="form"
                    lazy-validation
                    flat
                >
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

                  <v-row
                      justify="space-around"
                      class="my-4"
                  >
                    <router-link to="/register" class="text-decoration-none">
                      <v-btn
                          color="success"
                          outlined
                          class="mr-4"
                      >
                        Register
                      </v-btn>
                    </router-link>
                    <v-btn
                        color="success"
                        @click="login"
                    >
                      Login
                    </v-btn>
                  </v-row>
                  <v-alert
                      border="left"
                      color="red"
                      dense
                      text
                      v-if="hasErrors"
                      type="error"
                  >Incorrect Credential(s).
                  </v-alert>
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

import {loginReq} from "@/requests/auth";

export default {
  name: 'Login',


  data: () => ({
    email: '',
    password: '',
    showPass: false,

    hasErrors: false,
    loading: false,

    Rules: {
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      password: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
      ],
    },
  }),

  methods: {
    login() {

      this.loading = true


      const formData = {
        email: this.email,
        password: this.password,
      }

      loginReq(formData).then(res => {

        if (res.status === 200) {
          this.loading = false

          localStorage.setItem('isAuth', 'true');
          this.$router.push('/threads')

        }
      }).catch(err => {

        if (err.response.status === 422) {
          console.log( err.response.data.errors)
          this.hasErrors = true
          this.loading = false
        }
      });
    },
  },

}
</script>

