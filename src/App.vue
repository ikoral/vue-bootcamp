<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{ message }}

    <ExampleOne />

    <ExampleTwo />
  </div>
</template>

<script>
//import { component } from 'vue/types/umd'
// import HelloWorld from './components/HelloWorld.vue'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data: function(){
    return {
      message:'test'
    }
  },

  components: {
      ExampleOne,
      ExampleTwo
  },
}
</script>

<style>

</style>
