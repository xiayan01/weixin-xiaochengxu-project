Page({

  /**
   * 页面的初始数据
   */
  data: {
   navList:[],//导航数组
   currentIndexNav:0,//被点击的导航索引
   swiperList:[],//轮播图数组
   videoList:[],//视屏数组
  },
  /**
   * @param 获取导航数组 
   */
  getNavList(){
    let that = this;
    that.setData({
      navList: 
      [
        {
          "text":"首页",
          "id":"0",
        },
        {
          "text":"动画",
          "id":"1",
        },
        {
          "text":"国剧",
          "id":"2",
        },
        {
          "text":"音乐",
          "id":"3",
        },
        {
          "text":"舞蹈",
          "id":"4",
        },
        {
          "text":"科技",
          "id":"5",
        },
        {
          "text":"首页",
          "id":"6",
        },
        {
          "text":"游戏",
          "id":"7",
        }
        ,
        {
          "text":"娱乐",
          "id":"8",
        }
        ,
        {
          "text":"电影",
          "id":"9",
        }
        ,
        {
          "text":"电视剧",
          "id":"10",
        },
        {
          "text":"影视",
          "id":"11",
        },
        {
          "text":"时尚",
          "id":"12",
        },
        {
          "text":"生活",
          "id":"13",
        }

      ]
    })
    
  },
  /**
   * 处理导航点击事件
   */
  activeNav(e){
    // console.log("输出：");console.log(e)
    this.setData({
      currentIndexNav:e.target.dataset.index

    })
  },
  /**
   * 
   * @param 获取轮播图数组
   */
  getSwiperList(){
    let that = this;
    that.setData({
      swiperList: 
      [
        {
          "link":"",
          "imgSrc":"../../img/lunbo1.png",
        },
        {
          "link":"",
          "imgSrc":"../../img/lunbo2.png",
        },
        {
          "link":"",
          "imgSrc":"../../img/lunbo3.png",
        },
      ]
    })
    
  },
  /**
   * 
   * @param 获取视屏数组
   */
  getVideoList(){
    const _this = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        if(res.data.code === 0) {
          _this.setData({
            videosList: res.data.data.videosList
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
    console.log(this.getVideoList())
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})