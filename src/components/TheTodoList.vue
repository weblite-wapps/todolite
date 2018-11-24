<template>
  <!-- todo items -->
  <ul class="todo-items">
    <transition-group name="todo" tag="div">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        class="todo-item"
      />
    </transition-group>
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
  overflow-y: auto;
  margin-top: 10px;
}

.todo-item {
  transition: all 1s;
  display: block;
  padding: 5px 10px;
}

.todo-enter,
.todo-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.todo-leave-active {
  position: absolute;
  display: block;
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
</style>
