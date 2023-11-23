import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store'; // Import your Vuex store

Vue.component("VueElementLoading", VueElementLoading);
import VueElementLoading from "vue-element-loading";
import AOS from 'aos';
import 'aos/dist/aos.css';



new Vue({
  vuetify,
  router,
  store, // Register the Vuex store
  render: h => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app');
