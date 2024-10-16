<script setup>

import {ref, watch} from "vue";

const discount = ref(5);
const oldDiscount = ref(0);

const setDiscount = () => {
  discount.value -= 5;
}
watch(discount, async (newValue, oldValue) => {
  oldDiscount.value = oldValue;
});
</script>

<template>
  Discount:{{ discount }}&nbsp;<button v-on:click="setDiscount">ClickMe</button>
  <br/>
  OldDiscount:{{ oldDiscount }}
</template>

<style scoped>.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
}

button {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}</style>
