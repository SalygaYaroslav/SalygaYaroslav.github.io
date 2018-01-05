<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'certifications.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="mr-auto subheading">
                <ul class="list my-certifications-list">
                    <li class="list-item" v-lang="'certifications.first'"></li>
                    <li class="list-item" v-lang="'certifications.second'"></li>
                    <li class="list-item" v-lang="'certifications.third'"></li>
                </ul>
                <ul>
                    <p v-lang="'certifications.more'"></p>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-certifications"
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

    .my-certifications-list {
        list-style-image: url(/assets/avard.png);

        .list-item {
            font-weight: 500;
            font-size: 1.35rem;
            color: #868e96;
        }
    }
</style>