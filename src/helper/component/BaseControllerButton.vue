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

<style lang="scss" scoped>
@import '../../helper/style/_variable.scss';
@import '../../helper/style/_mixin.scss';

.button {
  z-index: 1;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.button:before {
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%;
  z-index: -1;
  position: absolute;
  transition: left 0.35s ease;
  background-color: $color-secondary;
}

.button:hover:before {
  left: 0;
}

.button-selected {
  background-color: $color-secondary;
}

.dot {
  @include flex-center();

  width: 10px;
  height: 10px;
  margin: 1.5px;
  border-radius: 10px;
}

.first {
  background-color: $color-vit;
}

.second {
  background-color: $color-trash;
}

.third {
  background-color: $color-done;
}

.dotInDot {
  border-radius: 10px;
  background-color: #ffffff;
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
