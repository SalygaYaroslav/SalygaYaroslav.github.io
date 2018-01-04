<template>
    <div class="my-content container-fluid p-0">
        <section v-for="part in parts" class="my-section">{{part}}</section>
    </div>
</template>

<script>
    export default {
        name: "m-content",
        props: ['parts']
    }
</script>

<style lang="scss">
    .my-content {

        .my-section {
            min-height: 100vh;
        }
    }
</style>