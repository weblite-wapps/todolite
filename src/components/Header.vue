<template>
<div :class="$style['header-root']">
  <span :class="$style['title']">{{ title }}</span>
</div>
</template>


<script>
  export default {
    name: 'Header',

    props: ['title'],
  }
</script>


<style module>
.header-root {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #E0E0E0;
}

.title {
  margin-left: 15px;
  font-size: 22px;
  color: white;
}
</style>
