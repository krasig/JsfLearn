<script setup>
import {ref} from "vue";

const frameworkList = ref(['Vue', 'React', 'Backbone', 'Ember', 'Knockout', 'jQuery', 'Angular',]);
const inputStr = ref('');
const methodFilterList = ref([]);
</script>

<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>
    <div class="col">

    </div>
  </div>
</template>

<style scoped>.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.col {
  width: 33%;
  height: 100%;
  float: left;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}</style>
