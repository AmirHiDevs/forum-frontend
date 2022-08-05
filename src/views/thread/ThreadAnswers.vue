<template>
  <v-col
      cols="12"
      md="8"
      sm="8"
  >
    <v-card-text>
      <v-row justify="space-between" class="ml-5 mb-2">
        <div class="font-weight-bold">
          <h2>Answers</h2>
        </div>
        <v-btn ripple color="green" dark>
          Reply
          <v-icon>mdi-reply</v-icon>
        </v-btn>
      </v-row>
      <v-timeline
          align-top
          dense
      >
        <v-timeline-item
            color="black"
            small
        >
          <div>
            <v-card>
              <v-row>
                <v-col cols="2">
                  <v-avatar
                      color="teal"
                      rounded
                      size="65"
                      class="ml-5 mt-5"
                  ></v-avatar>
                  <h6 class="pl-8 pt-1 font-weight-regular">score 500</h6>
                </v-col>
                <v-col cols="10">
                  <v-card-title class="font-weight-regular">Ehsan</v-card-title>
                  <v-card-subtitle><h5 class="font-weight-light">2022/08/05 13:30</h5></v-card-subtitle>
                  <v-card-text class="text-justify">Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et
                    lanista.Bulla,
                    zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla,
                    zeta, et
                    lanista.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
      <v-timeline
          align-top
          dense
      >
        <v-timeline-item
            color="black"
            small
        >
          <div>
            <v-card>
              <v-row>
                <v-col cols="2">
                  <v-avatar
                      color="teal"
                      rounded
                      size="65"
                      class="ml-5 mt-5"
                  ></v-avatar>
                  <h6 class="pl-8 pt-1 font-weight-regular">score 500</h6>
                </v-col>
                <v-col cols="10">
                  <v-card-title class="font-weight-regular">Ehsan</v-card-title>
                  <v-card-subtitle><h5 class="font-weight-light">2022/08/05 13:30</h5></v-card-subtitle>
                  <v-card-text class="text-justify">Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et
                    lanista.Bulla,
                    zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla, zeta, et lanista.Bulla,
                    zeta, et
                    lanista.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-col>
</template>

<script>
export default {
  name: "ThreadAnswers"
}
</script>

<style scoped>

</style>