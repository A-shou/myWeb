import apiConfig from './apiConfig'
import axios from '../axios/index'
import instance from '../axios/instance'
import store from "../vuex";

// 获取接口配置数据
// {{ api }} 接口在apiConfig中的位置 -链接

function apiGetPosition(api) {
    let apiPosition = api.split('-')
    let position = null
    apiPosition.forEach(item => {
        if (position) {
            position = position[item]
        } else {
            position = apiConfig[item]
        }
    })
    return position
}



// apiCall方法返回axios结果类 可直接放入axios提供的同步方法中
// {{prama}} api 接口在apiConfig中的位置  多级使用 - 分隔 （ customer-listData ）
// {{prama}} data 接口接收的参数
// {{prama}} type 调用类型 axios通用 instance上传附件使用 all同步处理

function apiCall(prama) {
    let api = prama.api,
        param = prama.data ? prama.data : {},
        type = prama.type

    let position = apiGetPosition(api)

    if (type == 'all') {

        return axios.post(position.url, param)

    } else if (type == 'instance') {

        store.commit('setLoading')
        return new Promise(function (resolve, reject) {
            instance.post(position.url, param).then(res => {
                store.commit('closeLoading')
                resolve(res)
            }).catch(err => {
                store.commit('closeLoading')
                reject(err)
            })
        });

    } else {

        store.commit('setLoading')
        return new Promise(function (resolve, reject) {
            axios.post(position.url, param).then(res => {
                store.commit('closeLoading')
                resolve(res)
            }).catch(err => {
                store.commit('closeLoading')
                reject(err)
            })
        });

    }

}


//apiSynchronization方法同步调用接口
// {{ prama }} apiOrderList api接口配置 数组 单项参数参照apiCall
// 内部循环调用了apiCall方法

function apiSynchronization(apiOrderList) {

    let orderList = []

    apiOrderList.forEach(item => {
        orderList.push(apiCall({
            api: item.api,
            data: item.data,
            type: 'all'
        }))

    })

    store.commit('setLoading')

    return new Promise(function (resolve, reject) {
        axios.all(orderList).then(resList => {

            resList.forEach( (res, index) => {
                apiOrderList[index].callBack(res)
            })
            resolve(resList)
            store.commit('closeLoading')

        }).catch(err => {

            reject(err)
            store.commit('closeLoading')

        })
    });


}




export default {
    apiCall,
    apiSynchronization
}
