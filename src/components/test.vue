<template>
  <div>
   color is: {{isUpperCase?color.toUpperCase():color}}
  </div>

    <div >
      <h1 v-once v-text="myTest"></h1>

    </div>
  <h2 v-html="myHtml"></h2>
  <a v-bind:href="myLink" >linkkk</a>
</template>

<script setup>
const c1=3
const    color= 'red'
const isUpperCase=false
const     myTest='testttttt'
const myHtml="ala <i>bala</i></br> aaa"
const myLink="https://dir.bg"
</script>

<style lang="scss" scoped>

</style>
