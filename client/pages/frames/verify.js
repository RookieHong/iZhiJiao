var config = require('../../config')
var utils = require('../../utils/util')

Page({
    data : {
        name: "",
        id: "",
        number: "",

        contactTypes: ["微信", "手机"],
        contactTypeIndex: 0,

        regions: ["海口", "厦门","重庆"],
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
            number: e.detail.value
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
        try {
            wx.request({
                url: config.service.verifyUrl,
                method: 'POST',
                data: {
                    name: name,
                    id: id,
                    number: number,
                    contactType: contactTypes[contactTypeIndex],
                    region: regions[regionIndeex]
                },
                success: (res) => {
                    console.log(res);
                }
            })
        }
        catch (err) {
            wx.showToast({
                icon: "none",
                title: '请先填写信息！',
            })
        }
    }
})