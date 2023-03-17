<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <CounterApp />
</template>

<script>
import CounterApp from "@/components/CounterApp.vue";

export default {
  name: "CounterView",
  components: {
    CounterApp
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
