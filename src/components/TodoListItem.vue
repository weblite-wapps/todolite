<template>
  <li class="list-item">
    <div class="todo-header">
      <TodoListItemHeader v-bind="todo" :editable="editable" :toggleEditable="toggleEditable"/>
    </div>
    <TodoListItemContent
      :content="todo.text"
      class="TodoListItemContent"
      :editable="editable"
      @submit="edit"
    />
  </li>
</template>

<script>
// modules
import { mapActions } from 'vuex'
// components
const TodoListItemHeader = () => import('./TodoListItemHeader.vue')
const TodoListItemContent = () => import('./TodoListItemContent.vue')

export default {
  name: 'TodoListItem',

  components: {
    TodoListItemHeader,
    TodoListItemContent,
  },

  data: () => ({
    editable: false,
  }),

  props: {
    todo: { type: Object, required: true },
  },

  methods: {
    ...mapActions(['changeTodoText']),

    toggleEditable(value) {
      if (value != undefined) this.editable = value
      else this.editable = !this.editable
    },

    edit(text) {
      this.changeTodoText({ id: this.todo.id, text })
      this.toggleEditable()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.todo-header {
  height: 40px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: $color-primary;
}
</style>
