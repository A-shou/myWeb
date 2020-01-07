
//本页为路由跳转拦截
//router路由  store公共状态储存位置（公共变量,公共方法）

const routerBefore = function (router, store) {
    router.beforeEach((to, from, next) => {
        //路由跳转拦截

        //过滤公共页面
        // if (to.path != '/' && to.path != '/login' && to.path != '/404') {
        //     //判断登录状态
        //     if (!sessionStorage.getItem('token')) {
        //         store.commit('logout')
        //         next({path: '/'})
        //         return false
        //     }
        //
        //     if (!to.name) { //判断路由name是否存在 无路由跳转404
        //         next({path: '/404'})
        //         return false
        //     }
        // }

        //登录状态下返回登录页面 自动退出登录状态
        // if (sessionStorage.getItem('token') && (to.path == '/' || to.path == '/login')) {
        //     store.commit('logout')
        //     return
        // }

        next() //跳转至下一个页面
    })
}


export default routerBefore
