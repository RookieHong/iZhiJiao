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
        new Promise(function(resolve, reject) {
            wx.login({
                success: function(res) {
                    resolve(res)
                }
            })
        }).then(function(res) {
            new Promise(function(resolve, reject) {
                if (res.code) {
                    try {
                        wx.request({
                            url: config.service.verifyUrl,
                            method: 'POST',
                            data: {
                                name: name,
                                id: id,
                                contact: contact,
                                contactType: contactType,
                                region: region,
                                code: res.code
                            },
                            success: function(res) {
                                console.log(res)
                                if (res.data.code == -1) {
                                    wx.showToast({
                                        icon: "none",
                                        title: res.data.error
                                    })
                                }
                                else if (res.data.code == 1) {
                                    wx.showToast({
                                        icon: "none",
                                        title: res.data.msg
                                    })
                                    app.verified = true
                                    this.setData({
                                        verified: app.verified
                                    })
                                    wx.navigateBack()
                                }
                                else if (res.data.code == 0) {
                                    wx.showToast({
                                        icon: "none",
                                        title: res.data.msg
                                    })
                                }
                            }
                        })
                    }
                    catch (err) {
                        console.log(err)
                        wx.showToast({
                            icon: "none",
                            title: '请先填写信息！'
                        })
                    }
                }
                else {
                    console.log('登录失败！')
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