<template>
    <div>
        <b-navbar fixed="top" class="my-nav" toggleable="lg">
            <b-navbar-brand class="mt-lg-5 mr-0">
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
                    <b-nav-item href="#certifications" v-lang-children="'menu.certifications'"></b-nav-item>
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

<style lang="scss" scoped>
    @import "../scss/main";

    .my-nav {
        background-color: $blue-regular;
    }

    .img-profile {
        max-width: 10rem;
        max-height: 10rem;
        border: .8rem solid $blue-darkness;
    }

    .nav-item {
        &.active {
            background-color: $blue-darkness;
        }

        .nav-link {
            color: #ffffff;
            text-transform: uppercase;
            font-size: 1.5rem;
        }
    }
</style>

<style lang="scss">
    .my-nav {
        .navbar-brand {
            color: #ffffff;
            &:hover {
                color: #ffffff;
            }
        }
        .navbar-toggler {
            border-color: #ffffff;
            .navbar-toggler-icon {
                background-image: unset;
                -webkit-mask: url(/assets/toggle.svg) no-repeat 50% 50%;
                mask: url(/assets/toggle.svg) no-repeat 50% 50%;
                background-color: #ffffff;
            }
        }
    }

    @media (max-width: 576px) {
        .my-content {
            margin-top: 50px
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