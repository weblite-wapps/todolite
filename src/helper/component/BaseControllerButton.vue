<template>
  <div :class="getClasses('button')" @click="click">
    <div :class="getClasses('dot', 'first')"></div>
    <div :class="getClasses('dot', 'second')"></div>
    <div :class="getClasses('dot', 'third')"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseControllerButton',

  data: () => ({ value: false }),

  methods: {
    click() {
      this.value = !this.value

      this.$emit('change', this.value)
    },

    getClasses(name, ...otherClasses) {
      return [name, ...otherClasses, this.value ? `${name}-selected` : '']
    },
  },
}
</script>

<style scoped>
.button {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.button:before {
  content: '';
  position: absolute;
  background: #0096e5;
  bottom: 0;
  right: 0;
  left: 100%;
  top: 0;
  z-index: -1;
  transition: left 0.2s ease;
}

.button:hover:before {
  left: 0;
}

.button-selected {
  background: #0096e5;
}

.dot {
  margin: 1.5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
}

.first {
  background-color: #ffae02;
}

.second {
  background-color: #da4445;
}

.third {
  background-color: #60bf03;
}

.dot-selected {
  background-color: #ffffff;
}
</style>
