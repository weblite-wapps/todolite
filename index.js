// ****** section 1: helper and utils
const getDataFunc = function(obj) { return function() { return obj } }



// ****** section 2: components
/* input compunent */
Vue.component('todo-input', {
  template: `
    <div class="input-root">
      <input
        type="text"
        placeholder="add todo ..."
        class="input"
        :value="value"
        @input="onChange"
        @keyup.enter="onClick"
      />
      <img
        :src="this.editId ? 'icons/edit.png' : 'icons/add.png'"
        v-show="this.valueExist"
        class="icon"
        @click="onClick"
      />
    </div>
  `,

  props: ['edit'],

  data: getDataFunc({
    title: '',
    editId: '',
    editTitle: '',
  }),

  computed: {
    value: function() { return this.editId ? this.editTitle : this.title },
    valueExist: function() {
      return (this.editId && !this.editTitle) || (!this.editId && this.title)
    },
  },

  methods: {
    onChange: function(e) {
      if (this.editId) this.editTitle = e.target.value
      this.title = e.target.value
    },

    onClick: function() {
      if (!this.valueExist) return
      this.editId ? this.onEdit() : this.onAdd()
    },

    onAdd: function() {
      this.$emit('add', this.title)
      this.title = ''
    },

    onEdit: function() {
      this.$emit('edit', { id: this.editId, title: this.editTitle })
      this.editId = ''
      this.editTitle = ''
    }
  },
})



/* todo item compunent */
Vue.component('todo-item', {
  template: `
    <div class="todo-item">
      <div class="todo-item-title">{{ title }}</div>
      <div class="todo-item-icons">
        <img src="icons/done.png" class="icon" />
        <img src="icons/close.png" class="icon" />
        <img src="icons/edit.png" class="icon" />
      </div>
    </div>
  `,

  props: ['title', 'functor'],
})



/* todo items compunent */
Vue.component('todo-items', {
  template: `
    <ul class="todo-items">
      <li
        is="todo-item"
        v-for="todo in todos"
        :key="todo.id"
        v-bind="todo"
      />
    </ul>
  `,

  props: ['todos'],
})



// ****** section 3: main vue instance
/* main instance */
 const vm = new Vue({
   el: '#vue',

   template: `
     <div class="root">
       <todo-items :todos="todos" />
       <todo-input
         :edit="edit"
         @add="onAdd"
         @edit="onEdit"
       />
     </div>
   `,

   data: {
     name: 'Ali',
     todos: [
       { id: '1', title: 'do whatever you want to do', functor: '' },
       { id: '2', title: 'do second thing in a row', functor: 'ali' },
     ],
     editId: '',
   },

   computed: {
     edit: function() {
       const editId = this.editId
       const todo = editId && this.todos[editId]
       return todo
     },
   },

   methods: {
     onAdd: function(title) {
       this.todos.push({ id: Math.random(), title: title, functor: '' })
     },

     onEdit: function(obj) {
       const index = R.findIndex(R.propEq('id', obj.id), this.todos)
       if(index !== undefined) this.todos[index].title = obj.title
     },
   },
 })
