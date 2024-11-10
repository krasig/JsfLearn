<script setup>

const props = defineProps({
  kgtext: {
    type: String,
    default: 'kg'
  }
})
</script>

<template>
{{kgtext}}
  <input v-bind:value="kgtext" v-on:keyup="$emit('myInputEvent', $event.target.value)"/>
</template>

<style scoped>

</style>