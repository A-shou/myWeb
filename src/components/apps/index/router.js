export default [
    {
        path: "/apps/index",
        name: 'index1',
        meta: {
            type: 'apps'
        },
        component: (resolve) => require(['./index.vue'], resolve),
    },
]
