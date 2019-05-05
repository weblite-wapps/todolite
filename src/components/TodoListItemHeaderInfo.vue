<template>
  <div class="root noselect">
    <img class="drag-icon" :src="require('../assets/icons/drag.svg')" />
    
    <p class="time">{{ created_at }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoListItemHeaderInfo',

  props: {
    created_at: { type: String, default: '' },
    creator: { type: String, default: '' },
    functor: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';

.root {
  height: 100%;
  display: flex;
  align-items: center;
}

.drag-icon {
  width: 23px;
  margin-left: 12px;
  cursor: move;
}

.time {
  padding-left: 15px;
  font-size: 16px;
  font-weight: $font-weight-normal;
  color: $font-color-dark-secondary;
}
</style>
