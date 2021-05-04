import Vue from 'vue'
import Vuesax from 'vuesax'
import Vuelidate from 'vuelidate'

// Back-end
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import dateFilter from '@/filters/dateFilter'
import currencyFilter from '@/filters/currencyFilter'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// Styles
import 'vuesax/dist/vuesax.css'
import '@/styles/global.sass'

import '@/registerServiceWorker'

Vue.use(Vuesax) // UI framework
Vue.use(Vuelidate) // Input validation
Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyB8ACLdYLDoVGJCPsM4ELLkfySlfN1xTAg',
  authDomain: 'ifinancee.firebaseapp.com',
  databaseURL: 'https://ifinancee.firebaseio.com',
  projectId: 'ifinancee',
  storageBucket: 'ifinancee.appspot.com',
  messagingSenderId: '412864090652',
  appId: '1:412864090652:web:a04681e097ed76aaaf85d9',
  measurementId: 'G-HLG9HHSRNQ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
