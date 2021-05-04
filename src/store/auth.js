import { authApi } from '@/api'

export default {
  actions: {
    async login({ commit }, { email, password }) {
      console.log('TODO: Add auth state persistence')
      try {
        await authApi.login(email, password)
      } catch (e) {
        commit('setAuthError', e.code)
      }
    },

    async register({ commit }, { email, password, name }) {
      try {
        await authApi.register(email, password, name, 10500)
      } catch (e) {
        commit('setAuthError', e.code)
      }
    },

    getUid() {
      const user = authApi.getCurrentUser()

      return user ? user.uid : null
    },

    async logout({ commit }) {
      await authApi.logout()
      commit('clearInfo')
    }
  }
}
