<template>
  <div>
    <v-layout wrap>
      <v-snackbar v-model="snackbar" color="yellow" right :timeout="timeout">
        <v-layout wrap>
          <v-flex text-left class="align-self-center">{{ msg }}</v-flex>
          <v-flex text-right>
            <v-btn small :ripple="false" text @click="snackbar = false">
              <v-icon style="color: white">mdi-close</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-snackbar>
      <vue-element-loading
        indeterminate
        :active="appLoading"
        :is-full-screen="true"
        background-color="#FFFFFF"
        color="#FEE60D"
        spinner="bar-fade-scale"
      />
      <v-flex xs12 md12>
        <v-img
          :height="
            $vuetify.breakpoint.name == 'xs'
              ? '3100px'
              : $vuetify.breakpoint.name == 'sm'
              ? '1300px'
              : $vuetify.breakpoint.name == 'md'
              ? '1350px'
              : $vuetify.breakpoint.name == 'xl'
              ? '1250px'
              : $vuetify.breakpoint.name == 'lg'
              ? '950px'
              : '900px'
          "
          :width="
            $vuetify.breakpoint.name == 'xs'
              ? '480px'
              : $vuetify.breakpoint.name == 'sm'
              ? '1000px'
              : $vuetify.breakpoint.name == 'md'
              ? '1500px'
              : $vuetify.breakpoint.name == 'lg'
              ? '2800px'
              : '2800px'
          "
          src="../assets/images/solutionspageimage.png"
        >
          <v-layout pa-6 wrap justify-center>
            <v-flex pt-8
              data-aos="slide-right"
              data-aos-ease="ease"
              data-aos-duration="1500"
              data-aos-delay="500"
              xs12
              pl-4
              align-self-center
              text-left
            >
              <span
                style="
                  font-family: homefontsub2;
                  color: white;
                  text-align: justify;
                  font-size: 36px;
                  font-weight: bolder;
                "
                >Our

                <span
                  style="
                    font-family: homefontsub2;
                    color: #fee60d;
                    text-align: justify;
                    font-size: 36px;
                    font-weight: bolder;
                  "
                  >Solutions</span
                ></span
              >
              <v-flex xs1>
                <v-progress-linear
                  align-center
                  height="2"
                  color="yellow"
                  value="100"
                  width="80%"
                ></v-progress-linear>
              </v-flex>
            </v-flex>

            <v-flex
              data-aos="zoom-in-up"
              data-aos-ease="ease"
              data-aos-duration="1500"
              data-aos-delay="500"
              pt-10
              xs12
              lg3
              sm4
              md4
              pa-4
              v-for="(item, i) in list"
              :key="i"
            >
              <v-card
                class="zoom-card"
                :height="
                  $vuetify.breakpoint.name == 'xs'
                    ? '330px'
                    : $vuetify.breakpoint.name == 'sm'
                    ? '340px'
                    : $vuetify.breakpoint.name == 'md'
                    ? '360px'
                    : $vuetify.breakpoint.name == 'xl'
                    ? '490px'
                    : $vuetify.breakpoint.name == 'lg'
                    ? '340px'
                    : '200px'
                "
              >
                <v-layout wrap justify-center>
                  <v-flex xs12>
                    <v-img
                      :height="
                        $vuetify.breakpoint.name == 'xs'
                          ? '180px'
                          : $vuetify.breakpoint.name == 'sm'
                          ? '140px'
                          : $vuetify.breakpoint.name == 'md'
                          ? '200px'
                          : $vuetify.breakpoint.name == 'xl'
                          ? '380px'
                          : $vuetify.breakpoint.name == 'lg'
                          ? '200px'
                          : '200px'
                      "
                      :src="mediaURLnew + item.image"
                    >
                    </v-img
                  ></v-flex>
                  <v-flex text-left xs10 pt-2>
                    <span
                      style="
                        font-family: homefontsub2;
                        color: black;
                        line-height: 1.5;
                        font-size: 18px;
                        font-weight: bolder;
                      "
                    >
                      {{ item.tittle }}
                    </span>
                  </v-flex>
                  <v-flex text-left xs10 pt-2>
                    <span
                      style="
                        font-family: fontsub;
                        color: black;
                        font-weight: lighter;
                        font-size: 14px;
                      "
                      v-html="item.content"
                    >
                    </span>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      rating: 4,
      msg: "",
      list: [],
      timeout: 5000,
      snackbar: false,
      appLoading: false,
      image: {},
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    getList() {
      this.appLoading = true;
      axios({
        method: "GET",
        headers: {
          siteId: "643675c595907bc8f3b1a118",
        },
        url: "/user/solutions/list",
      })
        .then((response) => {
          this.list = response.data.data;
          this.image = response.data.data[0].image;
          this.appLoading = false;
        })
        .catch((err) => {
          this.ServerError = true;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.zoom-card {
  transition: all 0.3s ease-in-out;
}

.zoom-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0px 2px 4px white;
}

.myclass.v-sheet.v-card {
  border: 1px solid #0096ff;
}
.zoom-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0px 2px 4px white;
}
</style>