<script setup>
import PropsChild from "@/components/PropsChild.vue";

const props=defineProps({
      greeting:
          {
            type: String,
            default: 'kg deafult greeting'
          },
      who: {
        type: String,
        default: 'world'
      }
    }
)

const options = [
  {
    label: 'One',
    value: 1
  },
  {
    label: 'Two',
    value: 2
  },
  {
    label: 'Three',
    value: 3
  },
];
const selected=2;

</script>

<template>
  Greeting:{{ greeting }}<br>
  Who:{{ who }}<br>

  <PropsChild :options="options" :selected="selected" />
</template>

<style scoped>

</style>