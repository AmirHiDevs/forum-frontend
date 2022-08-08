<template>
  <v-container class="max-width">

    <v-row
        justify="center"
        content="center"
    >
      <v-progress-linear
          v-if="loading"
          absolute
          color="orange"
          height="6"
          indeterminate
      ></v-progress-linear>
      <v-col
          cols="12"
          md="8"
          sm="8"
          v-for="(thread,index) in threads" :key="index"
      >

        <v-card>
          <v-card class="d-flex mx-2" flat tile>
            <v-card class="mr-auto" flat>
              <router-link :to="'/threads/'+thread.slug" class="text-decoration-none">
                <v-card-title>{{ thread.title }}</v-card-title>
              </router-link>
            </v-card>
            <v-card class="pa-2 mt-3" flat>
              <span class="text-caption"><v-icon size="20">mdi-eye</v-icon>12,345</span>
            </v-card>
            <v-card class="pa-2 mt-3" flat>
              <span class="text-caption"><v-icon size="20">mdi-message</v-icon>120</span>
            </v-card>
            <v-card class="pa-2 mt-2" flat>
              <router-link :to="'/channels/'+thread.channel.slug" class="text-decoration-none">
                <v-chip color="green" outlined>{{ thread.channel.name }}</v-chip>
              </router-link>
            </v-card>
          </v-card>
          <v-row justify="space-between" class="mx-5">
            <v-card-subtitle>{{ thread.user.name }}</v-card-subtitle>
            <v-card-subtitle>{{ thread.created_at | moment("from", "now") }}</v-card-subtitle>
          </v-row>
          <v-card-text justify="justify">{{ thread.contents }}</v-card-text>
        </v-card>
      </v-col>

      <v-col
          cols="12"
          md="8"
          sm="8"
      >
        <v-pagination
            v-show="!loading"
            v-model="current_page"
            class="my-4"
            :length="last_page"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import {threadsListReq} from "@/requests/thread";


export default {
  name: 'Threads',


  data: () => ({
    threads: [],
    loading: true,
    current_page: 1,
    last_page: 1,
    page: 1,
  }),

  watch: {
    current_page (page) {
      threadsListReq(page).then(res => {
        this.threads = res.data.data
        this.current_page = res.data.current_page
        this.last_page = res.data.last_page
        this.loading = false
      }).catch(err => {
        console.log(err);
      })
    },
  },

  mounted() {
    threadsListReq(this.current_page).then(res => {
      this.threads = res.data.data
      this.current_page = res.data.current_page
      this.last_page = res.data.last_page
      this.loading = false
    }).catch(err => {
      console.log(err);
    })
  },



}
</script>
