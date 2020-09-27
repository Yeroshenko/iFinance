import firebase from 'firebase'

export default {
  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
  },

  register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  },

  createUserInDB(uid, name, bill = 10000) {
    firebase
      .database()
      .ref(`/users/${uid}/info`)
      .set({ name, bill })
  }
}
