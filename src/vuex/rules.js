//表单验证
var rules = {
    min: value => value.length > 0 || '此为必填项',  //必填验证
    password: value => {    //密码验证
        if (value.length <= 0) {
            return '此为必填项'
        } else {
            const idTest = /^[0-9a-zA-Z]+$/
            return idTest.test(value) || value.length == 0 || '密码只能包含数字与字母'
        }
    },
    uid: value => { //账号验证
        if (value.length <= 0) {
            return '此为必填项'
        } else {
            const idTest = /^[0-9a-zA-Z]+$/
            return idTest.test(value) || '账号只能包含数字与字母'
        }
    },
    phone: value => /^1[3465789]\d{9}$/.test(value) || '请填写正确的电话号码',
    role: value => {    //角色编码验证
        if (value.length <= 0) {
            return '此为必填项'
        } else {
            const idTest = /^[0-9a-zA-Z]+$/
            return idTest.test(value) || value.length == 0 || '角色编码只能包含数字与字母'
        }
    },
}


export default rules
