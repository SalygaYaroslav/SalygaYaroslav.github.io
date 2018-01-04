<template>
    <div class="my-auto">
        <h1 class="my-about-name mb-0" v-lang="'about.name'"></h1>
        <div class="subheading mb-5">
            <a class="--my-color" href="mailto:name@email.com" v-lang="'about.mail'"></a>
            <span> · </span>
            <span v-lang="'about.location'"></span>
            <span> · </span>
            <a class="--my-color" href="tel:+38 (066) 034-91-40">+38 (066) 034-91-40</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-about"
    }
</script>

<style lang="scss">
    h1 {
        font-size: 5rem;
        line-height: 5.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #343a40;
    }

    .subheading {
        text-transform: uppercase;
        font-weight: 500;
        font-family: 'Saira Extra Condensed', serif;
        font-size: 1.35rem;
        color: #868e96;
    }
</style>