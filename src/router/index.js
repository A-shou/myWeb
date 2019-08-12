import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import before from './before'

Vue.use(Router)

//本页为路由核心部分

const routes = createRoutesFromFiles(require.context('../', true, /router\.js/))

function createRoutesFromFiles (routeFiles) {
    let _routes = [ //公共页面配置

    ]

    let zz = /index\/router\.js/

    // 循环获取router配置
    routeFiles.keys().forEach(key => {
        //排除自身
        if (key === './router/index.js') return
        //排除二级router
        if (zz.test(key)) {
            let item = routeFiles(key).default  //读取文档中的default模块
            //数组对象循环添加
            if (item instanceof Array) item.forEach(route => _routes.push(route))
            else _routes.push(item)
        }
    })

    return _routes
}

const createRouter = () => new Router({
    routes
})

const router = createRouter()


//跳转拦截
before(router, store)


export default router
