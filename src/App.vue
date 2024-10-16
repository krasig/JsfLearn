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
</script>

<template>
  <header>


    <div class="wrapper">
      <Myfirstcomponent />
    </div>

  </header>

  <main>
    <Asynchronous/>
    <ht/>
    <Watcher/>
    <hr/>
    <ComputedSetGet/>
    <hr/>
    <Computed/>
      <hr/>
    <Styling/>
    <hr/>
<!--  <lifecycle/>-->
    <hr/>
    <methods/>
    <div >
      <test />
    </div>
    <hr/>
    <vfor/>
  </main>
</template>

<style scoped>
@import "@/styles/global.scss";
/*header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/
</style>
