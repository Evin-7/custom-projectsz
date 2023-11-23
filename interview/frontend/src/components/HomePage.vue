<template>
  <div>
    <v-layout wrap justify-center fill-height>
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
      <v-flex align-self-center>
        <v-img
        height="100vh"
          
          src="../assets/images/homeimz.jpg"
        >
         <v-layout wrap justify-center>
          <v-flex xs2 pt-16>
            <v-card>
              <v-layout wrap justify-center>
                <v-flex pa-4>
                  <v-img
        height="100%"
          
          src="../assets/images/cimg3.jpg"
        ></v-img>
                </v-flex>
                <v-flex xs12 pa-3 text-center>
Fill Now
                </v-flex>
                <v-flex xs3 pb-3>
                  <router-link :to="'/JobApplication?id='" style="text-decoration: none">
                    <v-btn rounded size="20%">FILL<v-icon>mdi-arrow-right-thin</v-icon></v-btn>
                  </router-link>
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
      slider: {},
      additionalcontent: {},
      homecontent: {},
      bottomcontent: {},
      slideInterval: 7000,
      slideNo: 0,
      imagearray: {},
      timeout: 5000,
      msg: "",
      appLoading: false,
      snackbar: false,
      clientcounter: 0,
    };
  },
  mounted() {
    this.SliderContent();
    this.HomeContent();
    this.bottomContent();
    this.AdditionalContent();
  },

  methods: {
   
  },
};
</script>
<style>
.mainbg {
  background-color: yellow;
}
.subbg {
  background-color: #161616;
}
.loader {
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
}
.textalign {
  text-align: center;
}
.index {
  z-index: 1 !important;
}
.clr {
  background-color: #0096ff;
  color: #87ceeb;
}
.clr:hover {
  background-color: white;
  color: white;
}
.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  font-family: font pack23;
  color: darkblack;
  font-size: 5px;
}

.animated.delay-1s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.theme--light.v-tabs-items {
  background-color: transparent !important;
  background: transparent linear-gradient(180deg, #000000 0%, #54545450 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
ul {
  padding: 0;
  margin: 0;
  background: #ffffff;
}
ul li {
  display: block;
  position: relative;
  float: left;
  /* background: #1bc2a2; */
}
li ul {
  display: none;
}
ul li a {
  display: block;
  padding: 1em;
  text-decoration: none;
  white-space: nowrap;
  color: #fff;
}
ul li a:hover {
  background: #2c3e50;
}
li:hover > ul {
  display: block;
  position: absolute;
}
li:hover li {
  float: none;
}
li:hover a {
  background: #1bc2a2;
}
li:hover li a:hover {
  background: #2c3e50;
}
.main-navigation li ul li {
  border-top: 0;
}
ul ul ul {
  left: 100%;
  top: 0;
}
ul:before,
ul:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}
ul:after {
  clear: both;
}
.textHead {
  position: absolute;
  top: 200px;
}

.grad {
  background-image: linear-gradient(to right, #fbfbfb, #fbfbfb);
}

.material-icons--thick {
  stroke-width: 2px;
}
.grad3 {
  background-image: linear-gradient(to right, white, white);
}

.grad5 {
  background-image: linear-gradient(to right, red, red);
}
.my-btn {
  padding: 10px 20px; /* add 10px padding to top/bottom and 20px padding to left/right */
}

.zoom-cardx2 {
  background-color: #2e2e2e;
}

.zoom-cardx2:hover {
  cursor: pointer;
  box-shadow: 0px 2px 4px #999;
}

.clrx2 {
  color: red;
  background-color: black;
}

.drop-in {
  animation: drop-in 1s ease 200ms backwards;
}

.header {
  margin: 0.25rem 0;
  font-size: 2.5rem;
}
.grad2 {
  background-image: linear-gradient(to right, white, white);
}
@media (max-width: 767px) {
  .hidden-xs-down {
    display: none;
  }
}
div.test {
  padding: 5px;
  border-radius: 45px;
  -moz-border-radius: 15px;
}

div.test2 {
  width: 312px;
  padding: 10px;
  border-radius: 0px;
  -moz-border-radius: 15px;
}
.clrspan {
  color: orange;
}
.clrspan:hover {
  color: white;
}
.child1 {
  position: absolute;
  z-index: 1;
}
.overlay {
  position: relative;
}
.overlay::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
}
.transparent-image {
  opacity: 1;
}

@media screen and (max-width: 168px) {
  .my-heading {
    font-size: 16px; /* set the font size to 16 pixels */
  }
}
</style>