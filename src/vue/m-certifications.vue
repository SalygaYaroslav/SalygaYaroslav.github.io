<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'certifications.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="mr-auto subheading">
                <ul class="list my-certifications-list">
                    <li class="list-item"><i class="my-certifications-icon icon-trophy mr-2"></i><span
                            v-lang="'certifications.first'"></span></li>
                    <li class="list-item"><i class="my-certifications-icon icon-trophy mr-2"></i><span
                            v-lang="'certifications.third'"></span></li>
                    <li class="list-item"><i class="my-certifications-icon icon-trophy mr-2"></i><span
                            v-lang="'certifications.four'"></span></li>
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
    @import "../scss/main";

    .my-certifications-list {
        list-style: none;
        padding-left: 2rem;

        .list-item {
            font-weight: 500;
            font-size: 1.35rem;
            color: $gray-regular;

            .my-certifications-icon {
                font-size: 1.2rem;
                color: $blue-regular;
            }
        }
    }
</style>