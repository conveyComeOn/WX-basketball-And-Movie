//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs' 
    })
  },



  sunsaop(e) {
const mode = e.detail.value? "sun" : "sao";
wx.showToast({
  title:`好贱啊啊${mode}`,
  icon: 'success',
  duration: 500
})
    
  }
})
