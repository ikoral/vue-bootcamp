<template>
  <button class = "button" v-on:click="handleButton" v-text = "loading ? 'Loading' : 'CLICK ME'"></button>
</template>

<script>
export default {
    data: function() {
        return {
            loading:false,
        }
    },

    methods:{
        handleButton: function(){
            this.loading = true;

            //AJAX REQUEST

            this.$emit('got-clicked');
        }
    }
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