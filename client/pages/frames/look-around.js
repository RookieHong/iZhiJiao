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
        console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: 'project?' + 'index=' + e.currentTarget.dataset.index,
      })
    },
    openPlace: function (e) {
      wx.navigateTo({
          url: 'place?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content +'&img=' +e.currentTarget.dataset.img+'&profile=' + e.currentTarget.dataset.profile + '&date='+e.currentTarget.dataset.date,
      })
    },
    openTeam: function(e) {
      wx.navigateTo({
          url: 'team?' + 'index=' + e.currentTarget.dataset.index,
      })
    },
    openSource: function (e) {
      wx.navigateTo({
        url: 'source?' + 'title=' + e.currentTarget.dataset.title + '&content=' + e.currentTarget.dataset.content,
      })
    }
})