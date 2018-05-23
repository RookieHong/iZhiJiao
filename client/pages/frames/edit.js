var app = getApp()

Page({
    data: {
        types: ["公益项目", "支教队"],
        typeIndex: 0,

        cities: ["海口", "厦门", "重庆"],
        cityIndex: 0,

        date: '2018-6-1',

        title: '',
        content: '',
        contentCount: 0,

        wechat: '',
        phone: '',
        weibo: '',
        website: '',
        email: '',

        img: '',
        imgChosen: false
    },
    bindAddtypeChange: function(event) {
        this.setData({
            typeIndex: event.detail.value
        })
    },
    bindTitleChange: function(event) {
        this.setData({
            title: event.detail.value
        })
    },
    bindContentChange: function(event) {
        this.setData({
            content: event.detail.value,
            contentCount: event.detail.cursor
        })
    },
    bindDateChange: function(event) {
        this.setData({
            date: event.detail.value
        })
    },
    bindCityChange: function(event) {
        this.setData({
            city: event.detail.value
        })
    },
    bindWechatChange: function (event) {
        this.setData({
            wechat: event.detail.value
        })
    },
    bindPhoneChange: function (event) {
        this.setData({
            phone: event.detail.value
        })
    },
    bindWeiboChange: function (event) {
        this.setData({
            weibo: event.detail.value
        })
    },
    bindWebsiteChange: function (event) {
        this.setData({
            website: event.detail.value
        })
    },
    bindEmailChange: function (event) {
        this.setData({
            email: event.detail.value
        })
    },
    chooseImage: function() {
        var that=this
        wx.chooseImage({
            count: 1,
            success: function(res) {
                that.setData({
                    imgChosen: true,
                    img: res.tempFiles[0].path
                })
            }
        })
    },
    apply: function() {
        if(this.data.title == '' || this.data.content == '') {
            wx.showToast({
                icon: 'none',
                title: '请将信息填写完整！'
            })
            return
        }
        if(this.data.typeIndex == 0) { //公益项目
            for(var i = 0; i < app.projects.length; i++) {
                if(this.data.title == app.projects[i].title) {
                    wx.showToast({
                        icon: 'none',
                        title: '该公益项目已存在！'
                    })
                    return
                }
            }
            app.projects.push({
                manager: true,
                In: false,
                img: this.data.img,
                title: this.data.title,
                wechat: this.data.wechat,
                phone: this.data.phone,
                content: this.data.content,
                weibo: this.data.weibo,
                website: this.data.website,
                email: this.data.email,
                date: this.data.date,
                location: this.data.cities[this.data.cityIndex]
            })
            wx.showToast({
                icon: 'success',
                title: '公益项目创建成功！',
                complete: function () {
                    setTimeout(function () {
                        wx.navigateBack()
                    }, 1000)
                }
            })
        }
        else if(this.data.typeIndex == 1) { //支教队
            for(var i = 0; i < app.teams.length; i++) {
                if(this.data.title == app.teams[i].title) {
                    wx.showToast({
                        icon: 'none',
                        title: '该支教队已存在！'
                    })
                    return
                }
            }
            app.teams.push({
                manager: true,
                In: false,
                img: this.data.img,
                title: this.data.title,
                wechat: this.data.wechat,
                phone: this.data.phone,
                content: this.data.content,
                weibo: this.data.weibo,
                website: this.data.website,
                email: this.data.email,
                date: this.data.date,
                location: this.data.cities[this.data.cityIndex]
            })
            wx.showToast({
                icon: 'success',
                title: '支教队创建成功！',
                complete: function() {
                    setTimeout(function () {
                        wx.navigateBack()
                    },1000)
                }
            })
        }
    }
})