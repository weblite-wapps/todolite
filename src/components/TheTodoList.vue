<template>
  <!-- todo items -->
  <ul class="todo-items">
    <TheTodoListItem
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
import TheTodoListItem from './TheTodoListItem'

export default {
  name: 'TodoItems',

  components: {
    TheTodoListItem,
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
}
</script>

<style scoped>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: auto;
}
</style>
