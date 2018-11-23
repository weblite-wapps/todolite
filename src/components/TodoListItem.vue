<template>
  <li class="todo-item">
    <div class="todo-header">
      <TodoListItemHeader
        v-bind="todo"
        :editable="editable"
        :toggleEditable="toggleEditable"
      />
    </div>
    <TodoListItemContent
      :content="todo.title"
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
    ...mapActions(['changeTodoTitle']),

    toggleEditable() {
      this.editable = !this.editable
    },

    edit(title) {
      this.changeTodoTitle({ id: this.todo.id, title })
      this.toggleEditable()
    },
  },
}
</script>

<style scoped>
.todo-item {
  margin-top: 15px;
}

.todo-header {
  height: 40px;
  background-color: #e6e6e6;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
}
</style>
