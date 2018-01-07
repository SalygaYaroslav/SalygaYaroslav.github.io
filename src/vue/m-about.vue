<template>
    <div class="my-auto">
        <div class="d-flex flex-column flex-md-row mb-5 justify-content-between">
            <div class="my-info">
                <h1 class="my-about-name mb-0 --bebas">
                    <span v-lang="'about.name'"></span>
                    <span v-lang="'about.surname'" class="--my-color"></span>
                </h1>
                <div class="subheading mb-5 --uppercase --bebas">
                    <a class="--my-color my-contact" href="mailto:name@email.com" v-lang="'about.mail'"></a>
                    <span> · </span>
                    <span v-lang="'about.location'"></span>
                    <span> · </span>
                    <a class="--my-color my-contact" href="tel:+38 (066) 034-91-40">+38 (066) 034-91-40</a>
                </div>
            </div>
            <div class="my-qr flex-md-row mt-3">
                <span class="my-qr-code icon-qrcode">
                    <span class="path2"></span>
                </span>
            </div>
        </div>
        <div class="subheading mb-5">
            <span v-lang="'about.information'"></span>
        </div>

        <div class="subheading mb-5">
            <a href="https://vk.com/skyuoker" target="_blank" class="my-link" v-b-tooltip.hover title="Vkontakte"><span
                    class="icon-vk --radius p-2"></span></a>
            <a href="https://t.me/sjrslv" target="_blank" class="my-link" v-b-tooltip.hover title="Telegram"><span
                    class="icon-telegram --radius p-2"></span></a>
            <a href="viber://chat?number=+380660349140" target="_blank" class="my-link" v-b-tooltip.hover title="Viber"><span
                    class="icon-viber --radius p-2"></span></a>
            <a href="skype:altagere?call" target="_blank" class="my-link" v-b-tooltip.hover title="Skype"><span
                    class="icon-skype --radius p-2"></span></a>
            <a href="https://github.com/SalygaYaroslav" target="_blank" class="my-link" v-b-tooltip.hover
               title="GitHub"><span
                    class="icon-github --radius p-2"></span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-about"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/main";

    .my-link {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }

    .my-contact {
        text-decoration: none;

        &:hover {
            text-decoration: none;
            color: $blue-darkness;
        }
    }

    .my-qr {
        width: 6rem;
        height: 6rem;
        &-code {
            width: 6rem;
            height: 6rem;
            display: block;
            padding: 0.4rem;
            font-size: 5rem;
            color: $dark-regular;
            border: 2px solid $blue-regular;
        }
    }
</style>