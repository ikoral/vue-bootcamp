<template>
  <div class= "w-full flex flex-col items-center">
    <MyButton v-on:got-clicked="handleFormSubmitted" />
    {{ message }}
  </div>
</template>

<script>
import MyButton from "./components/MyButton"

export default {
  name: "App",
  components: {
    MyButton
  },

  data: () => {
    return {
      message: ''
    };
  },

  methods: {
   handleFormSubmitted: function() {
     this.message = 'CLICKED';
   }
  },
};
</script>

<style>

</style>
