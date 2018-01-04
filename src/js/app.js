Vue.config.devtools = true;

import mApplication from '../vue/m-aplication.vue';
import Lang from './lang';

let lang = new Lang();

Vue.directive('lang', {
    inserted: function (el, binding) {
        el.text = lang.translate(binding.value);
    }
});
Vue.directive('lang-children', {
    inserted: function (el, binding) {
        el.children[0].text = lang.translate(binding.value);
    }
});

new Vue({
    el: '#app',
    components: {mApplication}
});