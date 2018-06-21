<template>
  <div
    @click="click"
    :class="[value ? $style.checked : $style.checkbox, 'noselect']"
  >
    <transition name="number-fade">
      <div :class="[(itemIndex+1<10) ? $style.itemIndexSingleDigit :
                    (itemIndex+1<100) ? $style.itemIndexDoubleDigit :
                    $style.itemIndexTripleDigit, 'noselect']"
      >
        {{itemIndex+1}}
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'Checkbox',

  props: ['value','itemIndex'],

  methods: {
    click: function() { 
      this.$emit('click', !this.value);
    }
  },
}
</script>


<style module>
.checkbox {
  width: 18px;
  height: 18px;
  padding: 5px;
  font-size: 12px;
  border-radius: 12px;
  margin-right: 5px;
  color: #808080;
  font-weight: bold;
  border: 1px #9CCC65 solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content:space-around;
}

.checked {
  composes: checkbox;
  background: #9CCC65;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content:space-around;
}

</style>
