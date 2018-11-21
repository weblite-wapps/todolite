<template>
  <li class="todo-item">
    <div class="todo-header"><TodoListItemHeader v-bind="todo" /></div>
    <TodoListItemContent :content="todo.title" />
  </li>
</template>

<script>
import TodoListItemHeader from './TodoListItemHeader.vue'
import TodoListItemContent from './TodoListItemContent.vue'

export default {
  name: 'TodoListItem',

  components: {
    TodoListItemHeader,
    TodoListItemContent,
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
</style>
