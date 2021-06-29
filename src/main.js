import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

import auth from './network/auth.js'
Vue.use(auth)

import axios from './network/axios.js'
Vue.use(axios)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VuePreview from 'vue-preview';
Vue.use(VuePreview);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
