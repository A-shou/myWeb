import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
import state from './state.js'
import rules from './rules.js'
import axios from '../axios/index'

Vue.use(Vuex)


const store = new Vuex.Store({
    state,
    mutations: {
        setLoading (state) {
            state.loadingShow = true
        },
        setAlertC (state, data) {
            state.alterConfirmData = {
                show: true,
                text: data.text || '',
                title: data.title || '提示',
                success: data.success || false,
                onCancel: data.onCancel
            }
        },
        closeAlertC () {
            state.alterConfirmData = {
                show: false,
                text: '',
                title: '',
                success: null,
                cancel: true
            }
        },
        closeLoading (state) {
            state.loadingShow = false
        },
        setAlert (state, data) {
            state.alertData = {
                show: data.show || false,
                massage: data.massage || '提示',
                type: data.type || 'warning',
                time: Number(data.time) || 2,
            }
            setTimeout(function () {
                state.alertData.show = false
            }, state.alertData.time * 1000)
        },
        login (state, data) {
            //登录
        },
        logout (state) {
           //登出
        }
    }
})

//绑定表单验证
store.rules = rules

export default store;
