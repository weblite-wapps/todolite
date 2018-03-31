<template>
<div :class="$style['input-root']">
  <input
    type="text"
    placeholder="add todo ..."
    :class="$style.input"
    :value="value"
    @input="onChange"
    @keyup.enter="onClick"
  />

  <transition name="fade">
    <i @click="onClick" v-show="valueExist"/>{{ editId ? 'edit' : 'add' }}</i>
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
      setTimeout(() => { this.editId = '' }, 900)
    }
  },
}
</script>


<style module>
.input-root {
  width: 100%;
  height: 50px;
  padding: 1px;
  border-top: 1px #E0E0E0 solid;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  height: 100%;
  width: 280px;
  font-size: 17px;
  border: none;
  outline: none;
}
</style>
