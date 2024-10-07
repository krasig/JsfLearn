<template>
  <h2>V-FOR</h2>
  <div>
    <h3 v-for="(item, index) in 3" :key="index">number-item:{{item}}</h3>
  </div>
  <h3> V-for Objects</h3>
  <ul>
    <li v-for="(item,index) in people" :key="index">
      name:{{item.name}} -- Gender:{{item.gender}} -- Year:{{item.year}}
    </li>
  </ul>
  <h3> V-for Maps</h3>
    <ul>
      <li v-for="(value, key) in exampleMap" :key="key">
        key:{{key}} -- value:{{value}}
      </li>
    </ul>
</template>

<script setup>

  const people = [
  {name: "Alice", gender: "Female", year: 1990},
  {name: "Bob", gender: "Male", year: 1985},
  {name: "Carol", gender: "Female", year: 1995},
  {name: "Dave", gender: "Male", year: 1988},
  ];


  // Example map of strings
  const exampleMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
  ]);
</script>

<style lang="css" scoped>

</style>