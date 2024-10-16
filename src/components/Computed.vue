<script setup>

import {computed, ref} from "vue";

const name=ref('');

const post= {
  fields: {
    author: {
      firstName: 'John',
          lastName: 'Doe'
    },
    entries: [{
      title: "Entry 1",
      content: "Entry 1's content",
      featured: true
    },
      {
        title: "Entry 2",
        content: "Entry 2's content",
        featured: false
      }]
  }
}


const error= computed(()=>{
  return name.value?'':'Name is required';// `Name is ${name.value}`
})

const fullName=computed(()=>{
  //return `${post.fields.author.firstName} ${post.fields.author.lastName}`;

  const {firstName,lastName}=post.fields.author;
  return `${firstName} - ${lastName}`;
})

</script>

<template>

  <input v-model="name">
{{error}}
  <hr/>
  {{fullName}}
</template>

<style scoped>

</style>
