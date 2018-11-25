// modules
import Vue from 'vue'
// global css style
import './helper/style/reset.css'
import './helper/style/global.css'
// components
import App from './App.vue'

new Vue({ render: h => h(App) }).$mount('#app')
