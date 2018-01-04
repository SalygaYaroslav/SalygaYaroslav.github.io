<template>
    <div class="my-content container-fluid p-0">
        <section id="about" class="my-section">about</section>
        <section id="experience" class="my-section">experience</section>
        <section id="education" class="my-section">education</section>
        <section id="skills" class="my-section">skills</section>
        <section id="interests" class="my-section">interests</section>
    </div>
</template>

<script>
    export default {
        name: "m-content"
    }
</script>

<style lang="scss">
    .my-content {
        position: relative;
        .my-section {
            min-height: 100vh;
        }
    }
</style>