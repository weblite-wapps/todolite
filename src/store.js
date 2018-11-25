// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
// R
const { R, W } = window

// set vue plugin
Vue.use(Vuex)

// variable declaration
let timer = null

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    title: 'TO DO LITE',
    username: 'ali',

    // view states
    page: 'LIST', // VIT, LIST, DONE
    currentAction: '', // remove, vit, done, list-right, list-left

    // main data
    todos: [], // [{ id, title, creator, functor, vit }],
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
          : R.always(false)

      return R.compose(
        R.reverse,
        R.filter(filterFunction),
      )(todos)
    },

    donePercentage({ todos }) {
      const numberOfDone = todos.filter(R.prop('functor')).length
      const numberOfAll = todos.length
      if (numberOfAll === 0) return 0
      else return ((numberOfDone / numberOfAll) * 100).toFixed(0)
    },
  },

  mutations: {
    changeWebliteRelatedData(state, { title, username }) {
      state.username = username
      state.title = title
    },

    changeTitle(state, title) {
      state.title = title
    },

    changePage(state, page) {
      state.page = page
    },

    changeTodos(state, todos) {
      state.todos = todos
    },

    changeCurrentAction(state, action) {
      state.currentAction = action
    },
  },

  actions: {
    changeCurrentAction({ commit }, value) {
      if (timer) clearTimeout(timer)
      commit('changeCurrentAction', value)
      timer = setTimeout(() => commit('changeCurrentAction', ''), 0)
    },

    addTodo({ commit, state }, title) {
      commit('changePage', 'LIST')
      db.add(title, state.username)
    },

    changeTodoTitle(_, { id, title }) {
      db.changeTitle(id, title)
    },

    changeTodoFunctor({ state, dispatch }, { id, done }) {
      dispatch('changeCurrentAction', done ? 'done' : 'list-left')
      db.changeFunctor(id, done ? state.username : '')
    },

    changeTodoVit({ dispatch }, { id, vit }) {
      dispatch('changeCurrentAction', vit ? 'vit' : 'list-right')
      db.changeVit(id, vit)
    },

    removeTodo({ dispatch }, id) {
      dispatch('changeCurrentAction', 'remove')
      db.remove(id)
    },
  },

  plugins: [
    ({ commit }) => W.share.subscribe(todos => commit('changeTodos', todos)),
  ],
})
