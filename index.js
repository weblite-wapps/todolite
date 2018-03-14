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
        v-model="value"
      />
      <img src="icons/add.png" class="input-add-icon" />
    </div>
  `,

  data: getDataFunc({
    value: '',
  }),
})



/* todo item compunent */
Vue.component('todo-item', {
  template: `
    <div>
    </div>
  `,
})



/* todo items compunent */
Vue.component('todo-items', {
  template: `
    <div class="todo-items"></div>
  `,
})



/* main instance */
 const vm = new Vue({
   el: '#vue',

   template: `
     <div class="root">
       <todo-items />
       <todo-input />
     </div>
   `,

   data: {
     name: 'Ali',
     todos: [],
     editId: '',
   },
 })
