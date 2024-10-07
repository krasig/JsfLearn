<template>
  <div>
   color is: {{isUpperCase?color.toUpperCase():color}}
  </div>

    <div >
      <h1 v-once v-text="myTest"></h1>

    </div>
  <h2 v-html="myHtml"></h2>
  <a v-bind:href="myLink" >linkkk</a>
  <h3 v-if="isUpperCase">tue</h3>
  <h3 v-else>false</h3>
  <input v-model="myModel">
  <h3>{{myModel}}</h3>

  <hr/>
  <h3 v-for="(item,index) in stringArray" :key="'aaa'+index">key:{{index}}-{{item}}</h3>
</template>

<script setup>
import {ref} from "vue";

const c1=3
const    color= 'red'
const isUpperCase=true
const     myTest='testttttt'
const myHtml="ala <i>bala</i></br> aaa"
const myLink="https://dir.bg"
const myModel=ref('null')

const stringArray = ['aaa', 'bbb', 'ccc'];
// export default {
//   data() {
//     return {
//       name: 'aaaaa',
//
//     }
//   }
// }
</script>

<style lang="css" scoped>

</style>
