

  Page({
   data:{
     movie:[],

    
   },
   onLoad:function(options){
     var that=this;
     // 页面初始化 options为页面跳转所带来的参数
     wx.request({
       url: 'http://m.maoyan.com/movie/246363.json',
       data: {},
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       // header: {}, // 设置请求的 header
       success: function(res){
         console.log(res.data.data.MovieDetailModel);
         var moviedata=res.data.data.MovieDetailModel;
        that.setData({
           movie:moviedata
         })
        
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
     
   },
   onReady:function(){
     // 页面渲染完成
  
   },
   onShow:function(){
     // 页面显示
    
   },
   onHide:function(){
     // 页面隐藏
    
   },
   onUnload:function(){
     // 页面关闭
  
   }
 })