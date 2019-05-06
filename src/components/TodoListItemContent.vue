<template>
  <div>
    <slide-up-down :active="controllerOpen" :duration="300"> 
      <template v-if="controllerOpen">
        <p class="todo-info noselect">
          <span v-if="creator" :title="creatorUpper" class="text">
            ADD BY <span class="functor">{{ creatorUpper }}</span>
          </span>
          <span v-if="functor" :title="functorUpper" class="text">
            | DONE BY <span class="functor">{{ functorUpper }}</span>
          </span>
        </p>
      </template>
    </slide-up-down>

    <BaseEditable
      class="todo-content"
      :content="text"
      :editable="editable"
      @submit="$emit('submit', $event)"
    />
  </div>
</template>

<script>
// modules
import SlideUpDown from 'vue-slide-up-down'
// components
import BaseEditable from '../helper/component/BaseEditable.vue'

export default {
  name: 'TodoListItemContent',

  components: {
    BaseEditable,
    'slide-up-down': SlideUpDown,
  },

  props: {
    controllerOpen: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    text: { type: String, required: true  },
    functor: { type: String, required: true  },
    creator: { type: String, required: true  },
  },

  computed: {
    functorUpper() {
      return this.functor.toUpperCase()
    },
    creatorUpper() {
      return this.creator.toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.todo-info {
  margin-top: 2px;
  padding: 10px;
  font-size: $font-size-small;
  box-sizing: border-box; 
  font-weight: $font-weight-normal;
  background-color: $color-primary;
  color: $font-color-dark-secondary;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text {
  font-size: 12px;
  font-weight: 600;
  color: $font-color-light-secondary;
}

.functor {
  color: $font-color-dark-secondary;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.todo-content {
  @include reset();

  width: 100%; 
  padding: 10px;
  margin-top: 2px;
  font-size: $font-size-small;
  text-align: -webkit-auto;
  word-wrap: break-word;
  box-sizing: border-box;
  border-bottom-right-radius: 20px;
  font-weight: $font-weight-normal;
  background-color: $color-primary;
}
</style>
