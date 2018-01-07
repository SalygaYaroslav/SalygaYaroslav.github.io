<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'education.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0 --bebas" v-lang="'education.dgma'"></h3>
                <div class="subheading mb-3 --bebas" v-lang="'education.dgma-special'"></div>
            </div>
            <div class="my-date text-md-right">
                <span class="--my-color" v-lang="'education.dgma-time'"></span>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0 --bebas" v-lang="'education.dmt'"></h3>
                <div class="subheading mb-3 --bebas" v-lang="'education.dmt-special'"></div>
            </div>
            <div class="my-date text-md-right">
                <span class="--my-color" v-lang="'education.dmt-time'"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-education"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/main";

    .my-auto {
        width: 100%;
    }

    .my-date {
        min-width: 18rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
</style>