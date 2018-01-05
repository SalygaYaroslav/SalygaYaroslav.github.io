<template>
    <div class="my-content container-fluid p-0">
        <section id="about" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-about></m-about>
        </section>
        <section id="experience" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-experience></m-experience>
        </section>
        <section id="education" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-education></m-education>
        </section>
        <section id="skills" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-skills></m-skills>
        </section>
        <section id="interests" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-interests></m-interests>
        </section>
        <section id="certifications" class="my-section p-3 p-lg-5 d-flex d-column">
            <m-certifications></m-certifications>
        </section>
    </div>
</template>

<script>
    import MAbout from "./m-about.vue";
    import MExperience from "./m-experience.vue";
    import MEducation from "./m-education.vue";
    import MSkills from "./m-skills.vue";
    import MInterests from "./m-interests.vue";
    import MCertifications from "./m-certifications.vue";

    export default {
        components: {
            MCertifications,
            MInterests,
            MSkills,
            MExperience,
            MAbout,
            MEducation
        },
        name: "m-content"
    }
</script>

<style lang="scss">
    @import "../scss/main";

    .my-content {
        position: relative;

        .my-section {
            min-height: 100vh;
            border-bottom: 1px solid $gray-regular;
        }
    }

    @media (min-width: 576px) {
        .my-content {
            margin-top: 50px
        }
    }
</style>