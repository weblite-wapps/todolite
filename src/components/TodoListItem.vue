<template>
  <li class="list-item">
    <TodoListItemHeader
      v-bind="todo"
      :editable="editable"
      :toggleEditable="toggleEditable"
      :controllerOpen="controllerOpen"
      :changeControllerOpen="changeControllerOpen"
    />

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
import TodoListItemHeader from './TodoListItemHeader.vue'
import TodoListItemContent from './TodoListItemContent.vue'

export default {
  name: 'TodoListItem',

  components: {
    TodoListItemHeader,
    TodoListItemContent,
  },

  props: {
    todo: { type: Object, required: true },
  },

  data: () => ({
    editable: false,
    controllerOpen: false,
  }),

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
      const {
        todo: { id },
        editableText,
        changeTodoText,
      } = this
      changeTodoText({ id, text: editableText })
      this.editable = false
    },
  },
}
</script>

