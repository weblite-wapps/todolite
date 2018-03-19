<template>
<transition-group
  tag="ul"
  name="list"
  :class="$style['todo-items']"
>
  <TodoItem
    v-for="todo in todos"
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
