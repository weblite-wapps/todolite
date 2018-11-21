// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// R
const { R, W } = window

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'ali',
    selectedTab: 'LIST',
    todos: [],
  },

  getters: {
    filteredTodos(state) {
      if (state.selectedTab === 'VIT') return state.todos.filter(R.prop('vit'))
      if (state.selectedTab === 'DONE')
        return state.todos.filter(R.prop('functor'))
      if (state.selectedTab === 'LIST')
        return state.todos.filter(({ vit, functor }) => !vit && !functor)
    },
  },

  mutations: {
    changeTab(state, value) {
      state.selectedTab = value
    },

    changeTodos(state, todos) {
      state.todos = todos
    },
  },

  actions: {
    addTodo({ state }, title) {
      db.addTodo(title, state.name)
    },

    changeTodoTitle(obj) {
      db.changeTitle(obj.id, obj.title)
    },

    changeTodoFunctor(id, checked) {
      db.changeFunctor(id, checked ? state.name : '')
    },

    changeTodoVit(id, checked) {
      db.changeVit(id, checked ? state.name : '')
    },

    deleteTodo(id) {
      db.deleteTodo(id)
    },
  },

  plugins: [
    ({ commit }) => {
      if (W) W.share.subscribe(todos => commit('changeTodos', todos))
    },
  ],
})
