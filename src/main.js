// modules
import Vue from 'vue'
// global css style
import './helper/style/reset.scss'
import './helper/style/global.scss'
// components
import App from './App.vue'

new Vue({ render: h => h(App) }).$mount('#app')
