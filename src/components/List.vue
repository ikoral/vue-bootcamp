<template>
  <div class="mt-4 lg:w-1/2 w-4/5">
    <ul v-for="(item, itemId) in childItems" :key="itemId">
      <li>
        <div class="flex items-center">
          <input class="mr-2" type="checkbox" />
          <div>{{ item.name }}</div>
        </div>
        <button @click.prevent="$emit('remove-item', itemId)">X</button>
        <!-- <button @click.prevent="doTest">X</button>  -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["childItems"],
  methods: {
    doTest: function () {
      console.log(this.itemId);
    },
  },
};
</script>

<style scoped>
li {
  padding: 5px 15px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 15px;
  color: #555;
  display: flex;
  justify-content: space-between;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 14px;
}
</style>