<template>
<ul :class="$style['todo-items']">
  <transition-group name="todo-item-transition" tag="p">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :onDone="onDone"
      :onDelete="onDelete"
      :onEdit="onEdit"
      v-bind="todo"
    />
  </transition-group>
</ul>
</template>


<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoItems',

  components: {
    TodoItem,
  },

  props: ['todos', 'onDone', 'onDelete', 'onEdit'],
}
</script>


<style module>
.todo-items {
  height: inherit;
  padding: 10px;
  overflow-y: scroll;
}
</style>

<style>
.todo-item-transition-enter-active, .todo-item-transition-leave-active {
  transition: all 1s;
}
.todo-item-transition-enter, .todo-item-transition-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
