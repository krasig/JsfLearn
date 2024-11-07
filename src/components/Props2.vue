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
  <input v-bind:value="kgtext" />
</template>

<style scoped>

</style>