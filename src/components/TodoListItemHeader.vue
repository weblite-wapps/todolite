<template>
  <div class="root">
    <div class="header">
      <!-- controllers -->
      <TodoListItemHeaderControllers
        v-if="controllerOpen"
        :id="id"
        :functor="functor"
        :vit="vit"
      />
      <TodoListItemHeaderInfo v-else :functor="functor" :creator="creator" />
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
    functor: { type: String, default: '' },
    creator: { type: String, default: '' },
    vit: { type: Boolean, default: false },
    id: { type: Number, require: true },
  },

  data: () => ({
    controllerOpen: false,
  }),

  methods: {
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
