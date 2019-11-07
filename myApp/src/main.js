import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./routes"
import VueLazyLoad from 'vue-lazyload'
import vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(vuex)

Vue.use(VueRouter)

Vue.use(VueLazyLoad,{
  // preLoad:1.3,
  loading:'../public/assets/default_img.png',
  attempt:3
})

let bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
  router,
  render(h){
    return h(App)
  }
}).$mount('#app')
