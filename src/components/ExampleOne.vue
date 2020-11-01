<template>
    <div class="wrapper">
        <a href = "#">Link</a>
    </div>
</template>

<script>
export default {
    name: 'ExampleOne',

    data: function() {
        return {

        }
    }
}
</script>

<style scoped>
    .wrapper{
        background: #ccc;
        margin:15px;
    }

    .wrapper > a {
        font-size: 100px;
    }
</style>