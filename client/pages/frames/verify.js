var config = require('../../config')
var utils = require('../../utils/util')

Page({
    data : {

    },
    verify : () => {
        wx.request({
            url: config.service.demoUrl,
            success: (res) => {
                console.log(res);
            }
        })
    },
    login: () => {
        wx.login({
            success: (res) => {
                if (res.code) {
                    console.log(res);
                    //发起网络请求
                    wx.request({
                        url: config.service.verifyUrl + res.code,
                        success: (res) => {
                            console.log(res)
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    }
})