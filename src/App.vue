<template>
  <div>
    <TheAppBar/>
    <TheLoading v-if="!isComponentLoaded || !isDataFetched"/>
    <TheTodoList/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// components
import TheLoading from './components/TheLoading'
const TheAppBar = () => import('./components/TheAppBar')
const TheTodoList = () => import('./components/TheTodoList')
// helpers
import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// W
const { W } = window

export default {
  name: 'App',

  store,

  components: {
    TheLoading,
    TheAppBar,
    TheTodoList,
  },

  computed: mapState(['isDataFetched', 'isComponentLoaded']),

  created() {
    W && webliteHandler(this)
  },
}
</script>