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
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.first'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.second'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.third'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.four'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.five'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span v-lang="'skills.six'"></span>
                    </li>
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
    @import "../scss/main";

    .my-check-list {
        list-style: none;
        padding-left: 2rem;

        .list-item {
            font-weight: 500;
            font-size: 1.35rem;
            color: $gray-regular;

            .my-check-icon {
                font-size: 1rem;
                color: $blue-regular;
            }
        }
    }

    span.skills-icon {
        font-size: 2rem;
        color: $blue-regular;
        cursor: pointer;

        &:hover {
            color: $blue-darkness;
        }
    }
</style>