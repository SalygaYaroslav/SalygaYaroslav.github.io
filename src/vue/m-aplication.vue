<template>
    <b-container>
        <b-navbar fixed="top" class="my-navbar">
            <b-nav vertical>
                <b-nav-item v-for="part in parts" v-bind:href="'#'+part">{{part}}</b-nav-item>
            </b-nav>
        </b-navbar>
        <m-content></m-content>
    </b-container>
</template>

<script>
    import mContent from "./m-content.vue";

    export default {
        components: {mContent},
        name: "aplication",
        data() {
            return {
                parts: ['about', 'experience', 'education', 'skills', 'interests']
            }
        },
    }
</script>

<style lang="scss">
    @media (min-width: 992px) {
        .my-navbar {
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            width: 20vw;
            height: 100vh;

            .nav {
                margin: auto;
            }
        }
    }
</style>