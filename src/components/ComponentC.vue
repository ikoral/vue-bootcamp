<template>
  <div>This is C: {{ message }}</div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  name: "ComponentC",
  data() {
    EventBus.$on("say-hello", () => {
      this.message = "Hello from Component A";
    });

    return {
      message: "Lonely Component Here!",
    };
  },
};
</script>

<style scoped>
</style>