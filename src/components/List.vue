<template>
    <div>
    <ul v-for = "(item, itemId) in childItems" :key = "itemId">
        <li> 
            {{item}}
        </li>
    </ul>
    </div>
    
</template>

<script>
export default {
    name: 'List',
    props: ['childItems']
}
</script>

<style scoped>

</style>