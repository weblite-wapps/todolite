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
          :created_at="created_at"
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
// components
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
    created_at: { type: String, default: '1 May | 7:59 AM' },
    functor: { type: String, default: '' },
    creator: { type: String, default: '' },
    vit: { type: Boolean, default: false },
    id: { type: Number, require: true },
    editable: { type: Boolean, default: false },
    controllerOpen: { type: Boolean, default: false },
    toggleEditable: { type: Function, required: true },
    changeControllerOpen: { type: Function, required: true },
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
