<template>
<div :class="$style['input-root']">
  <textarea
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

  props: {
    edit: String,
  },

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
      this.title=this.title.substring(0, this.title.length - 1)
      if(this.title!=='')
      {
        this.$emit('add', this.title)
      }
      this.title = ''
    },

    onEdit() {
      this.editTitle=this.editTitle.substring(0, this.editTitle.length - 1)
      if(this.editTitle !== '')
      {
        this.$emit('edit', { id: this.editId, title: this.editTitle })
      }
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
  width: 300px;
  font-size: 17px;
  border: none;
  outline: none;
  padding: auto;
  resize: none;
}

.plus-sign {
  padding-top: 10px;
}
</style>
