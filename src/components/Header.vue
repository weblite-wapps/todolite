<template>
  <div :class="$style['root']">
    <!-- Title -->
    <transition name="number-fade">
      <span 
        v-if="!searchTextboxShowCondition" 
        :class="$style['title']"
      >
        {{ title }}
      </span>

    </transition>
    
    <!-- Search bar -->
    <transition name="number-fade">
      <input 
        @keyup="sendFilterSettings"
        v-model="query"
        v-if="searchTextboxShowCondition"
        :class="$style['search-input']"
        type="text"
        placeholder="Seach here"
      >
    </transition>

    <!-- Filter Field-->
    <div :class="$style['all-filters']">
        <transition name="number-fade">
          <a 
            v-if="!filterPossibilitiesShowCondition"
            :class="$style['filter-icon']"
            @click="reverseFilterPossibilitiesShowCondition"
          >
            {{whichTodosAreShown}}
          </a>
        </transition>

        <!-- All Done Undone -->
        <!-- key is now required in Vue -->
        <div v-for="(filter, index) in filters" :key='index'>
          <transition name="number-fade">
            <a 
              v-if="filterPossibilitiesShowCondition"
              :class="$style['filter-icon']"
              @click="switchFilterTo(filter)"
            >
              {{filter}}
            </a>
          </transition>        
        </div>
        
        <!-- X and Search-icon -->
        <i 
          v-if="!searchTextboxShowCondition" 
          :class="$style['search-icon']" 
          @click="reverseSearchTextboxShowCondition"
        >
          search
        </i>
        <i 
          v-if="searchTextboxShowCondition" 
          :class="$style['search-icon']" 
          @click="closeSearchBox"
        >
          close
        </i>

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
    },

    data() {
      return {
        searchTextboxShowCondition : false,
        filterPossibilitiesShowCondition : false,
        whichTodosAreShown: 'All',
        query:'',
        filters: ['All', 'Done', 'Undone'],
      }
    },

    methods: {
      closeSearchBox: function() {
        this.query=''
        this.reverseSearchTextboxShowCondition()
        this.sendFilterSettings()
      },

      reverseSearchTextboxShowCondition: function() {
        this.searchTextboxShowCondition =! this.searchTextboxShowCondition
        if(this.searchTextboxShowCondition === true) {
          this.filterPossibilitiesShowCondition = false
        }
      },

      reverseFilterPossibilitiesShowCondition: function() {
        this.filterPossibilitiesShowCondition=!this.filterPossibilitiesShowCondition
        if(this.filterPossibilitiesShowCondition === true) {
          this.searchTextboxShowCondition = false
        }
      },

      switchFilterTo: function(value) {
        this.whichTodosAreShown = value
        this.filterPossibilitiesShowCondition = false
        this.sendFilterSettings()
      },

      sendFilterSettings: function() {
        bus.$emit('APPLY_SETTING', R.pick(['query', 'whichTodosAreShown'], this))
      },
    }
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

  /* search icon and close icon */
  .search-icon {
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    padding-right: 10px;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
  }


  .search-icon:hover {
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.3);
    padding-left: 5px;
  }/* End search icon and close icon */


  .filter-icon {
    color: white;
    padding-right: 7px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }


  /* Search_Box Style */
  .search-input {
    width: 100px;
    font-size: 18px;
    margin-left: 20px;
    border: 0px;
    color: white;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.4);  
    border-bottom: 2px solid white;
    background-color: transparent;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }

  .search-input:focus {
    outline-color: transparent;
    width: 60%;
  }

  .search-input::placeholder {
    color: white;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.4);  
  } /* End Search_Box Style */

  .all-filters{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2px;
  }
</style>
