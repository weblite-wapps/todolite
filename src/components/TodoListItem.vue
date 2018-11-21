<template>
  <li class="todo-item">
    <div class="todo-header"><TodoListItemHeader v-bind="todo" /></div>
    <div class="todo-content">{{ todo.title }}</div>
  </li>
</template>

<script>
import TodoListItemHeader from './TodoListItemHeader.vue'

export default {
  name: 'TodoListItem',

  components: {
    TodoListItemHeader,
  },

  props: {
    todo: { type: Object, required: true },
  },
}
</script>

<style scoped>
.todo-item {
  margin-top: 15px;
}

.todo-header {
  height: 40px;
  background-color: #e6e6e6;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
}

.todo-content {
  margin-top: 2px;
  padding: 15px;
  font-weight: 500;
  background-color: #e6e6e6;
  border-bottom-right-radius: 20px;
}
</style>
