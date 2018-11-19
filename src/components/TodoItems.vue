<template>
  <!-- todo items -->
  <ul class="todo-items">
    <TheTodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :itemIndex="index"
      :onDone="onDone"
      :onDelete="onDelete"
      :onEdit="onEdit"
      v-bind="todo"
    />
  </ul>
</template>


<script>
import TheTodoItem from './TheTodoItem'


export default {
  name: 'TodoItems',

  components: {
    TheTodoItem
  },

  data: () => ({
    time: 'descending',
  }),

  props: {
    todos: Array,
    onDone: Function,
    onDelete: Function,
    onEdit: Function,
  },

  computed: {},

  methods: {},
}
</script>


<style scoped>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: auto;
}
</style>
