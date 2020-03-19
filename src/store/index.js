import Vue from 'vue'
import Vuex from 'vuex'
import Classes from "./classes";
import Devices from "./devices";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Classes,
    Devices
  }
})
