// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// R
const { R, W } = window

let timer = null

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

    donePercentage({ todos }) {
      const numberofDone = todos.filter(R.prop('functor')).length
      const numberofall = todos.length
      if (numberofall === 0) return 0
      else return ((numberofDone / numberofall) * 100).toFixed(0)
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
    changeChangeWithDelay({ commit }, value) {
      if (timer) clearTimeout(timer)
      commit('changeChange', value)
      timer = setTimeout(() => commit('changeChange', ''), 0)
    },

    addTodo({ commit, state }, title) {
      commit('changePage', 'LIST')
      db.add(title, state.username)
    },

    changeTodoTitle(context, { id, title }) {
      db.changeTitle(id, title)
    },

    changeTodoFunctor({ state, dispatch }, { id, done }) {
      dispatch('changeChangeWithDelay', done ? 'done' : 'list-left')
      db.changeFunctor(id, done ? state.username : '')
    },

    changeTodoVit({ dispatch }, { id, vit }) {
      dispatch('changeChangeWithDelay', vit ? 'vit' : 'list-right')
      db.changeVit(id, vit)
    },

    removeTodo({ dispatch }, id) {
      dispatch('changeChangeWithDelay', 'remove')
      db.remove(id)
    },
  },

  plugins: [
    ({ commit }) =>
      W && W.share.subscribe(todos => commit('changeTodos', todos)),
  ],
})
