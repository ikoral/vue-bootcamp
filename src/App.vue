<template>
  <div class= "bg-gray-200 w-full flex flex-col items-center p-4" tabindex="0">
    <div class="mb-10 flex flex-row flex-wrap justify-center">
      <button class = "button" @click.alt = "add(10)">click me</button>
    </div>
    <p>{{ counter }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
 
  components: {
    
  },

  data:() => {
    return {
      counter:0
    }
  },

  methods: {
    add(number) {
      this.counter += number;
    }
  }

}
</script>

<style>
.button{
  border: 2px solid rgb(15, 52, 218);
  padding: 5px 20px;
  border-radius: 20px
}

.button:hover{
  background: rgb(15, 52, 218);
  color: #fff;
  border: 3px solid rgb(111, 181, 246);
}
</style>
