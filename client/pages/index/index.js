Page({
  data: {
    SwiperimgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  openLookAround : function() {
      wx.navigateTo({
          url: '../frames/look-around',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
      })
  },
  openVerify: () => {
      wx.navigateTo({
          url: '../frames/verify',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })
  }
})