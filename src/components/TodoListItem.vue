<template>
  <li>
    <div class="todo-header">
      <TodoListItemHeader
        v-bind="todo"
        :editable="editable"
        :toggleEditable="toggleEditable"
      />
    </div>
    <TodoListItemContent
      :content="todo.text"
      :editable="editable"
      @submit="edit"
    />
  </li>
</template>

<script>
// modules
import { mapActions } from 'vuex'
// components
import TodoListItemHeader from './TodoListItemHeader.vue'
import TodoListItemContent from './TodoListItemContent.vue'

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

    toggleEditable(value) {  // TODO: this name according to functionality should be changed to changeEditable!
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

<style scoped>
.todo-header {
  height: 40px;
  background-color: #e6e6e6;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
}
</style>
