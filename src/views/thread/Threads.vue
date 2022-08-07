<template>
  <v-container>
    <v-row
        justify="center"
        content="center"
    >
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
                 <v-card-title >{{ thread.title }}</v-card-title>
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
                  <v-chip color="green" outlined >{{ thread.channel.name }}</v-chip>
                </router-link>
              </v-card>

           </v-card>
          <v-row justify="space-between" class="mx-5">
            <v-card-subtitle>{{ thread.user.name }}</v-card-subtitle>
            <v-card-subtitle>{{ thread.created_at | moment("from", "now") }}</v-card-subtitle>
          </v-row>
          <v-card-text justify="justify">{{ thread.contents }}
          </v-card-text>
        </v-card>
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
  }),


  mounted() {
    threadsListReq.then(res => {
      this.threads = res.data.data
    }).catch(err => {
      console.log(err);
    })
  },


}
</script>
