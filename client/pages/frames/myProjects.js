var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()

Page({
    data: {
        verified: app.verified,

        tabs: ["我参加的", "我管理的"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        inProjects: app.inProjects,
        inTeams:app.inTeams,
        manageProjects: app.manageProjects,
        manageTeams:app.manageTeams,
        recommend: [],
        projects:app.projects,
        teams:app.teams
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
            inProjects:app.inProjects,
            inTeams:app.inTeams,
            manageProjects:app.manageProjects,
            manageTeams:app.manageTeams,
            verified: app.verified,
            projects: app.projects,
            teams: app.teams
        })
        /*var that=this;
        for(var i=0;i<app.projects.length;i++){
            if(app.projects[i].In==true)
                that.data.inProjects.push(i);
            if(app.projects[i].manager==true)
                that.data.manageProjects.push(i);
        }
        for (var i = 0; i < app.teams.length; i++) {
            if (app.teams[i].In == true)
                that.data.inTeams.push(i);
            if (app.teams[i].manager == true)
                that.data.manageTeams.push(i);
        }
        that.setData({                        //遍历projects,teams,将我管理和加入的项目和队的索引分别加入数据
            inProjects:that.data.inProjects,
            manageProjects:that.data.manageProjects,
            inTeams:that.data.inTeams,
            manageTeams:that.data.manageTeams
        })*/
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    openProject: function (e) {
        console.log(e.currentTarget.dataset)
        wx.navigateTo({
            url: 'project?' + 'index=' + e.currentTarget.dataset.index,
        })
    },
    openTeam: function (e) {
        wx.navigateTo({
            url: 'team?' + 'index=' + e.currentTarget.dataset.index,
        })
    },
    modifyProject:function(e){
        wx.navigateTo({
            url:'modify?typeIndex=0&index='+e.currentTarget.dataset.index,
        })
    },
    modifyTeam:function(e){
        wx.navigateTo({
            url: 'modify?typeIndex=1&index=' + e.currentTarget.dataset.index,
        })
    }
});