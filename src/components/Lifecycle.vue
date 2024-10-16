<script setup>

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

const list = ref(['One', 'Two', 'Tree', 'Four','five','six']);

const deleteItem=(item)=>{
  list.value=list.value.filter(i=>i!==item)
}

onBeforeMount(()=>{
  alert('onBeforeMount called')
})

onMounted(()=>{
  alert('onMounted called')
})

onBeforeUpdate(()=>{
  alert('onBeforeUpdate')
})

onUpdated(()=>{
  alert('onUdated')
})

onBeforeUnmount(()=>{
  alert('onBeforeUnmount')
})

onUnmounted(()=>{
  alert('onUnmounted')
})

</script>

<template>

  <h3>LofeCicle</h3>
  <ul>
    <li v-for="(item,index) in list" :key="index">
      {{ item }} <button @click="deleteItem(item)">DeleteIt</button>
    </li>
  </ul>

</template>


<style scoped>

</style>
