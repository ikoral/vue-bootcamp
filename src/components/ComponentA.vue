<template>
  <button @click.prevent="sayHello">From A: Say Hello to Component B!</button>
</template>

<script>
import { EventBus } from "../main";
export default {
  name: "ComponentA",
  methods: {
    sayHello: function () {
      EventBus.$emit("say-hello");
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  border: solid 1px #ddd;
  border-radius: 10px;
  margin: 20px 10px;
}

button:hover {
  background: #d3d3d3;
}
</style>