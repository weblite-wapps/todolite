// modules
import Vue from 'vue'
// styles
import './helper/style/reset.css'
import './helper/style/main.css'
import './helper/style/transition.css'
// components
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
