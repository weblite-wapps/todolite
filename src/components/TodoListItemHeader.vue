<template>
  <div class="root">
    <div class="header">
      <!-- controllers -->
      <transition name="fade">
        <TodoListItemHeaderControllers
          v-if="controllerOpen"
          key="controllers"
          :id="id"
          :functor="functor"
          :creator="creator"
          :vit="vit"
          :editable="editable"
          :toggleEditable="toggleEditable"
        />
      </transition>
      <transition name="fade">
        <TodoListItemHeaderInfo
          v-if="!controllerOpen"
          key="info"
          :functor="functor"
          :creator="creator"
        />
      </transition>
    </div>

    <BaseControllerButton
      class="controller-button"
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

<style lang="scss" scoped>
.root {
  height: 100%;
  width: 100%;
  position: relative;
}

.header {
  left: 0;
  width: 80%;
  height: 100%;
  position: absolute;
}

.controller-button {
  right: 0;
  width: 20%;
  height: 100%;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
