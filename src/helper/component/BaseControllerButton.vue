<template>
  <div
    @mouseover="changeHover(true)"
    @mouseout="changeHover(false)"
    :class="getClasses('button')"
    @click="click"
  >
    <div :class="getClasses('dot', 'first')">
      <div :class="getClasses('dotInDot')"></div>
    </div>
    <div :class="getClasses('dot', 'second')">
      <div :class="getClasses('dotInDot')"></div>
    </div>
    <div :class="getClasses('dot', 'third')">
      <div :class="getClasses('dotInDot')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseControllerButton',

  props: { value: { type: Boolean, default: false } },

  data: () => ({
    hover: false,
  }),

  methods: {
    click() {
      this.$emit('change', !this.value)
    },

    getClasses(name, ...otherClasses) {
      return [
        name,
        this.value ? `${name}-selected` : '',
        this.hover && !this.value ? `${name}-hover` : '',
        ...otherClasses,
      ]
    },

    changeHover(value) {
      this.hover = value
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
  transition: left 0.35s ease;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.dotInDot {
  border-radius: 10px;
  background-color: white;
}

@keyframes dotInDot {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 10px;
    height: 10px;
  }
}

.dotInDot-hover {
  animation: dotInDot 0.15s ease;
  animation-fill-mode: forwards;
}

.first .dotInDot-hover {
  animation-delay: 0.2s;
}

.second .dotInDot-hover {
  animation-delay: 0.1s;
}

.third .dotInDot-hover {
  animation-delay: 0s;
}

.dotInDot-selected {
  width: 10px;
  height: 10px;
}
</style>
