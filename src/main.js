import Vue from 'vue'
import Vuesax from 'vuesax'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'vuesax/dist/vuesax.css'
import '@/styles/global.sass'

import '@/registerServiceWorker'

Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
