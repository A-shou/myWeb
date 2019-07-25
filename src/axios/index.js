import axios from 'axios';
import store from '../vuex'

axios.defaults.baseURL = 'http://10.8.51.76:8604/'
axios.defaults.timeout =  120000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config.uptype != 'file') {  //上传文件
        let param = new URLSearchParams();

        for(var key in config.data){
            param.append(key, config.data[key]);
        }
        config.data = param
    }

    //头部添加字段
    //config.headers.authorization = sessionStorage.getItem('token') || ''
    //config.headers.uId = sessionStorage.getItem('uId') || ''


    //设置loading
    store.commit('setLoading')
    return config;
}, function (error) {
    // Do something with request error
    window.console.log(error)
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    // Do something with response data

    //关闭loading
    store.commit('closeLoading')

    if (!response.data.meta) {
        return response.data
    } else {
        if (response.data.meta.code == -300) {  //token失效
            store.commit('logout')
            store.commit('setAlert', {
                show: true,
                massage: response.data.meta.msg,
                type: 'error',
                time: 2,
            })
        }

        if (response.data.meta.code != 200) { //统一错误拦截
            store.commit('setAlert', {
                show: true,
                massage: response.data.meta.msg,
                type: 'error',
                time: 2,
            })
            return Promise.reject(response.data.meta.msg)
        }

        if (response.data.meta.code == 200) {
            return response.data.data;
        }
    }

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default axios
