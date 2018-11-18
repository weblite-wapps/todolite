<template>
  <button
    class="button"
    @click="onClick"
  >
    <svg
      :class="`${mode}-icon`"
      height="30"
      width="30"
    >
      <line
        class="icon-line"
        x1="0"
        y1="15"
        x2="30"
        y2="15"
      />
      <line
        class="icon-line"
        x1="15"
        y1="0"
        x2="15"
        y2="30"
      />
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
        validator: value => ~['add', 'close'].indexOf(value)
      }
    },

    methods: {
      onClick() { this.$emit('click') }
    }
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
    transition: transform .5s;
  }

  .close-icon {
    transform: rotate(490deg);
    transition: transform .5s;
  }
</style>
