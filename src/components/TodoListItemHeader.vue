<template>
  <div class="root">
    <div class="header">
      <!-- controllers -->
      <TodoListItemHeaderControllers v-if="controllerOpen" />
      <TodoListItemHeaderInfo v-else />
    </div>
    <BaseControllerButton
      class="controllerButton"
      :value="controllerOpen"
      @change="changeControllerOpen"
    />
  </div>
</template>

<script>
import TodoListItemHeaderControllers from './TodoListItemHeaderControllers.vue'
import TodoListItemHeaderInfo from './TodoListItemHeaderInfo.vue'
import BaseControllerButton from '../helper/component/BaseControllerButton.vue'

export default {
  name: 'TodoListItemHeader',

  components: {
    TodoListItemHeaderControllers,
    TodoListItemHeaderInfo,
    BaseControllerButton,
  },

  props: {
    star: { type: Boolean, default: false },
    done: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    remove: { type: Boolean, default: false },
  },

  data: () => ({
    controllerOpen: false,
  }),

  methods: {
    changeController(name, value) {
      console.log(name, value)
    },

    changeControllerOpen(value) {
      this.controllerOpen = value
    },
  },
}
</script>

<style scoped>
.root {
  height: 100%;
  display: flex;
}

.header {
  flex: 4;
}

.controllerButton {
  flex: 1;
}
</style>
