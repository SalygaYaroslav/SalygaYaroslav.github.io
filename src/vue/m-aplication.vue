<template>
    <div>
        <b-navbar fixed="top" class="my-nav" toggleable="md">
            <b-navbar-brand class="mt-lg-5">
                <span class="d-block d-lg-none" v-lang="'menu.portfolio'"></span>
                <span class="d-none d-lg-block">
                    <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/ava.jpg" alt="">
                </span>
            </b-navbar-brand>
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
    @font-face {
        font-family: 'Bebas';
        src: url('/font/bebas.eot?k6fn45');
        src: url('/font/bebas.eot?k6fn45#iefix') format('embedded-opentype'),
        url('/font/bebas.ttf?k6fn45') format('truetype'),
        url('/font/bebas.woff?k6fn45') format('woff'),
        url('/font/bebas.svg?k6fn45#prostoy') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: Bebas;
    }

    .--my-color {
        color: #3399cc;
    }

    .my-nav {
        background-color: #3399cc;

        .img-profile {
            max-width: 10rem;
            max-height: 10rem;
            border: .5rem solid rgba(255, 255, 255, .2);
        }
        .nav-item {
            &.active {
                background-color: #297aa3;
            }

            .nav-link {
                color: #ffffff;
                text-transform: uppercase;
                font-size: 1.5rem;
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