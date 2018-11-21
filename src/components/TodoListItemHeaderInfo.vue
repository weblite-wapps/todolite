<template>
  <div class="root">
    <img class="icon" :src="require('../assets/icons/drag.svg')" />
    <span v-if="creator" class="text first">
      CRT BY <span class="functor">{{ creatorUpper }}</span>
    </span>
    <span v-if="functor" class="text">|</span>
    <span v-if="functor" class="text">
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

<style scoped>
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
  color: #b7b7b7;
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
}

.text:first-of-type {
  margin-left: 8px;
}

.functor {
  color: #727272;
}
</style>
