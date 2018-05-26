var app = getApp()
var projects = app.projects
Page({
    data: {
        verified: false,
        In: false,
        index:0,
        img: '',
        title: '',
        date: '',
        location: '',
        content: '',
        phone: '',
        email: '',
        weibo: '',
        wechat: '',
        website: '',
    },
    onLoad: function(options) {
        var temp=Number(options.index)
        console.log(temp)
        this.setData({
            index:temp,
            In:projects[temp].In,
            verified: app.verified,
            img: projects[temp].img || '',
            title: projects[temp].title,
            date: projects[temp].date || '某天某月某日',
            location: projects[temp].location || '某某地',
            content: projects[temp].content,
            phone: projects[temp].phone || '123',
            email: projects[temp].email || '123@123.com',
            weibo: projects[temp].weibo || '123',
            wechat: projects[temp].wechat || '123',
            website: projects[temp].website || '123.com.cn'
        })
    },
    inProject:function(){
        if(this.data.In==false){
            this.setData({
                In:true
            })
            app.projects[this.data.index].In=true
            app.inProjects.push(this.data.index)
        }
    }
})