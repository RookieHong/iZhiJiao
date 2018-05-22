//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
      wx.getStorage({
        key: 'verified',
        success: function (res) {
          if (res.data == "false")
            this.verified = false;
          else
            this.verified = true;
        },
        fail:function(){
          this.verified=false;
        }
      })
        /*qcloud.setLoginUrl(config.service.loginUrl)
        var that = this
        new Promise(function (resolve, reject) {
            wx.login({
                success: function (res) {
                    resolve(res)
                }
            })
        }).then(function (res) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx542ddffc5268f0be&secret=0bf54d6cec5a5055896ed03226190b44&js_code=' + res.code + '&grant_type=authorization_code',
                    success: function (result) {
                        resolve(result.data)
                    }
                })
            })
        }).then(function (data) {
            that.openid = data.openid
            return new Promise(function (resolve, reject) {
                try {
                    wx.request({
                        url: config.service.checkVerifiedUrl + data.openid,
                        success: function (res) {
                            if(res.data.data.length != 0) {
                                that.verified = true
                            }
                        }
                    })
                }
                catch (err) {
                    console.log(err)
                    wx.showToast({
                        icon: "none",
                        title: '出错！'
                    })
                }
            })
        })
    },*/
    },
    verified: false,
    openid: '',
    userInfo: {}
})