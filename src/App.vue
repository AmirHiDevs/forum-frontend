<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link to="/register" class="text-decoration-none">
        <v-btn
            target="_blank"
            text
        >
          <span class="mr-2">Register</span>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/login" class="text-decoration-none">
        <v-btn
            target="_blank"
            text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-account-arrow-right</v-icon>
        </v-btn>
      </router-link>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
      <v-fab-transition>
        <v-btn
            color="blue"
            fab
            large
            dark
            bottom
            right
            class="v-btn--fixed"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-fab-transition>
  </v-app>
</template>

<script>

import Axios from "./axios";

export default {
  name: 'App',

  data: () => ({
    //
  }),

  mounted() {
    Axios.get('threads').then(res =>{
      console.log(res);
    })
  }
};
</script>
