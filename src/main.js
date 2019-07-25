import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index.js'
import 'vuetify/dist/vuetify.min.css'
import store from './vuex'
//import './common/style.css'

import moduleArr from './components/modules/module.js'
moduleArr.forEach(item => {
    Vue.use(item)
    Vue.component(item.name, item);
})


import axios from './axios/index'
Vue.prototype.$http = axios;

import common from "./common/public.js";
Vue.prototype.$common = common

Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    vuetify,
    router,
    store
}).$mount('#app')
