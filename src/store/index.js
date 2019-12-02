import Vue from "vue";
import Vuex from "vuex";
import businesses from "./modules/businesses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    businesses
  }
});
