<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'experience.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0 --bebas">Middle Web Developer</h3>
                <div class="subheading mb-3 --bebas">IT 2.0</div>
                <p class="subheading --acrobat" v-lang="'experience.it20'"></p>
            </div>
            <div class="my-date text-md-right">
                <span class="--my-color --bebas" v-lang="'experience.it20-time'"></span>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0 --bebas">Junior Web Developer</h3>
                <div class="subheading mb-3 --bebas">QuartSoft</div>
                <p class="subheading --acrobat" v-lang="'experience.qs'"></p>
            </div>
            <div class="my-date text-md-right">
                <span class="--my-color --bebas" v-lang="'experience.qs-time'"></span>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0 --bebas" v-lang="'experience.mevs-pos'"></h3>
                <div class="subheading mb-3 --bebas">MEVS</div>
                <p class="subheading --acrobat" v-lang="'experience.mevs'"></p>
            </div>
            <div class="my-date text-md-right">
                <span class="--my-color --bebas" v-lang="'experience.mevs-time'"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-experience"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/main";

    .my-date {
        min-width: 18rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
</style>