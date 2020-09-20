import Vue from 'vue'
import Vuesax from 'vuesax'
import Vuelidate from 'vuelidate'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'vuesax/dist/vuesax.css'
import '@/styles/global.sass'

import '@/registerServiceWorker'

Vue.use(Vuesax) // UI framework
Vue.use(Vuelidate) // Input validation
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
