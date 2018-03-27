<template>
<transition-group
  tag="ul"
  name="list"
  :class="$style['todo-items']"
>
  <TodoItem
    v-for="todo in computedTodos"
    :key="todo.id"
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

  components: {
    TodoItem,
  },

  data: () => ({
    query: '',
    done: 'all',
    time: 'descending',
  }),

  props: ['todos', 'onDone', 'onDelete', 'onEdit'],

  mounted() {
    bus.$on('APPLY_SETTING', (settings) => {
      this.query = settings.query
      this.done = settings.done
      this.time = settings.time
    })
  },

  computed: {
    computedTodos() {
      return R.compose(
        this.order,
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
      if (this.done === 'all') return true
      if (this.done === 'done') return functor
      if (this.done === 'undone') return !functor
    },

    order(todos) {
      if (this.time === 'descending') return todos
      if (this.time === 'ascending') return R.reverse(todos)
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
