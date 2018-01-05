<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'interests.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <p class="subheading --acrobat" v-lang="'interests.text'"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-interests"
    }
</script>

<style lang="scss">
    h2 {
        font-size: 3.5rem;
        line-height: 4rem;
        font-weight: 500;
        color: #343a40;
    }

    h3 {
        color: #343a40;
    }

    .subheading {
        font-weight: 500;
        font-size: 1.35rem;
        color: #868e96;
    }
</style>