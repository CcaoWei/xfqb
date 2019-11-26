import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNav: "",
    tabNum: 0,
    url: "http://192.168.10.29:8300"
  },
  mutations: {
    setActiveNav(state, data) {
      // console.log(data)
      state.activeNav = data;
    },
    setTabNum(state, data) {
      // console.log(data)
      state.tabNum = data;
    }
  },
  actions: {},
  modules: {}
});
