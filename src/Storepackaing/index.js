import Vue from '../../node_modules/vue';
import Vuex from '../../node_modules/vuex';
import state from '../Storepackaing/states';
import getters from '../Storepackaing/getters';
import mutations from '../Storepackaing/mutations';
import actions from '../Storepackaing/actions';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
