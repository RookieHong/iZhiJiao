var app = getApp()

Page({
    data: {
        verified: false,
        In: false,

        img: '',
        title: '',
        date: '',
        location: '',
        content: '',
        phone: '',
        email: '',
        weibo: '',
        wechat: '',
        website: ''
    },
    onLoad: function (options) {
        this.setData({
            verified: app.verified,
            img: options.img || '',
            title: options.title,
            date: options.date || '某天某月某日',
            location: options.location || '某某地',
            content: options.content,
            phone: options.phone || '123',
            email: options.email || '123@123.com',
            weibo: options.weibo || '123',
            wechat: options.wechat || '123',
            website: options.website || '123.com.cn'
        })
    }
})