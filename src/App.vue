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
import {computed, ref} from "vue";
import PropsValidate from "@/components/PropsValidate.vue";
import Countable from "@/components/Countable.vue";
import Props2 from "@/components/Props2.vue";
import Composalbe from "@/components/Composalbe.vue";

const input=ref(null);

const config={
  items:3,
  content:"some content",
}

const testprop=ref('aaaa');

const inputEvent=(e)=>{
  console.log(e);
  testprop.value=e;
}
</script>

<template>
  <main>
    <Composalbe/>
<!--   <input v-model="testprop" />{{testprop}}
   <Props2 :kgtext="testprop" v-on:myInputEvent="inputEvent"/>-->
<!--    <countable/> -->
<!--    <props greeting="Hello" :who="input"/>-->
<!--    <props-validate content="aaaa" :items="1" :config="config"/>-->
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
