<template>
<div :class="$style.root">
  <TodoItems
    :todos="todos"
    :onDone="onDone"
    :onDelete="onDelete"
    :onEdit="onClickEdit"
  />
  <TodoInput
    :edit="edit"
    @add="onAdd"
    @edit="onEdit"
  />
</div>
</template>


<script>
import TodoInput from './components/TodoInput'
import TodoItems from './components/TodoItems'
const R = window.R

export default {
  name: 'app',

  components: {
    TodoInput,
    TodoItems,
  },

  data: () => ({
    name: 'Ali',
    todos: [
      { id: '1', title: 'do whatever you want to do', functor: 'ali' },
      { id: '2', title: 'do second thing in a row', functor: '' },
    ],
    editId: '',
  }),

  computed: {
    edit: function() { return R.find(R.propEq('id', this.editId), this.todos) },
  },

  methods: {
    onAdd: function(title) { this.todos.push({ id: Math.random(), title: title, functor: '' }) },

    onEdit: function(obj) {
      const index = R.findIndex(R.propEq('id', obj.id), this.todos)
      if(index !== undefined) {
        this.todos[index].title = obj.title
        this.editId = ''
      }
    },

    onDone: function(id) {
      const index = R.findIndex(R.propEq('id', id), this.todos)
      this.todos = R.assocPath([index, 'functor'], this.name, this.todos)
    },

    onDelete: function(id) { this.todos = R.reject(R.propEq('id', id), this.todos) },

    onClickEdit: function(id) { this.editId = id },
  },
}
</script>


<style module>
  .root {
    width: 350px;
    height: 90%;
    display: flex;
    flex-direction: column;
    border: 1px #E0E0E0 solid;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
