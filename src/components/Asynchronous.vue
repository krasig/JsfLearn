<script setup>
import axios from 'axios';
import {computed, ref} from "vue";
const axiosResponse=ref({});

const loading=ref(false);
const fetchAdvice = () => {
   axios.get('https://api.adviceslip.com/advice').then((response) => {
    console.log('-------------------------')
    console.log(response);
    console.log('-------------------------')
    axiosResponse.value=response.data;
    console.log(response.data)
    console.log(axiosResponse.value.slip.id)
  });
}

const quoted=computed(()=>{
  return axiosResponse.value && axiosResponse.value.slip?axiosResponse.value.slip.advice:null;
})
</script>

<template>
  <div class="container">
    <h1>Asynchronous</h1>
    <button @click="fetchAdvice">{{loading?'Loading...':'Fetch Advice'}}</button>
    {{axiosResponse}}:

    <br/>
Quote:{{quoted}}
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

blockquote {
  position: relative;
  width: 100%;
  margin: 50px auto;

  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}


</style>
