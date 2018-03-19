// modules
import Vue from 'vue'
// styles
import './helper/style/reset.css'
import './helper/style/main.css'
// components
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
