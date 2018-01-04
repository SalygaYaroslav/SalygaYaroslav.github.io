<template>
    <b-container>
        <b-navbar fixed="top" class="my-nav" toggleable="md">
            <b-navbar-toggle target="my_collapse"></b-navbar-toggle>

            <b-collapse is-nav id="my_collapse">
                <b-nav vertical>
                    <b-nav-item v-for="part in parts" v-bind:href="'#'+part">{{part}}</b-nav-item>
                </b-nav>
            </b-collapse>
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
    .my-nav {
        background-color: #3399cc;

        .nav-link {
            font-family: "Segoe UI";
            color: #ffffff;
            text-transform: uppercase;
        }
    }

    @media (min-width: 992px) {
        .my-nav {
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