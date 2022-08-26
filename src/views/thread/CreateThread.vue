<template>
  <v-container>
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
      >
        <v-card>
          <v-snackbar
              v-model="snackbar"
              absolute
              top
              right
              color="success"
          >
            <span>Thread Posted successfully!</span>
            <v-icon dark>
              mdi-checkbox-marked-circle
            </v-icon>
          </v-snackbar>
          <v-form
              ref="form"
              lazy-validation
          >
            <v-container fluid>
              <v-row>
                <v-col
                    cols="12"
                >
                  <v-text-field
                      v-model="formData.title"
                      name="title"
                      :rules="[v => !!v || 'Title is required']"
                      color="purple darken-2"
                      label="Title"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      v-model="formData.contents"
                      name="contents"
                      :rules="[v => !!v || 'Content is required']"
                      color="teal"
                  >
                    <template v-slot:label>
                      <div>
                        Content
                      </div>
                    </template>
                  </v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      :rules="[v => !!v || 'Channel is required']"
                      v-model="formData.channel_id"
                      :items="channels"
                      item-text="name"
                      item-value="id"
                      color="pink"
                      label="Channel"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-btn
                  class="text-right"
                  text
                  color="primary"
                  @click="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
            <v-alert
                border="left"
                color="red"
                dense
                text
                v-if="hasErrors"
                type="error"
            >Please Check entered data.
            </v-alert>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {channelsListReq} from "@/requests/channels";
import {createThreadReq} from "@/requests/thread";

export default {
  name: "CreateThread",


  data: () => ({
    channels: null,
    snackbar: false,
    hasErrors: false,
    loading: false,

    formData: {
      title: null,
      contents: null,
      channel_id: null,
    },
  }),
  methods: {
    fetchChannelsList() {
      channelsListReq().then(res => {
        this.channels = res.data
      })
    },


    submit() {
      this.loading = true

      createThreadReq(this.formData).then(res => {
        if (res.status === 200) {
          this.snackbar = true
          this.loading = false
          this.$router.push('/threads')
        }
      }).catch(err => {
        if (err.response.status === 422) {
          console.log(err.response.data.errors)
          this.hasErrors = true
          this.loading = false
        }
      });
    },
  },

  mounted() {
    this.fetchChannelsList();
  }

}
</script>

