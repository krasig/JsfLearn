<script setup>

import {onBeforeMount, onBeforeUnmount, onMounted, ref} from "vue";

import Countable from 'countable';
const mytext=ref('');
const count=ref({
  words:11,
  paragraphs:0,
  characters:0
});

onMounted(()=>{
  Countable.on(mytext.value,(counter)=>{
    console.log(counter.words)
    count.value.words=counter.words;
    count.value.paragraphs=counter.paragraphs;
    count.value.characters=counter.characters;
  })
})
onBeforeUnmount(()=>{
  Countable.off(mytext.value);
})

</script>


<template>
  <h2>Countable</h2>
  <textarea ref="mytext" cols="30" rows="7" ></textarea>
  {{mytext}}:{{count.characters}}-{{count.words}}-{{count.paragraphs}}
</template>

<style scoped>

</style>
