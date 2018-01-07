<template>
    <div class="my-auto">
        <h2 class="my-about-name mb-5 --bebas" v-lang="'skills.title'"></h2>
        <div class="d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <div class="subheading mb-3 --bebas" v-lang="'skills.languages'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item" v-b-tooltip.hover title="HTML5"><span
                            class="skills-icon icon-html5"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="CSS3"><span
                            class="skills-icon icon-css3"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="JavaScript"><span
                            class="skills-icon icon-javascript"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="jQuery"><span
                            class="skills-icon icon-jquery"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="JSON"><span
                            class="skills-icon icon-json"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="PHP"><span
                            class="skills-icon icon-php"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="MySQL"><span
                            class="skills-icon icon-mysql"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="SASS"><span
                            class="skills-icon icon-sass"></span></li>
                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.tools'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item" v-b-tooltip.hover title="npm"><span
                            class="skills-icon icon-npm"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Gulp"><span
                            class="skills-icon icon-gulp"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Webpack"><span
                            class="skills-icon icon-webpack"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Git"><span
                            class="skills-icon icon-git"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Subversion"><span
                            class="skills-icon icon-subversion"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="WebStorm"><span
                            class="skills-icon icon-webstorm"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Sublimetext"><span
                            class="skills-icon icon-sublimetext"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Photoshop"><span
                            class="skills-icon icon-adobephotoshop"></span></li>

                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.frameworks'"></div>
                <ul class="list-inline list-icons">
                    <li class="list-inline-item" v-b-tooltip.hover title="Vue.js"><span
                            class="skills-icon icon-vuejs"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Bootstrap"><span
                            class="skills-icon icon-bootstrap"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Joomla"><span
                            class="skills-icon icon-joomla"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="Laravel"><span
                            class="skills-icon icon-laravel"></span></li>
                    <li class="list-inline-item" v-b-tooltip.hover title="WordPress"><span
                            class="skills-icon icon-wordpress"></span></li>
                </ul>
                <div class="subheading mb-3 --bebas" v-lang="'skills.workflow'"></div>
                <ul class="list my-check-list --acrobat">
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.first'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.second'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.third'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.four'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.five'"></span>
                    </li>
                    <li class="list-item"><i class="my-check-icon icon-check mr-2"></i><span
                            v-lang="'skills.six'"></span>
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

<style lang="scss" scoped>
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