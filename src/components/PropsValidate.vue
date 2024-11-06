<script setup>

import {computed} from "vue";

const props = defineProps({
  items:{
    type:Number,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  config:{
    type:Object,
    required:true,
    validator:(value)=>{
      return typeof value.items==='number' && typeof value.content ==='string'
    }
  }

})

const repetitions = computed(()=>{
  return Array.from({length:props.config.items});
})



</script>

<template>
items={{items}}, content={{content}}
  Config:items-{{config.items}},content={{config.content}}

  <div>
  <span v-for="(item,index) in repetitions" :key="index">
      --{{config.content}}
  </span>
  </div>


</template>

<style scoped>

</style>