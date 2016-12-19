//movice.js
//先获取实例

Page({
  data:{
    movie:[],
    lastid:0,
    num:"nimabi",
    morehidden:"false"

   
  },
  loadmore:function(offset){
    var limit=10;
    var that=this;

   wx.request({
      // url: 'http://m.maoyan.com/movie/list.json?type=hot&offset={{offset}}&limit={{limit}}',
       url: 'http://m.maoyan.com/movie/list.json?type=hot',


       
      data: {offset:offset,limit:limit},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
      
        var mdata=res.data.data.movies;
        
        var oldArr=that.data.movie;

        var newArr=oldArr.concat(mdata)
        var len=newArr.length;
        that.setData({lastid: newArr.length})
       
        that.setData({movie:newArr})

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
       

      }
    })
  },
  onLoad:function(options){
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    this.loadmore(0);


   
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
  
  },
  showmore:function(event){
    var that=this;
    var num=that.data.lastid;
    
    //草拟吗
    //取 page 中的data 里的数据 要使用 this.data.lastid
   this.loadmore(num);
 
   if(num>=31){
     that.setData({
       morehidden:true

     })
    wx.showModal({
      title: '提示',
      content: '只有这么多了',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
   }
  
  },
  cellclick:function(e){

  }
 
})

 