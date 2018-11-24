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
    title: 'TO DO LITE',
    username: 'ali',
    page: 'LIST', // VIT, LIST, DONE
    todos: [], // [{ id, title, creator, functor, vit }],
    change: '', // remove, vit, list, done
  },

  getters: {
    filteredTodos({ page, todos }) {
      const filterFunction =
        page === 'VIT'
          ? ({ vit, functor }) => vit && !functor
          : page === 'DONE'
          ? R.prop('functor')
          : page === 'LIST'
          ? ({ vit, functor }) => !vit && !functor
          : R.always(true)

      return R.filter(filterFunction, todos).reverse()
    },
  },

  mutations: {
    changePage(state, page) {
      state.page = page
    },

    changeTodos(state, todos) {
      state.todos = todos
    },

    changeChange(state, value) {
      state.change = value
    },
  },

  actions: {
    addTodo({ state }, title) {
      db.add(title, state.username)
    },

    changeTodoTitle(context, { id, title }) {
      db.changeTitle(id, title)
    },

    changeTodoFunctor({ state, commit }, { id, done }) {
      commit('changeChange', done ? 'done' : 'list-left')
      db.changeFunctor(id, done ? state.username : '')
    },

    changeTodoVit({ commit }, { id, vit }) {
      commit('changeChange', vit ? 'vit' : 'list-right')
      db.changeVit(id, vit)
    },

    removeTodo({ commit }, id) {
      commit('changeChange', 'remove')
      db.remove(id)
    },
  },

  plugins: [
    ({ commit }) =>
      W && W.share.subscribe(todos => commit('changeTodos', todos)),
  ],
})
