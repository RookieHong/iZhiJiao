var config = require('../../config')
var utils = require('../../utils/util')
var app = getApp()

Page({
    data : {
        verified: app.verified,

        name: "",
        id: "",
        contact: "",

        contactTypes: ["微信", "手机"],
        contactTypeIndex: 0,

        regions: ["海口", "厦门", "重庆"],
        regionIndex: 0

    },
    nameInput : function(e) {
        this.setData({
            name: e.detail.value
        })
    },
    idInput: function(e) {
        this.setData({
            id: e.detail.value
        })
    },
    numberInput: function(e) {
        this.setData({
            contact: e.detail.value
        })
    },
    bindContactTypeChanges: function(e) {
        this.setData({
            contactTypeIndex: e.detail.value
        })
    },
    bindRegionChanges: function(e) {
        this.setData({
            regionIndex: e.detail.value
        })
    },
    verify : function() {
        var name = this.data.name
        var id = this.data.id
        var contact = this.data.contact
        var contactType = this.data.contactTypes[this.data.contactTypeIndex]
        var region = this.data.regions[this.data.regionIndex]
        var that = this
        if(name == '' || id == '' || contact == ''){
            wx.showToast({
                icon: 'none',
                title: '请将信息填写完整！'
            })
            return
        }
        new Promise(function(resolve, reject) {
            wx.login({
                success: function(res) {
                    resolve(res)
                }
            })
        }).then(function(res) {
            return new Promise(function(resolve, reject) {
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx542ddffc5268f0be&secret=0bf54d6cec5a5055896ed03226190b44&js_code=' + res.code + '&grant_type=authorization_code',
                    success: function(result) {
                        resolve(result.data)
                    }
                })
            })
        }).then(function(data) {
            return new Promise(function(resolve, reject) {
                try {
                    wx.request({
                        url: config.service.verifyUrl,
                        method: 'POST',
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            name: name,
                            id: id,
                            contact: contact,
                            contactType: contactType,
                            region: region,
                            openid: data.openid
                        },
                        success: function(res) {
                            console.log(res)
                            if (res.data.code == -1) {
                                wx.showToast({
                                    icon: "none",
                                    title: res.data.error
                                })
                            }
                            else if (res.data.code == 0) {
                                wx.showToast({
                                    icon: "none",
                                    title: res.data.data.msg,
                                    success: function() {
                                        app.verified = true
                                        that.setData({
                                            verified: app.verified
                                        })
                                    }
                                })
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
    },
    test: function() {
        wx.login({
            success: function(res) {
                if(res.code) {
                    wx.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx542ddffc5268f0be&secret=0bf54d6cec5a5055896ed03226190b44&js_code=' + res.code + '&grant_type=authorization_code',
                        success: (res) => {
                            console.log(res.data.openid)
                        }
                    })
                }
            }
        })
    },
    onLoad: function() {
        wx.getStorage({
            key: 'openid',
            success: function(res) {
                this.setData({
                    verified: true
                })
            }
        })
    }
})