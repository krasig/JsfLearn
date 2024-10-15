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

const totalCost=ref(0);
const totalItems=ref(0);

const addToCart=(n)=>{
  totalCost.value+=n;
  totalItems.value++;
}

const formatCurrency=(n)=>{
  return `$${n.toFixed(2)}`
}

</script>

<template>
<h3>Mthods</h3>
  <button id="click-me" v-on:click="myMethod">ClickMe {{counter}}</button>
  <ul>
    <li v-for="(value,index) in 3" :key="index">
      <button @click="clickedB(value)">{{value}}</button>
    </li>
  </ul>
  <p>Clicked button:{{ buttonIndex }}</p>
<hr>
  <h3>Return value</h3>
  Cart:{{totalItems}},{{totalCost}}-{{formatCurrency(totalCost)}}
  <ul>
    <li v-for="(n,index) in 5" :key="index">
       <button v-on:click="addToCart(n)">+{{formatCurrency(n)}}</button>

    </li>
  </ul>
</template>

<style scoped>

</style>
