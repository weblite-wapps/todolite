// modules
import Vue from 'vue'
// components
import App from './App.vue'
// styles
import './helper/style/reset.css'
import './helper/style/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
