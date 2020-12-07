<template>
  <div>
    {{ message }}

    <ComponentC />
  </div>
</template>

<script>
import ComponentC from "./ComponentC";
import { EventBus } from "../main.js";

export default {
  name: "ComponentB",
  components: {
    ComponentC,
  },
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