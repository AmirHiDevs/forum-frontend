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
          <router-link to="/singleThread" class="text-decoration-none">
            <v-card-title>Laravel Error</v-card-title>
          </router-link>
          <v-row justify="space-between" class="mx-2">
            <v-card-subtitle>Amir</v-card-subtitle>
            <v-card-subtitle>2022/08/05 13:30</v-card-subtitle>
          </v-row>
          <v-card-text justify="justify">
            <vue-markdown>
              # My Markdown Test
            </vue-markdown>
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

export default {
  name: 'SingleThread',
  components: {ThreadAnswers,VueMarkdown},
}
</script>
