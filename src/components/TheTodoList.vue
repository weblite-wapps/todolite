<template>
  <!-- todo items -->
  <ul class="todo-items">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
// module
import { mapGetters } from 'vuex'
// component
import TodoListItem from './TodoListItem'

export default {
  name: 'TheTodoList',

  components: {
    TodoListItem,
  },

  computed: mapGetters({ todos: 'filteredTodos' }),
}
</script>

<style scoped>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: auto;
}
</style>
