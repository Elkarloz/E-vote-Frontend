import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 
const PerfectScrollbar = require('perfect-scrollbar');
//import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 
//Vue.use(PerfectScrollbar)

import '../src/content/files' 

import axios from 'axios'
import VueAxios from 'vue-axios'





Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:4000/api';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
