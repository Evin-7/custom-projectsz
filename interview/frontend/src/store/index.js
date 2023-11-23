// store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// store/index.js
// Vuex store module
const state = {
  jobDataArray: [],
  topClass: false,
};

const mutations = {
  setJobDataArray(state, jobData) {
    state.jobDataArray.push(jobData);
  },
  setTopClass(state, value) {
    state.topClass = value;
  },
};

const actions = {
  setJobData({ commit, dispatch }, jobData) {
    commit("setJobDataArray", jobData);

    // Check if the percentage is greater than 90%
    if (jobData.percentage > 90) {
      // Set the value of the "Top Class" field to true
      dispatch("setTopClass", true);
    }
  },
  setTopClass({ commit }, value) {
    commit("setTopClass", value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

