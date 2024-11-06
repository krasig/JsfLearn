<script setup>

import {ref} from "vue";

const mytext=ref('');


</script>


<template>
  <h2>Countable</h2>
  <textarea v-model="mytext" cols="30" rows="7" ></textarea>
  {{mytext}}
</template>

<style scoped>

</style>