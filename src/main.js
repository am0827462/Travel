import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueScrollto from 'vue-scrollto'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)

Vue.use(vueScrollto)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
