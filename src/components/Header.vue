<template>
<div :class="$style['root']">
  <span :class="$style['title']">{{ title }}</span>
  <input @keyup="sendFilterSettings()"
    v-model="query"
    v-if="searchTextboxShowCondition"
    :class="$style['search-input']"
    type="text"
    placeholder="Search..."
    >
  <div>
  <a v-if="!filterPossibilitiesShowCondition"
    :class="$style['filter-icon']"
    @click="reverseFilterPossibilitiesShowCondition()"
    >
    {{whichTodosAreShown}}
  </a>
  <a v-if="filterPossibilitiesShowCondition"
    :class="$style['filter-icon']"
    @click="switchFilterTo('All')"
    >
    All
  </a>
  <a v-if="filterPossibilitiesShowCondition"
    :class="$style['filter-icon']"
    @click="switchFilterTo('Done')"
    >
    Done
  </a>
  <a v-if="filterPossibilitiesShowCondition"
    :class="$style['filter-icon']"
    @click="switchFilterTo('Undone')"
    >
    Undone
  </a>
  <i :class="$style['search-icon']" @click="reverseSearchTextboxShowCondition()">search</i>
  </div>

</div>
</template>


<script>
import bus from '../helper/function/bus'
const { R } = window

export default {
  name: 'Header',

  props:{
    title: String,
  ],

  data(){
    return {
      searchTextboxShowCondition : false,
      filterPossibilitiesShowCondition : false,
      whichTodosAreShown: 'All',
      query:'',
    }
  },

  methods: {
    reverseSearchTextboxShowCondition : function(){
      this.searchTextboxShowCondition=!this.searchTextboxShowCondition
      if(this.searchTextboxShowCondition===true)
      {
        this.filterPossibilitiesShowCondition=false
      }
    },

    reverseFilterPossibilitiesShowCondition : function(){
      this.filterPossibilitiesShowCondition=!this.filterPossibilitiesShowCondition
      if(this.filterPossibilitiesShowCondition===true)
      {
        this.searchTextboxShowCondition=false
      }
    },

    switchFilterTo: function(value){
      this.whichTodosAreShown=value
      this.filterPossibilitiesShowCondition=false
      this.sendFilterSettings()
    },

    sendFilterSettings: function(){
      bus.$emit('APPLY_SETTING', R.pick(['query', 'whichTodosAreShown'], this))
    },
  },

}
</script>


<style module>
.root {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #9CCC65;
}

.title {
  margin-left: 20px;
  font-size: 22px;
  color: white;
}

.search-icon {
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding-right: 10px;
}

.filter-icon {
  color: white;
  padding-right: 10px;
  font-weight: bold;
  font-size: 16px;
 }


</style>
