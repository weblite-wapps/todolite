<template>
  <li class="todo-item">
    <div class="todo-header"></div>
    <div class="todo-content">{{ title }}</div>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',

  components: {},

  props: {
    title: String,
    functor: String,
    creator: String,
    id: Number,
    itemIndex: Number,
    onDone: Function,
    onDelete: Function,
    onEdit: Function,
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
}

.todo-content {
  margin-top: 2px;
  padding: 15px;
  font-weight: 500;
  background-color: #e6e6e6;
  border-bottom-right-radius: 20px;
}
</style>
