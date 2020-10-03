import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store//auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authError: null
  },

  mutations: {
    setAuthError(state, error) {
      state.authError = error
    },
    clearAuthError(state) {
      state.authError = null
    }
  },

  getters: {
    authError: state => state.authError
  },

  modules: { auth }
})
