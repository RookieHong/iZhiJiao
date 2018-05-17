var app = getApp()

Page({
    data: {
        avatar_url: '../../images/user-unlogin.png',
        verified: app.verified
    },
    onShow: function() {
        this.setData({
            verified: app.verified
        })
    }
})