<script setup>
import axios from 'axios';

const fetchAdvice = () => {
  return axios.get('https://api.adviceslip.com/advice').
  then((response)=>{
    console.log('-------------------------')
    console.log(response);
    console.log('-------------------------')
    console.log(response.data)
  });
}

</script>

<template>
<button @click="fetchAdvice">Fetch Advice</button>
</template>

<style scoped>

</style>
