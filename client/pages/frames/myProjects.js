var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()

Page({
    data: {
        verified: app.verified,

        tabs: ["我参加的", "我管理的"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        In: [],
        follow: [],
        recommend: []
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
        //获取In, follow, recommend
    },
    onShow: function() {
        this.setData({
            verified: app.verified
        })
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});