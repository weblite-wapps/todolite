<template>
<div :class="$style['input-root']">
  <!-- Add to do input -->
  <textarea
    type="text"
    placeholder="Add a todo"
    :class="$style['input']"
    :value="value"
    @input="onChange"
    @keyup.enter.exact="onClick"
  />

  <transition name="fade">
    <i
      :class="$style['plus-sign']"
      @click="onClick"
      v-show="valueExist"
    >
      {{ editId ? 'edit' : 'add' }}
    </i>
  </transition>
</div>
</template>


<script>
export default {
  name: 'TodoInput',

  props: {
    edit: Object,
  },

  data: () => ({
    title: '',
    editId: '',
    editTitle: '',
  }),

  watch: {
    edit(edit) {
      if (!edit) return null;
      this.editId = edit.id;
      this.editTitle = edit.title;
    },
  },

  computed: {
    value() { return this.editId ? this.editTitle : this.title},

    valueExist() { return (this.editId && this.editTitle) || (!this.editId && this.title) }

  },

  methods: {
    onChange({ target: { value } }) {
      if (this.editId) this.editTitle = value
      else {
        this.title = value
      }
    },


    onClick() {
      if (!this.valueExist) return null;
      this.editId ? this.onEdit() : this.onAdd()
    },

    onAdd() {
      this.title = this.title.substring(0, this.title.length - 1)
      if(this.title !== '') this.$emit('add', this.title)
      this.title = ''
    },

    onEdit() {
      this.editTitle = this.editTitle.substring(0, this.editTitle.length - 1)
      if(this.editTitle !== '') this.$emit('edit', { id: this.editId, title: this.editTitle })
      this.editTitle = ''
      this.editId = ''
    }
  },
}
</script>


<style module>
.input-root {
  display: flex;
  flex-direction: row;
  align-items: flex-basis;
  border-top: 1px #E0E0E0 solid;
}

.input {
  font-size: 17px;
  outline: none;
  resize: none;
  width: 100%;
  border: none;
  padding-left: 10px;
  padding-top: 10px;
  text-align-all: center;
  overflow: hidden;
}

.plus-sign {
  border: none;
  align-self: center;
}
</style>
