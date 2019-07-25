module.exports = {
    //publicPath: 'ms',
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: 'http://10.8.51.76:8604/',  // target host
    //             ws: false,  // proxy websockets
    //             changeOrigin: true,  // needed for virtual hosted sites
    //             pathRewrite: {
    //                 '^/': ''  // rewrite path
    //             }
    //         },
    //         // '': {
    //         //     target: 'http://10.1.13.107:8080/',  // target host
    //         //     ws: true,  // proxy websockets
    //         //     changeOrigin: true,  // needed for virtual hosted sites
    //         //     pathRewrite: {
    //         //         '^/api': ''  // rewrite path
    //         //     }
    //         // },
    //     },  // 配置多个代理
    // }
};
