<template>
  <div class="w-full flex flex-col items-center">
    <MyButton v-on:got-clicked="handleFormSubmitted" />
    {{ message }}
    <div id="sep"></div>
    <ComponentA />
    <ComponentB />
  </div>
</template>

<script>
import MyButton from "./components/MyButton";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export default {
  name: "App",
  components: {
    MyButton,
    ComponentA,
    ComponentB,
  },

  data: () => {
    return {
      message: "",
    };
  },

  methods: {
    handleFormSubmitted: function () {
      this.message = "CLICKED";
    },
  },
};
</script>

<style>
#sep {
  border-bottom: solid 1px #ddd;
  height: 10px;
  width: 100%;
}
</style>
