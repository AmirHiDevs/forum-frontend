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
        <v-card flat>
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
              @submit.prevent="submit"
          >
            <v-container fluid>
              <v-row>
                <v-col
                    cols="12"
                >
                  <v-text-field
                      v-model="form.title"
                      :rules="rules.title"
                      color="purple darken-2"
                      label="Title"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      v-model="form.content"
                      :rules="rules.content"
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
                      v-model="form.channel"
                      :items="channels"
                      :rules="rules.channel"
                      color="pink"
                      label="Channel"
                      required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-btn
                  text
                  @click="resetForm"
              >
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                  :disabled="!formIsValid"
                  text
                  color="primary"
                  type="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateThread",

  data () {
    const threadForm = Object.freeze({
      title: '',
      Content: '',
      Channel: '',
    })

    return {
      form: Object.assign({}, threadForm),
      rules: {
        channel: [val => (val || '').length > 0 || 'This field is required'],
        title: [val => (val || '').length > 0 || 'This field is required'],
        content: [val => (val || '').length > 0 || 'This field is required'],
      },
      channels: ['Laravel', 'Vue.js'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
      snackbar: false,
      threadForm,
    }
  },

  computed: {
    formIsValid () {
      return (
          this.form.title &&
          this.form.channel &&
          this.form.content
      )
    },
  },

  methods: {
    resetForm () {
      this.form = Object.assign({}, this.threadForm)
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    },
  },

}
</script>

