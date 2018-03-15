// ****** section 1: helper and utils
const getDataFunc = function(obj) { return function() { return obj } }



// ****** section 2: components
/* input compunent */
Vue.component('icon-button', {
  template: `
    <div @click="click">
      <i
        class="material-icons icon"
        :style="'color:' + color + ';'"
      >
        {{ icon }}
      </i>
    </div>
  `,

  props: ['icon', 'color'],

  methods: {
    click: function() { this.$emit('click') },
  }
})

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

      <transition name="fade">
        <icon-button
          @click="onClick"
          v-show="this.valueExist"
          :icon="this.editId ? 'edit' : 'add'"
          color="green"
        />
      </transition>
    </div>
  `,

  props: ['edit'],

  data: getDataFunc({
    title: '',
    editId: '',
    editTitle: '',
  }),

  watch: {
    edit: function(edit) {
      if (!edit) return
      this.editId = edit.id
      this.editTitle = edit.title
    },
  },

  computed: {
    value: function() { return this.editId ? this.editTitle : this.title },
    valueExist: function() {
      return (this.editId && this.editTitle) || (!this.editId && this.title)
    },
  },

  methods: {
    onChange: function(e) {
      if (this.editId) this.editTitle = e.target.value
      else this.title = e.target.value
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
      const that = this
      this.$emit('edit', { id: this.editId, title: this.editTitle })
      this.editTitle = ''
      setTimeout(function () { that.editId = '' }, 500)
    }
  },
})



/* todo item compunent */
Vue.component('todo-item', {
  template: `
    <div class="todo-item">
      <div class="todo-item-title">{{ title }}</div>

      <div
        class="todo-item-title"
        v-if="functor"
      >
        Done by {{ functor }}
      </div>

      <div class="todo-item-icons">
        <icon-button
          @click="onDone(id)"
          icon="done"
          color="green"
          v-if="!functor"
        />
        <icon-button
          @click="onDelete(id)"
          icon="close"
          color="green"
        />
        <icon-button
          @click="onEdit(id)"
          icon="edit"
          color="green"
          v-if="!functor"
        />
      </div>
    </div>
  `,

  props: ['title', 'functor', 'id', 'onDone', 'onDelete', 'onEdit'],
})



/* todo items compunent */
Vue.component('todo-items', {
  template: `
    <ul class="todo-items">
      <transition-group name="todo-item-transition" tag="p">
        <li
          is="todo-item"
          v-for="todo in todos"
          :key="todo.id"
          :onDone="onDone"
          :onDelete="onDelete"
          :onEdit="onEdit"
          v-bind="todo"
        />
      </transition-group>
    </ul>
  `,

  props: ['todos', 'onDone', 'onDelete', 'onEdit'],
})



// ****** section 3: main vue instance
/* main instance */
 const vm = new Vue({
   el: '#vue',

   template: `
     <div class="root">
       <todo-items
         :todos="todos"
         :onDone="onDone"
         :onDelete="onDelete"
         :onEdit="onClickEdit"
       />
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
       { id: '2', title: 'do second thing in a row', functor: '' },
     ],
     editId: '',
   },

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
 })
