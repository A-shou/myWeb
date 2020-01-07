import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index.js'
import 'vuetify/dist/vuetify.min.css'
import store from './vuex'
//import './common/style.css'


//公共组件
import moduleArr from './components/modules/module.js'
moduleArr.forEach(item => {
    Vue.use(item)
    Vue.component(item.name, item);
})

//CK富文本
// import CKEditor from '@ckeditor/ckeditor5-vue';
// Vue.use(CKEditor);


//ajax
import axios from './axios/index'
Vue.prototype.$http = axios;


//api管理
import api from './api/index.js'
Vue.prototype.$api = api.apiCall;
Vue.prototype.$apiAll = api.apiSynchronization;


//公共方法
import common from "./common/public.js";
Vue.prototype.$common = common


//UI框架
Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    vuetify,
    router,
    store
}).$mount('#app')
