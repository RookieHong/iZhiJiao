var app = getApp()
var teams=app.teams
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
        website: ''
    },
    onLoad: function (options) {
        var temp=Number(options.index)
        console.log(temp)
        console.log(teams)
        this.setData({
            index:temp,
            In:teams[temp].In,
            verified: app.verified,
            img: teams[temp].img || '',
            title: teams[temp].title,
            date: teams[temp].date || '某天某月某日',
            location: teams[temp].location || '某某地',
            content: teams[temp].content,
            phone: teams[temp].phone || '123',
            email: teams[temp].email || '123@123.com',
            weibo: teams[temp].weibo || '123',
            wechat: teams[temp].wechat || '123',
            website: teams[temp].website || '123.com.cn'
        })
    },
    inTeam:function(){
        if(this.data.In==false){
            this.setData({
                In: true
            })
            app.teams[this.data.index].In=true
            app.inTeams.push(this.data.index)
        }
    }
})