<template>
  <div class = "mt-4 lg:w-1/2 w-4/5">
    <input class = "w-4/5" type="text" placeholder="Add an item..." v-model="item" />
    <button @click="addTodo">ADD</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  
  data:() => {
      return {
          item:''
      }
  },

  methods:{
      addTodo: function() {
          const newItem = {name:this.item};
          this.$emit('add-todo',newItem);
          this.item = '';
      }
  }
};
</script>

<style>
input {
  padding: 5px 15px;
  border-radius: 15px;
}

button{
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 5px;
    font-weight: bold;
}
</style>