var app = getApp()
Page({
    data: {
        inputShowed : false,
        inputVal : '',
        projects: app.projects,
        teams: app.teams,
        places: app.places,
        sources:app.sources,
    },
    showInput : function() {
        this.setData({
            inputShowed : true
        })
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    onLoad: function() {
        //加载projects, places, teams, sources
        this.setData({
            projects: app.projects,
            teams: app.teams,
            places: app.places,
            sources: app.sources,
        })
    },
    openProject:function(e){
      wx.navigateTo({
        url: 'project?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content + '&website=' + e.currentTarget.dataset.website + '&goal=' + e.currentTarget.dataset.goal + '&phone=' + e.currentTarget.dataset.phone + '&profile=' + e.currentTarget.dataset.profile + '&date=' + e.currentTarget.dataset.date+'&location='+e.currentTarget.dataset.location+'&email='+e.currentTarget.dataset.email+'&weibo='+e.currentTarget.dataset.weibo+'&weixin='+e.currentTarget.dataset.weixin,
      })
    },
    openPlace: function (e) {
      wx.navigateTo({
          url: 'place?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content +'&img=' +e.currentTarget.dataset.img+'&profile=' + e.currentTarget.dataset.profile + '&date='+e.currentTarget.dataset.date,
      })
    },
    openTeam: function(e) {
      wx.navigateTo({
        url: 'team?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content + '&wechat=' + e.currentTarget.dataset.wechat + '&phone=' + e.currentTarget.dataset.phone
      })
    },
    openSource: function (e) {
      wx.navigateTo({
        url: 'source?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content,
      })
    }
})