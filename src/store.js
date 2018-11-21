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
    page: 'LIST', // VIT, LIST, DONE
    username: 'ali',
    todos: [], // [{ id, title, creator, functor, vit }]
  },

  getters: {
    filteredTodos({ page, todos }) {
      const filterFunction =
        page === 'VIT'
          ? R.prop('vit')
          : page === 'DONE'
          ? R.prop('functor')
          : page === 'LIST'
          ? ({ vit, functor }) => !vit && !functor
          : R.always(true)

      return R.filter(filterFunction, todos)
    },
  },

  mutations: {
    changePage(state, page) {
      state.page = page
    },

    changeTodos(state, todos) {
      state.todos = todos
    },
  },

  actions: {
    addTodo({ state }, title) {
      db.add(title, state.username)
    },

    changeTodoTitle(context, { id, title }) {
      db.changeTitle(id, title)
    },

    changeTodoFunctor({ state }, { id, done }) {
      db.changeFunctor(id, done ? state.username : '')
    },

    changeTodoVit(context, { id, vit }) {
      db.changeVit(id, vit)
    },

    removeTodo(context, id) {
      db.remove(id)
    },
  },

  plugins: [
    ({ commit }) =>
      W && W.share.subscribe(todos => commit('changeTodos', todos)),
  ],
})
