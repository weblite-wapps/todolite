<template>
<transition-group
  tag="ul"
  name="list"
  :class="$style['todo-items']"
>
  <TodoItem
    v-for="(todo, index) in computedTodos"
    :key="todo.id"
    :itemIndex="index"
    :onDone="onDone"
    :onDelete="onDelete"
    :onEdit="onEdit"
    v-bind="todo"
  />
</transition-group>
</template>


<script>
import TodoItem from './TodoItem'
import bus from '../helper/function/bus'
const { R } = window


export default {
  name: 'TodoItems',

  components: { TodoItem },

  data: () => ({
    query: '',
    whichTodosAreShown: 'All',
    time: 'descending',
  }),

  props: {
    todos: Array,
    onDone: Function,
    onDelete: Function,
    onEdit: Function,
  },

  mounted() {
    bus.$on('APPLY_SETTING', (settings) => {
      this.query = settings.query
      this.whichTodosAreShown = settings.whichTodosAreShown
    })
  },

  computed: {
    computedTodos() {
      return R.compose(
        R.filter(this.searchTitle),
        R.filter(this.doneFilter),
      )(this.todos)
    },
  },

  methods: {
    searchTitle({ title }) {
      if (!this.query.length) return true

      const position = title.search(this.query)
      if (position < 0) return false
      else return true
    },

    doneFilter({ functor }) {
      if (this.whichTodosAreShown === 'All') return true
      if (this.whichTodosAreShown === 'Done') return functor
      if (this.whichTodosAreShown === 'Undone') return !functor
    },
  },
}
</script>


<style module>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: scroll;
}
</style>
