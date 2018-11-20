<template>
  <div class="root">
    <img class="icon" :src="require('../assets/icons/drag.svg')" />
    <span v-if="createdBy" class="text first">
      CRT BY <span class="functor">{{ createdByUpper }}</span>
    </span>
    <span v-if="doneBy" class="text">|</span>
    <span v-if="doneBy" class="text">
      DONE BY <span class="functor">{{ doneByUpper }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoListItemHeaderInfo',

  props: {
    createdBy: { type: String, default: '' },
    doneBy: { type: String, default: '' },
  },

  computed: {
    doneByUpper() {
      return this.doneBy.toUpperCase()
    },
    createdByUpper() {
      return this.createdBy.toUpperCase()
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
