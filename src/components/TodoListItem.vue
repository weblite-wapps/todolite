<template>
  <li class="list-item">
    <div class="todo-header">
      <TodoListItemHeader
        v-bind="todo"
        :editable="editable"
        :toggleEditable="toggleEditable"
        :controllerOpen="controllerOpen"
        :changeControllerOpen="changeControllerOpen"
      />
    </div>
    <TodoListItemContent
      v-bind="todo"
      :content="todo.text"
      class="TodoListItemContent"
      :editable="editable"
      @submit="toggleEditable"
      :controllerOpen="controllerOpen"
    /> 
  </li>
</template>

<script>
// modules
import { mapState, mapActions } from 'vuex'
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
    controllerOpen: false,
  }),

  props: {
    todo: { type: Object, required: true },
  },

  computed: mapState(['editableText']),

  methods: {
    ...mapActions(['changeTodoText']),

    changeControllerOpen(value) { 
      this.toggleEditable()
      this.controllerOpen = value
    },

    toggleEditable(value) {
      if (value !== undefined && this.editable) this.edit()
      this.editable = value
    },

    edit() {
      const { todo: { id }, editableText, changeTodoText } = this
      changeTodoText({ id, text: editableText })
      this.editable = false
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

