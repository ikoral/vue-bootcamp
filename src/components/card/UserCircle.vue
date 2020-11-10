<template>
    <div class = "card-circle">{{ initials }}</div>
</template>

<script>
export default {
    name: 'UserCircle',

    props: ['name'],

    computed: {
        initials: function() {
            return this.name.match(/[A-Z]/g).join('');
        }
    }
}
</script>

<style scoped>
    .card-circle {
    background: linear-gradient(to right, #6babc9, #335260);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 100%;
    padding: 5px;
    border: 3px solid #fff;
}
</style>