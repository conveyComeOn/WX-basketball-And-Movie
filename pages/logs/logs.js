//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    loading: true,
    images: [
      "../../images/swiper/1.jpg",
       "../../images/swiper/2.jpg",
       "../../images/swiper/3.jpg",
      "../../images/swiper/4.jpg"
    ],




    
    NBA:[{
      text:"火箭",
      subtext:"休斯顿",
      url:"../../images/NBAimages/HOU.png"
},
{
      text:"灰熊",
      subtext:"孟菲斯",
      url:"../../images/NBAimages/MIA.png"
},{
      text:"篮网",
      subtext:"布鲁克林",
      url:"../../images/NBAimages/BKN.png"
},{
      text:"灰熊",
      subtext:"孟菲斯",
      url:"../../images/NBAimages/MIA.png"
}
,{
      text:"热火",
      subtext:"迈阿密",
      url:"../../images/NBAimages/MIA.png"
}
,{
      text:"雄鹿",
      subtext:"密尔沃基",
      url:"../../images/NBAimages/MIL.png"
}
,{
      text:"太阳",
      subtext:"菲尼克斯",
      url:"../../images/NBAimages/PHX.png"
}
,{
      text:"爵士",
      subtext:"犹他",
      url:"../../images/NBAimages/UTA.png"
}
]


  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
