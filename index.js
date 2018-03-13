/* input compunent */
Vue.component('todo-input', {
  template: `
    <div>
      todo input
    </div>
  `
})



/* todo compunent */
Vue.component('todo-item', {
  template: `
    <div>
      todo item
    </div>
  `
})



/* main instance */
 const vm = new Vue({
   el: '#root',

   template: `
     <div>
       {{ name }}
       <todo-item />
       <todo-input />
     </div>
   `,

   data: {
     name: 'Ali',
     todos: [],
     editId: '',
   }
 })
