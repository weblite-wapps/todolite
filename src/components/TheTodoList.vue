<template>
  <!-- todo items -->
  <ul class="todo-items">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem'

export default {
  name: 'TheTodoList',

  components: {
    TodoListItem,
  },

  data: () => ({
    time: 'descending',
  }),

  props: {
    todos: Array,
  },
}
</script>

<style scoped>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: auto;
}
</style>
