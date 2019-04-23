<template>
  <!-- todo items -->
  <VuePerfectScrollbar class="todolist-scroll-area">
    <ul>
      <draggable
        v-model="todo"
        v-bind="dragOptions"
        :options="{ handle: '.drag-icon', scroll: true }"
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
  </VuePerfectScrollbar>
</template>

<script>
// module
import { mapGetters } from 'vuex'
// component
import TodoListItem from './TodoListItem'
import draggable from 'vuedraggable'
//
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
    }
  },

  computed: {
    ...mapState(['todos']),

    ...mapGetters({ todos: 'filteredTodos' }),

    currentAction() {
      return this.$store.state.currentAction
    },

    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
  methods: {
    handleDrag(e) {
      this.drag = false
      dragTodo(this.todos[e.oldIndex], this.todos, this.todos[e.newIndex].id)
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

.todolist-scroll-area {
  position: fixed;
  top: 105px;
  width: 100%;
  height: calc(100% - 105px);
  overflow-x: hidden;
  overflow-y: scroll;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
  cursor: pointer;
}
</style>
