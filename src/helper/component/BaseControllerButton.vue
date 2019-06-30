<template>
  <div :class="getClasses('button')" @click="click">
    <div :class="getClasses('dot', 'first')">
      <div :class="getClasses('dotInDot')" />
    </div>

    <div :class="getClasses('dot', 'second')">
      <div :class="getClasses('dotInDot')" />
    </div>

    <div :class="getClasses('dot', 'third')">
      <div :class="getClasses('dotInDot')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseControllerButton',

  props: { value: { type: Boolean, default: false } },

  methods: {
    click() {
      this.$emit('change', !this.value)
    },

    getClasses(name, ...otherClasses) {
      return [name, this.value ? `${name}-selected` : '', ...otherClasses]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../helper/style/_variable.scss';
@import '../../helper/style/_mixin.scss';

.button {
  @include flex-center;

  z-index: 1;
  border: none;
  outline: none;
  cursor: pointer;
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
  @include flex-center;

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
  width: 0;
  height: 0;
  border-radius: 10px;
  background-color: #ffffff;
  transition: all 0.15s ease;
}

.dotInDot-selected,
.button:hover .dotInDot {
  width: 100%;
  height: 100%;
}

.third > .dotInDot,
.button:hover > .first > .dotInDot {
  transition-delay: 0.2s;
}

.second > .dotInDot,
.button:hover > .second > .dotInDot {
  transition-delay: 0.1s;
}

.first > .dotInDot,
.button:hover > .third > .dotInDot {
  transition-delay: 0s;
}
</style>
