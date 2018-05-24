<template>
<div :class="$style['input-root']">
  <textarea
    :style="{height: height}"
    type="text"
    placeholder="Add Todo ..."
    :class="$style.input"
    :value="value"
    @input="onChange"
    @keyup.enter="onClick"
  />

  <transition name="fade">
    <i :class="$style['plus-sign']" @click="onClick" v-show="valueExist">{{ editId ? 'edit' : 'add' }}</i>
  </transition>
</div>
</template>


<script>
export default {
  name: 'TodoInput',

  props: ['edit'],

  data: () => ({
    title: '',
    editId: '',
    editTitle: '',
    height:40+'px',
  }),

  watch: {
    edit(edit) {
      if (!edit) return null
      this.editId = edit.id
      this.editTitle = edit.title
    },
  },

  computed: {
    value() { return this.editId ? this.editTitle : this.title },

    valueExist() {
      return (this.editId && this.editTitle) || (!this.editId && this.title)
    },
  },

  methods: {
    onChange({ target: { value } }) {
      if (this.editId) this.editTitle = value
      else this.title = value
      this.autoResize()
    },

    autoResize(){
      this.height=20+(parseInt(this.title.length/30)+1) * 20 +'px'
    },

    onClick() {
      if (!this.valueExist) return null
      this.editId ? this.onEdit() : this.onAdd()
    },

    onAdd() {
      this.$emit('add', this.title)
      this.title = ''
    },

    onEdit() {
      this.$emit('edit', { id: this.editId, title: this.editTitle })
      this.editTitle = ''
      this.editId = ''
    }
  },
}
</script>


<style module>
.input-root {
  width: 100%;
  padding: 1px;
  border-top: 1px #E0E0E0 solid;
  display: flex;
  padding-left: 15px;
}

.input {
  height: 100%;
  width: 280px;
  font-size: 17px;
  border: none;
  outline: none;
  padding: auto;
}

.plus-sign {
  padding-top: 10px;
}
</style>
