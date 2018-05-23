Page({
  data: {
    SwiperimgUrls: [
        '../../images/0.jpg',
        '../../images/1.jpg',
        '../../images/2.jpg',
        '../../images/3.jpg',
        '../../images/4.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    imgheights: [],
    //图片宽度  
    imgwidth: 750,
    //默认  
    current: 0  
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
  },
  imageLoad: function (e) {
      //获取图片真实宽度  
      var imgwidth = e.detail.width,
          imgheight = e.detail.height,
          //宽高比  
          ratio = imgwidth / imgheight;
      console.log(imgwidth, imgheight)
      //计算的高度值  
      var viewHeight = 750 / ratio;
      var imgheight = viewHeight
      var imgheights = this.data.imgheights
      //把每一张图片的高度记录到数组里  
      imgheights.push(imgheight)
      this.setData({
          imgheights: imgheights,
      })
  },
  bindchange: function (e) {
      console.log(e.detail.current)
      this.setData({ current: e.detail.current })
    }  
})