<template>
  <div class="root noselect">
    <span v-if="creator" :title="creatorUpper" class="text">
      ADD BY <span class="functor">{{ creatorUpper }}</span>
    </span>
    <span v-if="functor" class="text">|</span>
    <span v-if="functor" :title="functorUpper" class="text">
      DONE BY <span class="functor">{{ functorUpper }}</span>
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

.icon {
  width: 23px;
  margin-left: 12px;
}

.text {
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: $font-color-light-secondary;
}

.text:first-of-type {
  margin-left: 8px;
}

.functor {
  color: $font-color-dark-secondary;
}
</style>
