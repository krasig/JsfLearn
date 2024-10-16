<script setup>

import {computed, ref} from "vue";

const count=ref(-1);
const divided=ref(0);

const incrementOne=computed({
  get(){
    console.log("get")
  return Number(count.value)+1;
  },
  set(newValue){
    console.log("set");
    count.value=newValue-1;
    divided.value=newValue/2;

    }

  })

</script>

<template>
<h3>Computed Setter and getter</h3>
  <input v-model="incrementOne"/>
  {{count}}:{{divided}}
</template>

<style scoped>

</style>
