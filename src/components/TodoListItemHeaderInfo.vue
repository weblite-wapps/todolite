<template>
  <div class="root noselect">
    <img class="drag-icon" :src="require('../assets/icons/drag.svg')" />

    <span v-if="creator" :title="creatorUpper" class="text"> 
      <svg height="14" width="14">
        <line class="icon-line" x1="0" y1="7" x2="14" y2="7" />
        <line class="icon-line" x1="7" y1="0" x2="7" y2="14" />
      </svg>
      <span class="functor">{{ creatorUpper }}</span>
    </span>

    <span v-if="functor" class="text">|</span>
    
    <span v-if="functor" :title="functorUpper" class="text">
      <img :src="require(`../assets/icons/done.svg`)" class="icon" />
      <span class="functor">{{ functorUpper }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoListItemHeaderInfo',

  props: {
    creator: { type: String, default: '' },
    functor: { type: String, default: '' },
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

.text {
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: $font-color-light-secondary;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text:first-of-type {
  margin-left: 8px;
}

.functor {
  color: $font-color-dark-secondary;
  margin-left: 5px;
}

.icon {
  width: 18px;
}

.icon-line {
  stroke: #ffffff;
  stroke-width: 4;
}
</style>
