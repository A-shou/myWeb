import axios from './index'
import store from "../vuex";
import router from "../router";

//上传方法  解决边界问题
var instance = axios.create({
    withCredentials: true,
    uptype: 'file',
    method: 'post',
    headers: {
        'authorization': sessionStorage.getItem('token') || '',
        'cuId': sessionStorage.getItem('uId') || '',
        'Content-Type': 'multipart/form-data;boundary=----' + new Date().getTime()
    },
})

//ajax拦截器 访问拦截
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.authorization = sessionStorage.getItem('token') || ''
    config.headers.uId = sessionStorage.getItem('uId') || ''

    return config;
}, function (error) {
    // Do something with request error
    window.console.log(error)
    return Promise.reject(error);
});

//回调拦截
instance.interceptors.response.use(function (response) {
    // Do something with response data

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
    router.push({path: '/404'})
    return Promise.reject(error);
});


export default instance
