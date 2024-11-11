<script setup>
import {useGreeter} from "@/composables/greeter.js";
import {onMounted} from "vue";

const {greet,debug} = useGreeter();

const myObj={
  name:"local object",
  age:20
}



onMounted(() => {
  console.log('Component has been mounted');
   console.log(debug({
     name:"local object",
     age:20
   }));
})
</script>

<template>

  this is form comosables: {{greet('Alabala')}}
</template>

<style scoped>

</style>
