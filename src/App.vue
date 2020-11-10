<template>
  <div class= "bg-gray-200 w-full flex flex-col items-center p-4">
    <div class="mb-10 flex flex-row flex-wrap justify-center">
      <Card
        :company="company"
        :name="name"
        v-for = "i in 10" :key="i">
      </Card>
    </div>

    <div>
      <input type="text" placeholder = "Add an item"  v-model="item"/>
      <button @click.prevent = "addItem">Add</button>

      <List :childItems = "items"></List>
    </div>

  </div>
</template>

<script>

import List from './components/List';
import Card from './components/Card';

export default {
  name: 'App',
 
  data: function(){
    return {
      item: '',
      items: ['item1', 'item2'],
      company: 'Lecture Easy',
      name: 'Ilhan Koral'
    }
  },

  components: {
    List,
    Card
  },

  methods: {
    addItem: function() {
      // this.items.push(this.item);
      if (this.item != ''){
        this.items.unshift(this.item);
        this.item = ''
      }
      
    }
  }
}
</script>

<style>
input {
    padding: 5px 15px;
    border-radius: 15px;
}
button {
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 5px;
    font-weight: bold;
}
ul {
    margin-top: 15px;
}
li {
    padding: 5px 15px;
    margin-bottom: 5px;
    background: white;
    border-radius: 15px;
    color: #555;
    display: flex;
    justify-content: space-between;
}
</style>
