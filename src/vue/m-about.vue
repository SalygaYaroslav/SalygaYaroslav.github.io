<template>
    <div class="my-auto">
        <h1 class="my-about-name mb-0 --bebas">
            <span v-lang="'about.name'"></span>
            <span v-lang="'about.surname'" class="--my-color"></span>
        </h1>
        <div class="subheading mb-5 --uppercase --bebas">
            <a class="--my-color" href="mailto:name@email.com" v-lang="'about.mail'"></a>
            <span> · </span>
            <span v-lang="'about.location'"></span>
            <span> · </span>
            <a class="--my-color" href="tel:+38 (066) 034-91-40">+38 (066) 034-91-40</a>
        </div>
        <div class="subheading mb-5">
            <span v-lang="'about.information'"></span>
        </div>

        <div class="subheading mb-5">
            <a href="https://vk.com/skyuoker" target="_blank" class="my-link"><span
                    class="icon-vk --radius --my-gray p-2"></span></a>
            <a href="https://t.me/sjrslv" target="_blank" class="my-link"><span
                    class="icon-telegram --radius --my-gray p-2"></span></a>
            <a href="viber://chat?number=+380660349140" target="_blank" class="my-link"><span
                    class="icon-viber --radius --my-gray p-2"></span></a>
            <a href="skype:altagere?call" target="_blank" class="my-link"><span
                    class="icon-skype --radius --my-gray p-2"></span></a>
            <a href="https://github.com/SalygaYaroslav" target="_blank" class="my-link"><span
                    class="icon-github --radius --my-gray p-2"></span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-about"
    }
</script>

<style lang="scss">
    h1 {
        font-size: 5rem;
        line-height: 5.5rem;
        font-weight: 500;
        color: #343a40;
    }

    .subheading {
        font-weight: 500;
        font-size: 1.35rem;
        color: #868e96;
    }

    .my-link {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }
</style>