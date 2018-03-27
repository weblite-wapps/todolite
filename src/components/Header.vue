<template>
<div :class="$style['header-root']">
  <span :class="$style['title']">{{ title }}</span>
  <IconButton
    icon="filter_list"
    :class="['material-icons', $style.filter]"
    @click="openSetting"
  />
</div>
</template>


<script>
import IconButton from '../helper/component/IconButton'
import bus from '../helper/function/bus'

export default {
  name: 'Header',

  components: { IconButton },

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
  width: 22px;
  height: 22px;
  font-size: 23px;
  cursor: pointer;
  border-radius: 100px;
  border: 1px white solid;
  font-weight: bold;
  padding: 5px;
}
</style>
