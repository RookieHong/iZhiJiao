var app = getApp()

Page({
    data: {
        avatar_url: app.userInfo.avatarUrl,
        nickName: app.userInfo.nickName,
        verified: app.verified
    },
    onShow: function() {
        this.setData({
            verified: app.verified
        })
    },
    openPage: function(options) {
        wx.navigateTo({
            url: options.currentTarget.dataset.url
        })
    }
})