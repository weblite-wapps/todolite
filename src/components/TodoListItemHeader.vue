<template>
  <div class="root">
    <div class="header">
      <!-- controllers -->
      <TodoListItemHeaderControllers
        v-if="controllerOpen"
        key="controllers"
        :id="id"
        :functor="functor"
        :vit="vit"
        :editable="editable"
        :toggleEditable="toggleEditable"
      />
      <TodoListItemHeaderInfo
        v-else
        key="info"
        :functor="functor"
        :creator="creator"
      />
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
    editable: { type: Boolean, default: false },
    toggleEditable: { type: Function, required: true },
  },

  data: () => ({
    controllerOpen: false,
  }),

  methods: {
    changeControllerOpen(value) {
      this.toggleEditable(false)
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
