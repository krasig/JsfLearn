<script setup>

const title=' KG Title Text';
const subtitle=' KG SubTitle Text';
const items=['Item1','Item2','Item3'];

</script>



<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <ul>
      <li>{{items[0]}}</li>
      <li>{{items[1]}}</li>
      <li>{{items[2]}}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/typography';

</style>
