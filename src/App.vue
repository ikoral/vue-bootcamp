<template>
  <div v-if = "globalPage" class= "w-full flex flex-col items-center" tabindex="0" @keyup.esc = "globalPage = false">

    <div class="w-full bg-gray-200 p-6 flex flex-col justify-center items-center">
      <!-- Example 1 - using javascript expression -->
      <!-- When the button is clicked, it should increase exampleOne by 12 -->
      <button class="button" @click="exampleOne += 12">increase by 12</button>
      <p>{{ exampleOne }}</p>
    </div>

    <div class="w-full bg-teal-200 p-6 flex flex-col justify-center items-center">
      <!-- Example 2 - using a method -->
      <!-- When the button is clicked, it should increase exampleTwo by 2 -->
      <button class="button" @click="increaseTwo">increase by 2</button>
      <p>{{ exampleTwo }}</p>
    </div>

    <div class="w-full p-6 flex flex-col justify-center items-center">
      <!-- Example 3 - using a method with data -->
      <!-- When the button is clicked, it should set exampleThree to data being passed in -->
      <button class = "button" @click = "powerOf(2)">Power of 2</button>
      <p>{{ exampleThree }}</p>
    </div>

    <div class="w-full bg-teal-200 p-6 flex flex-col justify-center items-center">
      <!-- Example 4 - using a method -->
      <!-- When the word "Show" is double clicked (dblclick), it should make the text appear!-->
      <button class = "button" @dblclick = "showText">Show</button>
      <p v-if = "isVisible">Abracadabra</p>
    </div>

    <!-- Example 5 - using a method -->
    <!-- When the key esc is pressed, the whole page should disappear -->

  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => {
    return {
      exampleOne: 0,
      exampleTwo: 0,
      exampleThree: 5,
      isVisible : false,
      globalPage: true
    };
  },

  methods: {
    increaseTwo() {
      this.exampleTwo += 2;
    },
    powerOf(value){
      this.exampleThree **= value;
    },
    showText(){
      this.isVisible = !this.isVisible;
    }
  },
};
</script>

<style>
.button {
  border: 2px solid rgb(15, 52, 218);
  padding: 5px 20px;
  border-radius: 20px;
}

.button:hover {
  background: rgb(15, 52, 218);
  color: #fff;
  border: 2px solid #fff;
}
</style>
