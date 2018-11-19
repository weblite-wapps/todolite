<template>
  <div :class="$style.root">
    <TheAppBar :title="title" @submit="addTodo" />

    <BaseTab
      class="tab"
      :items="tabItems"
      :value="selectedTab"
      @change="changeTab"
    />

    <TheTodoList
      :todos="filteredTodos"
      :onDone="doneTodo"
      :onDelete="deleteTodo"
    />
  </div>
</template>

<script>
// components
import BaseTab from './helper/component/BaseTab'
import TheAppBar from './components/TheAppBar'
import TheTodoList from './components/TheTodoList'
// helper
import * as db from './helper/function/changeTodo.js'
import webliteHandler from './helper/function/weblite.api'
// R && W
const { W, R } = window

export default {
  name: 'App',

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
    selectedTab: 'LIST',
    name: 'Ali',
    todos: [],
  }),

  created() {
    W && webliteHandler(this)
  },

  computed: {
    filteredTodos() {
      if (this.selectedTab === 'VIT') return this.todos.filter(R.prop('vit'))
      if (this.selectedTab === 'DONE')
        return this.todos.filter(R.prop('functor'))
      if (this.selectedTab === 'LIST')
        return this.todos.filter(({ vit, functor }) => !vit && !functor)
    },
  },

  methods: {
    changeTab(value) {
      this.selectedTab = value
    },

    addTodo(title) {
      db.addTodo(title, this.name)
    },

    onEditTitle(obj) {
      db.editTitle(obj.id, obj.title)
    },

    doneTodo(id, checked) {
      db.addFunctor(id, checked ? this.name : '')
    },

    deleteTodo(id) {
      db.deleteTodo(id)
    },
  },
}
</script>

<style module>
.root {
  position: relative;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px #e0e0e0 solid;
  overflow: hidden;
}

.tab {
  border-radius: 10px 10px 0 0;
}
</style>
