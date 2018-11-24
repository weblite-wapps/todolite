<template>
  <!-- todo items -->
  <ul class="todo-items">
    <transition-group
      name="todo"
      tag="div"
      :leave-to-class="`${change}-leave-to`"
    >
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

  computed: {
    ...mapGetters({ todos: 'filteredTodos' }),

    change() {
      return this.$store.state.change
    },
  },
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

.todo-enter {
  opacity: 0;
  transform: translateY(-300px);
}

.remove-leave-to {
  opacity: 0;
  transform: translateY(1000px);
}

.vit-leave-to,
.list-left-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.done-leave-to,
.list-right-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

.todo-leave-active {
  position: absolute;
  display: block;
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
</style>
