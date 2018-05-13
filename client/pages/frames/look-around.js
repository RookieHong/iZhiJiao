Page({
    data: {
        inputShowed : false,
        inputVal : '',
        projects: [],
        places: [],
        teams: [],
        sources: []
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
    }
})