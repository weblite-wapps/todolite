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
      <i
        class="material-icons"
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

    props: ['edit'],

    data: () => ({
      title: '',
      editId: '',
      editTitle: '',
    }),

    watch: {
      edit: function(edit) {
        if (!edit) return
        this.editId = edit.id
        this.editTitle = edit.title
      },
    },

    computed: {
      value: function() { return this.editId ? this.editTitle : this.title },
      valueExist: function() {
        return (this.editId && this.editTitle) || (!this.editId && this.title)
      },
    },

    methods: {
      onChange: function(e) {
        if (this.editId) this.editTitle = e.target.value
        else this.title = e.target.value
      },

      onClick: function() {
        if (!this.valueExist) return
        this.editId ? this.onEdit() : this.onAdd()
      },

      onAdd: function() {
        this.$emit('add', this.title)
        this.title = ''
      },

      onEdit: function() {
        const that = this
        this.$emit('edit', { id: this.editId, title: this.editTitle })
        this.editTitle = ''
        setTimeout(function () { that.editId = '' }, 900)
      }
    },
  }
</script>


<style module>
  .input-root {
    width: 100%;
    height: 60px;
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
