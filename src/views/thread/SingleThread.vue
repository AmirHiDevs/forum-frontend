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
      >
        <v-card>
          <v-card class="d-flex mx-2" flat tile>
            <v-card class="mr-auto" flat>
              <router-link :to="'/threads/'+thread.slug" class="text-decoration-none">
                <v-card-title>{{ thread.title }}</v-card-title>
              </router-link>
            </v-card>
            <v-card class="pa-2 mt-3" flat>
              <span class="text-caption"><v-icon size="20">mdi-bell</v-icon>{{ thread.subscribes_count }}</span>
            </v-card>
            <v-card class="pa-2 mt-3" flat>
              <span class="text-caption"><v-icon size="20">mdi-message</v-icon>{{ thread.answers_count }}</span>
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
          <v-card-text justify="justify">
            <vue-markdown v-html="thread.contents"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
      <ThreadAnswers/>
    </v-row>
  </v-container>
</template>

<script>
import ThreadAnswers from "@/views/thread/ThreadAnswers";
import VueMarkdown from "vue-markdown/src/VueMarkdown";
import {fetchSingleThreadReq} from "@/requests/thread";

export default {
  name: 'SingleThread',
  components: {ThreadAnswers, VueMarkdown},

  data: () => ({
        thread: {
          id: null,
          title : null,
          slug: null,
          contents: null,
          best_answer_id: null,
          created_at: null,

          channel: {
            id: null,
            name: null
          },

          user: {
            id: null,
            name: null
          },
        }

      }),

  methods: {
    fetchThread(){
      fetchSingleThreadReq(this.$route.params.slug).then(res => {
        this.thread = res.data
        console.log(this.thread)
      })
    }
  },

  mounted() {
    this.fetchThread()
  }
}
</script>
