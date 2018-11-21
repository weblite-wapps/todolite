<template>
  <div :class="$style.root">
    <TheAppBar :title="title" />

    <BaseTab
      class="tab"
      :items="tabItems"
      :value="selectedTab"
      @change="changeTab"
    />

    <TheTodoList :todos="filteredTodos" />
  </div>
</template>

<script>
// modules
import { mapState, mapGetters, mapMutations } from 'vuex'
// components
import BaseTab from './helper/component/BaseTab'
import TheAppBar from './components/TheAppBar'
import TheTodoList from './components/TheTodoList'
// helper
import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// R && W
const { W } = window

export default {
  name: 'App',

  store,

  components: {
    BaseTab,
    TheAppBar,
    TheTodoList,
  },

  data: () => ({
    title: 'TO DO LITE',
    tabItems: [
      { value: 'VIT', color: '#FFAD00', icon: 'star' },
      { value: 'LIST', color: '#DA4445', icon: 'list' },
      { value: 'DONE', color: '#60C102', icon: 'done' },
    ],
    name: 'Ali',
  }),

  computed: {
    ...mapState(['selectedTab']),
    ...mapGetters(['filteredTodos']),
  },

  created() {
    W && webliteHandler(this)
  },

  methods: mapMutations(['changeTab']),
}
</script>

<style module>
.root {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.tab {
  border-radius: 10px 10px 0 0;
}
</style>
