import Room from './modules/Room';
import Vue from 'vue';
import Vuex from 'vuex';
import Week from './modules/Week';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      Week,
      Room,
   },
});
