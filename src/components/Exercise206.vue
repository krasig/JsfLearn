<script setup>
import {computed, onBeforeMount, ref, watch} from "vue";

const frameworkList = ref(['Vue', 'React', 'Backbone', 'Ember', 'Knockout', 'jQuery', 'Angular',]);
const inputStr = ref('');
const inputStr2 = ref('');
const inputStr3 = ref('');
const methodFilterList = ref([]);
const watchFilterList = ref([]);

const searchMethod = () => {
  console.log(inputStr.value);
  methodFilterList.value = frameworkList.value.filter(item => item.toLowerCase().includes(inputStr.value.toLowerCase()));
}

const computedList = computed(() => {
  return frameworkList.value.filter(item => item.toLowerCase().includes(inputStr2.value.toLowerCase()));
    }
)

watch(inputStr3,async (newValue) => {
  watchFilterList.value = frameworkList.value.filter(item => item.toLowerCase().includes(newValue.toLowerCase()));
},{immediate:true});

// Hooks
onBeforeMount(() => {
      searchMethod();
    }
)

</script>

<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>
    <div class="col">
      <input v-model="inputStr" placeholder="Search method" autocomplete="off" @keyup="searchMethod">
      <ul>
        <li v-for="(item,index) in methodFilterList" :kei="index">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="col">
      <input v-model="inputStr2" placeholder="Search with computed" autocomplete="off">
      <ul>
        <li v-for="(item,index) in computedList" :kei="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="col">
      <input v-model="inputStr3" placeholder="Search with wacth" autocomplete="off">
      <ul>
        <li v-for="(item,index) in watchFilterList" :kei="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
  <hr/>


  <hr/>

</template>

<style scoped>
.container {
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
