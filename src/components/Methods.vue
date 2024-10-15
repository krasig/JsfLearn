<script setup>

import {ref} from "vue";

const counter = ref(1);

const myMethod= ()=> {
  console.log("Method was clicked!!!"+counter.value);
  counter.value++;
}

const buttonIndex=ref(null);

const clickedB=(index) =>{
  console.log("Button clicked: " + index);
  buttonIndex.value=index;
}

</script>

<template>
<h3>Mthods</h3>
  <button id="click-me" v-on:click="myMethod">ClickMe {{counter}}</button>

  <p>Clicked button:{{ buttonIndex }}</p>

  <ul>
    <li v-for="(value,index) in 3" :key="index">
      <button @click="clickedB(value)">{{value}}</button>
    </li>
  </ul>
</template>

<style scoped>

</style>
