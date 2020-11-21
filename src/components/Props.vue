<template>
  <div v-if = "visible"  class="mt-10">
      <h1 class= "font-medium">Advanced Props</h1>
      <div>{{ id }} {{ title }}</div>
      <div>{{ isPublished }}</div>
  </div>
</template>

<script>
//Burdaki ""title" ve "id" propslari parent tan v-bind="post" olarak gonderildi.
//post.id, post.title
export default {
    name: 'Props',
    props: {
        title: String,
        isPublished: {
            type:[Boolean, Number],
            default:false
        },
        views: Number,
        id: Number,
        visible: {
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>