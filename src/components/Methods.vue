<script setup>

import {ref} from "vue";

const counter = ref(1);

const myMethod= ()=> {
  console.log("Method was clicked!!!"+counter.value);
  counter.value++;
}

</script>

<template>
<h3>Mthods</h3>
  <button id="click-me" v-on:click="myMethod">ClickMe {{counter}}</button>
</template>

<style scoped>

</style>
