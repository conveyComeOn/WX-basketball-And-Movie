//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     motto: 'Hello World',
    
      userInfo: {},

  NBA:[{
      text:"火箭",
      url:"../../images/NBAimages/HOU.png"
},
{
      text:"灰熊",
      url:"../../images/NBAimages/MIA.png"
}
]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../movice/movice' 
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
