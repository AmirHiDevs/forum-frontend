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
      <div v-if="!isAuth">
        <router-link to="/register" class="text-decoration-none">
          <v-btn
              target="/register"
              text
          >
            <span class="mr-2">Register</span>
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/login" class="text-decoration-none">
          <v-btn
              target="/login"
              text
          >
            <span class="mr-2">Login</span>
            <v-icon>mdi-account-arrow-right</v-icon>
          </v-btn>
        </router-link>
      </div>

      <div v-if="isAuth">
        <span class="mr-2">{{ user.name }}</span>
        <router-link to="/auth/logout" class="text-decoration-none">
          <v-btn
              outlined
              @click="logout"
          >
            <span class="mr-2">Logout</span>
            <v-icon>mdi-account-arrow-left</v-icon>
          </v-btn>
        </router-link>
      </div>

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
          to="/create/thread"
          v-if="isAuth"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>


import {checkAuth, getUserInfo, logoutReq} from "@/requests/auth";
import Login from "@/views/auth/Login";
import Threads from "@/views/thread/Threads";

export default {
  name: 'App',
  components: {Threads, Login},
  data: () => ({
    isAuth: false,
    user: ''
  }),

  mounted() {
    checkAuth();
    localStorage.getItem('isAuth') === 'true' ? this.isAuth = true : this.isAuth = false;
    if (this.isAuth === true) {
      getUserInfo().then(res => {
        this.user = res.data[0]
      })
    }
  },

  methods: {
    logout() {
      logoutReq().then(res => {
        this.isAuth = false
        localStorage.setItem('isAuth', 'false')
        this.$router.push('/threads')
      })
    }
  }
};
</script>
