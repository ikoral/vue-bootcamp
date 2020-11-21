<template>
  <div class= "bg-gray-200 w-full flex flex-col items-center p-4">
    <div class="mb-10 flex flex-row flex-wrap justify-center">
      <Card
        v-for = "(person, index) in persons" :key="index"
        :company="person.company"
        :name="person.name"
        :position="person.position"
        >
      </Card>
    </div>

    <div>
      <input type="text" placeholder = "Add an item"  v-model="item"/>
      <button @click.prevent = "addItem">Add</button>

      <List :childItems = "items"></List>
    </div>

    <div>
      <!-- Burda dikkat v-bind i direkt post objectine assign ediyoruz.
      Ama Props comp nde "post yerine dogrudan "id" ve "title" keylerini props veriyoruz  -->
      <Props 
        :is-published = "true" 
        :views = "123" 
        v-bind = "post"
        :visible = "true"/>
    </div>

  </div>
</template>

<script>

import List from './components/List';
import Card from './components/card/Card';
import Props from './components/Props';

export default {
  name: 'App',
 
  data: function(){
    return {
      item: '',
      items: ['item1', 'item2'],
      persons: [
        {
          company: 'Lecture Easy',
          name: 'Ilhan Koral',
          position: 'IT Pro Trainer'
        },
        {
          company: 'Miray Bijouterie',
          name: 'Miray Koral',
          position: 'Sales Manager'
        },
        {
          company: 'Acme Company',
          name: 'Jane Doe',
          position: 'Office Manager'
        },
      ],
      post: {
        id: 1,
        title: 'My Title'
      }
    }
  },

  components: {
    List,
    Card,
    Props
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
