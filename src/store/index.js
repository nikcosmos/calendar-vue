import Main from './modules/Main';
import Reserves from './modules/Reserves';
import Vue from 'vue';
import Vuex from 'vuex';
import Week from './modules/Week';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      Main,
      Week,
      Reserves,
   },
});
