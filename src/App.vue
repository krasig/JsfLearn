<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Myfirstcomponent from "@/components/myfirstcomponent.vue";
import test from "@/components/test.vue";
import vfor from "@/components/vfor.vue";
import Methods from "@/components/Methods.vue";
import Lifecycle from "@/components/Lifecycle.vue";
import Styling from "@/components/Styling.vue";
import Computed from "@/components/Computed.vue";
import ComputedSetGet from "@/components/ComputedSetGet.vue";
import Watcher from "@/components/Watcher.vue";
import Asynchronous from "@/components/Asynchronous.vue";
import Exercise206 from "@/components/Exercise206.vue";
import Props from "@/components/Props.vue";
import {ref} from "vue";

const input=ref(null);


</script>

<template>

<input v-model="input"/>
  <main>
    <props greeting="Hello" :who="input"/>
<!--    <Exercise206/>-->
    <hr/>
<!--    <Asynchronous/>-->
<!--    <ht/>-->
<!--    <Watcher/>-->
<!--    <hr/>-->
<!--    <ComputedSetGet/>-->
<!--    <hr/>-->
<!--    <Computed/>-->
<!--      <hr/>-->
<!--    <Styling/>-->
<!--    <hr/>-->
<!--  <lifecycle/>-->
<!--    <hr/>-->
<!--    <methods/>-->
<!--    <div >-->
<!--      <test />-->
<!--    </div>-->
<!--    <hr/>-->
<!--    <vfor/>-->
  </main>
</template>

<style scoped>
@import "@/styles/global.scss";

</style>
