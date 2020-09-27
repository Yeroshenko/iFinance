import firebase from 'firebase/app'
import auth from '@/api/auth'

export default {
  actions: {
    async login({ commit }, { email, password }) {
      console.log('TODO: Add auth state persistence')
      try {
        await auth.login(email, password)
      } catch (e) {
        commit('setError', e.code)
      }
    },

    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await auth.register(email, password)

        const uid = await dispatch('getUid')

        await auth.createUserInDB(uid, name, 10500)
      } catch (e) {
        commit('setError', e.code)
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
