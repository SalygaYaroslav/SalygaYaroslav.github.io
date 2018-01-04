<template>
    <div>
        <b-navbar fixed="top" class="my-nav" toggleable="md">
            <b-navbar-toggle target="my_collapse"></b-navbar-toggle>

            <b-collapse is-nav id="my_collapse">
                <b-nav vertical v-b-scrollspy:spy>
                    <b-nav-item href="#about" v-lang-children="'menu.about'"></b-nav-item>
                    <b-nav-item href="#experience" v-lang-children="'menu.experience'"></b-nav-item>
                    <b-nav-item href="#education" v-lang-children="'menu.education'"></b-nav-item>
                    <b-nav-item href="#skills" v-lang-children="'menu.skills'"></b-nav-item>
                    <b-nav-item href="#interests" v-lang-children="'menu.interests'"></b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
        <m-content v-bind:parts="parts"></m-content>
    </div>
</template>

<script>
    import mContent from "./m-content.vue";

    export default {
        components: {mContent},
        name: "m-aplication"
    }
</script>

<style lang="scss">
    .my-nav {
        background-color: #3399cc;

        .nav-item {
            &.active {
                background-color: #297aa3;
            }

            .nav-link {
                font-family: "Segoe UI";
                color: #ffffff;
                text-transform: uppercase;
            }
        }
    }

    @media (min-width: 992px) {
        body {
            padding-top: 0;
            padding-left: 20rem;
        }
        .my-nav {
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            width: 20rem;
            height: 100vh;

            .nav {
                margin: auto;
            }
        }
    }
</style>