<script setup>

const props=defineProps({
      selected: {
        type: Number,
      },
      options: {
        type: Array,
      }
    }
)

</script>

<template>
  <select>
    <option v-for="option in options" :value="option.value" :selected="selected === option.value">{{ option.label }}</option>
  </select>
</template>

<style scoped>

</style>