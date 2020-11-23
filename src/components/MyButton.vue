<template>
  <button class = "button" v-on:click="$emit('got-clicked')">click me</button>
</template>

<script>
export default {

}
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