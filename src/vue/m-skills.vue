<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'skills.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <div class="subheading mb-3 --bebas" v-lang="'skills.languages'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item"><span class="skills-icon icon-html5"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-css3"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-javascript"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-jquery"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-json"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-php"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-mysql"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-sass"></span></li>
                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.tools'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item"><span class="skills-icon icon-npm"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-gulp"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-webpack"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-git"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-subversion"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-webstorm"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-sublimetext"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-adobephotoshop"></span></li>

                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.frameworks'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item"><span class="skills-icon icon-vuejs"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-bootstrap"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-joomla"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-laravel"></span></li>
                    <li class="list-inline-item"><span class="skills-icon icon-wordpress"></span></li>
                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.workflow'"></div>
                <ul class="list my-check-list">
                    <li class="list-item" v-lang="'skills.first'"></li>
                    <li class="list-item" v-lang="'skills.second'"></li>
                    <li class="list-item" v-lang="'skills.third'"></li>
                    <li class="list-item" v-lang="'skills.four'"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-skills"
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

    .my-check-list {
        list-style-image: url(/assets/check.png);

        .list-item {
            font-weight: 500;
            font-size: 1.35rem;
            color: #868e96;
        }
    }

    span.skills-icon {
        font-size: 2rem;
        color: #868e96;
        cursor: pointer;

        &:hover {
            color: #3399cc;
        }
    }
</style>