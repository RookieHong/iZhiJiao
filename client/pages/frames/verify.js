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
                    openid: app.openid
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
    },
    onShow: function() {
        this.setData({
            verified: app.verified
        })
    }
})