<template>
  <div> 
    <template v-if="controllerOpen">
      <p class="todo-info">Creator: {{ creator  }}</p>
      <p v-if="functor" class="todo-info">Done By: {{ functor  }}</p>
    </template> 

    <BaseEditable
      class="todo-content"
      :content="text"
      :editable="editable"
      @submit="$emit('submit', $event)"
    />
  </div>
</template>

<script>
// components
import BaseEditable from '../helper/component/BaseEditable.vue'

export default {
  name: 'TodoListItemContent',

  components: {
    BaseEditable,
  },

  props: {
    controllerOpen: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    text: { type: String, required: true  },
    functor: { type: String, required: true  },
    creator: { type: String, required: true  },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.todo-info {
  margin-top: 2px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  font-weight: $font-weight-normal;
  background-color: $color-primary;
  color: $font-color-dark-secondary;
}

.todo-content {
  @include reset();

  width: 100%; 
  padding: 10px;
  margin-top: 2px;
  font-size: 16px;
  text-align: -webkit-auto;
  word-wrap: break-word;
  box-sizing: border-box;
  border-bottom-right-radius: 20px;
  font-weight: $font-weight-normal;
  background-color: $color-primary;
}
</style>
