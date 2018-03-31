<template>
<div :class="$style['header-root']">
  <span :class="$style['title']">{{ title }}</span>
  <i :class="$style.filter" @click="openSetting">filter_list</i>
</div>
</template>


<script>
import bus from '../helper/function/bus'

export default {
  name: 'Header',

  props: ['title'],

  methods: {
    openSetting() { bus.$emit('OPEN_SETTING') },
  },
}
</script>


<style module>
.header-root {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9CCC65;
}

.title {
  margin-left: 20px;
  font-size: 22px;
  color: white;
}

.filter {
  color: white;
  margin-right: 20px;
  font-size: 23px;
  cursor: pointer;
  font-weight: bold;
}
</style>
