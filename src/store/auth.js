import firebase from 'firebase/app'
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
      const user = firebase.auth().currentUser

      return user ? user.uid : null
    },

    async logout() {
      await firebase.auth().signOut()
    }
  }
}
