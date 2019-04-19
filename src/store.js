// module
import Vue from 'vue'
import Vuex from 'vuex'
// shareDB
import * as db from './helper/function/changeTodo.js'
import notif from './helper/function/notification.js'
// R, W
const { R, W } = window

// set vue plugin
Vue.use(Vuex)

// variable declaration
let timer = null

export default new Vuex.Store({
  state: {
    // stuff came from weblite
    title: 'TODOLITE',
    username: 'ali',
    isAdmin: false,

    // view states
    page: 'LIST', // VIT, LIST, DONE
    currentAction: '', // remove, vit, done, list-right, list-left

    // main data
    todos: [], // [{ id, text, creator, functor, vit }],
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
        // R.reverse,
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
    changeWebliteRelatedData(state, { title, username, isAdmin }) {
      state.username = username
      state.title = title || 'TODOLITE'
      state.isAdmin = isAdmin
    },

    changeTitle(state, title) {
      state.title = title
    },

    changePage(state, page) {
      state.page = page
      W.analytics("CHANGE_TAB", { name: page })
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

    addTodo({ commit, state }, text) {
      commit('changePage', 'LIST')
      notif('add', { text }, state)
      db.add(text, state.username)
      W.analytics("ADD_TODO")
    },

    changeTodoText(_, { id, text }) {
      db.changeText(id, text)
      W.analytics("EDIT_TODO")
    },

    changeTodoFunctor({ state, dispatch }, { id, done }) {
      dispatch('changeCurrentAction', done ? 'done' : 'list-left')
      done && notif('done', { id }, state)
      db.changeFunctor(id, done ? state.username : '')
      W.analytics("DONE_TODO")
    },

    changeTodoVit({ dispatch }, { id, vit }) {
      dispatch('changeCurrentAction', vit ? 'vit' : 'list-right')
      db.changeVit(id, vit)
      W.analytics("VIT_CLICK")
    },

    removeTodo({ dispatch, state }, id) {
      dispatch('changeCurrentAction', 'remove')
      db.remove(id)
      W.analytics("REMOVE_TODO")
    },
  },

  plugins: [
    ({ commit }) => W.share.subscribe(todos =>
      commit('changeTodos', todos)
    ),
  ],
})
