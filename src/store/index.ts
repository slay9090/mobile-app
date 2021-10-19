import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    person: {},
  },
  mutations: {

    setPersonData(state: any, data: any): void {
      console.log(data);
      state.person = data;
    },
  },
  actions: {},
  getters: {
    getPerson: (state) => state.person,
  },
  // modules: {},
});
