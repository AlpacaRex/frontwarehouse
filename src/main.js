import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSession from 'vue-session'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Axios from 'axios';//后台交互
Vue.prototype.$axios=Axios
//defaults 设置全局默认路径
Axios.defaults.baseURL="http://localhost:8000"
Axios.defaults.withCredentials=true

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
