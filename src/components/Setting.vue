<template>
<div
  :class="$style.root"
  @click.self="changeOpen(false)"
  v-if="open"
>
  <div :class="$style.panel">
    doing:
  </div>
</div>
</template>


<script>
export default {
  name: 'Setting',

  props: ['options'],

  data: () => ({
    open: true,
  }),

  methods: {
    changeOpen(value) { this.open = value },
  },
}
</script>


<style module>
.root {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: .9;
}

.panel {
  width: 60%;
  padding: 10px;
  background-color: white;
  box-shadow: 1px;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
}
</style>
