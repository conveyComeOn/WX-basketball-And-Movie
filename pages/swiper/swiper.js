

Page({
  data:{
   menuitem:[ {
        currentpage:'0',
        text:"西部"
    },{
      currentpage:'1',
        text:"东部"
    },{
        currentpage:'2',
        text:"NCAA"
    },{
       currentpage:'3',
        text:"NBA"
    }],
     currentMenuID : '0',
     interval:2000,
     duration:1000,
     now:'0',
       pages:[{
    text:"我是第一页"
  }
  ,{
text:"我是第二页"
  },{
    text:"我是第三页"
  },{
    text:"我是第四页"
  }
  ]
  },


  bindchange:function(e){
var that=this;
console.log(e.currentTarget);
     
      that.setData({
currentMenuID:e.currentTarget.id,
now:e.currentTarget.id

      })
   
  },
  move:function(e){
     console.log(e);
     this.setData(
       {
         currentMenuID:e.detail.current
       }
     )
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  
  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){

  },
  onHide:function(){
    // 页面隐藏

  },
  onUnload:function(){
    // 页面关闭

  }
})
