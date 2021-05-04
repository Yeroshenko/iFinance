import firebase from 'firebase'

export const authApi = {
  async login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  },

  async register(email, password, name, bill = 10000) {
    const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password)

    await firebase
      .database()
      .ref(`/users/${newUser.user.uid}/info`)
      .set({ name, bill })
  },

  async logout() {
    await firebase.auth().signOut()
  },

  getCurrentUser() {
    return firebase.auth().currentUser
  }
}
