<template>
  <!-- todo items -->
  <ul>
    <transition-group
      name="todo"
      tag="div"
      :leave-to-class="currentAction ? `${currentAction}-leave-to` : 'leave-to'"
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

    currentAction() {
      return this.$store.state.currentAction
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: block;
  padding: 5px 10px;
  transition: all 0.6s ease;
}

.todo-item:first-of-type {
  margin-top: 10px;
}

.todo-enter {
  opacity: 0;
  transform: translateY(-300px);
}

.leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.remove-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
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
  width: 100%;
  display: block;
  padding: 5px 10px;
  position: absolute;
  box-sizing: border-box;
}
</style>
