let state = {
    alterConfirmData: { //需要确认的弹窗
        show: false,
        text: '',
        title: '',
        success: null,
        cancel: true
    },
    alertData: {    //提示弹窗公共状态
        show: false,
        massage: '',
        type: '',
        time: 2,
    },
    loadingShow: false,  //加载动画公共状态
    userInfo: {     //用户信息
        logState: false,
        data: null
    },
}


export default state
