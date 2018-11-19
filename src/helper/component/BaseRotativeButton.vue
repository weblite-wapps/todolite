<template>
  <button class="button" @click="click">
    <svg :class="`${mode}-icon`" height="20" width="20">
      <line class="icon-line" x1="0" y1="10" x2="20" y2="10" />
      <line class="icon-line" x1="10" y1="0" x2="10" y2="20" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'BaseRotativeButton',

  props: {
    mode: {
      type: String,
      default: 'add',
      validator: value => ~['add', 'close'].indexOf(value),
    },
  },

  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.button {
  padding: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #616161;
  outline: none;
  cursor: pointer;
}

.icon-line {
  stroke: #ffffff;
  stroke-width: 4;
}

.add-icon {
  transition: transform 0.5s;
}

.close-icon {
  transform: rotate(135deg);
  transition: transform 0.5s;
}
</style>
