<template>
  <div class="bg-gray-200 w-full h-screen flex flex-col items-center p-4">
    <AddTodo @add-todo="addTodo"/>
    <List :childItems="items" @remove-item="removeItem"/>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import List from "./components/List";

export default {
  name: "App",

  components: {
    AddTodo,
    List,
  },

  data: () => {
    return {
      items: [{ name: "item1" }, { name: "item2" }],
    };
  },

  methods: {
    addTodo: function(item) {
      this.items = [...this.items,item];
    },
    removeItem: function(id){
      this.items.splice(id, 1);
    }
  },
};
</script>

<style>
</style>
