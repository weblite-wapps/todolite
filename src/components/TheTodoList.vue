<template>
  <!-- todo items -->
  <ul class="todolist-scroll-area" key="scrollbar" ref="todolist">
    <draggable
      key="draggable"
      v-bind="dragOptions"
      handle=".drag-icon"
      scroll
      @start="drag = true"
      @end="handleDrag"
    >
      <transition-group
        class="transition"
        name="todo"
        tag="div"
        :leave-to-class="currentAction ? `${currentAction}-leave-to` : 'leave-to'"
      >
        <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" class="todo-item"/>
      </transition-group>
    </draggable>
  </ul>
</template>

<script>
// modules
import draggable from 'vuedraggable'
import { mapGetters, mapState } from 'vuex'
// components
const TodoListItem = () => import('./TodoListItem.vue')
// helpers
import { dragTodo } from '../helper/function/changeTodo'

export default {
  name: 'TheTodoList',

  components: {
    TodoListItem,
    draggable,
  },

  data() {
    return {
      drag: false,
      dragOptions: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      },
    }
  },

  updated() {
    this.$refs.todolist.style.marginTop = this.scrollHeight;
  },

  watch: {
    scrollHeight(value) {
      this.$refs.todolist.style.marginTop = value;
    },
  },

  computed: {
    ...mapGetters({ todos: 'filteredTodos', allTodos: 'allTodos' }),

    ...mapState(['currentAction', 'scrollHeight']),
  },
  methods: {
    handleDrag({ oldIndex, newIndex }) {
      const { todos, allTodos } = this
      this.drag = false
      dragTodo(todos[oldIndex], allTodos, todos[newIndex].id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.todo-item {
  display: block;
  padding: 5px 10px;
  transition: all 0.3s ease-in;
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

.todolist-scroll-area {
  position: fixed;
  top: 105px;
  width: 100%;
  height: calc(100% - 105px);
  overflow-x: hidden;
  overflow-y: overlay;
  transition: all 0.3s ease-in;
}

.todolist-scroll-area::-webkit-scrollbar-track {
  background-color: $font-color-light-primary;
}

.todolist-scroll-area::-webkit-scrollbar {
  width: 7px;
  background-color: $font-color-light-primary;
  border-radius: 20px;
}

.todolist-scroll-area::-webkit-scrollbar-thumb {
  background: rgba(0, 150, 227, 0.5);
  border-radius: 40px;
  border: 2px solid $font-color-light-primary;
}

.todolist-scroll-area::-webkit-scrollbar-thumb:hover {
  border: 0px solid $font-color-light-primary;
}

.ghost {
  opacity: 0.2;
  background: $color-secondary;
  cursor: pointer;
}
</style>
