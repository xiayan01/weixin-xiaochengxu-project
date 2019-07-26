// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,//视频详情
    othersList: [],//推荐视频
    commentData: []//评论数据
  },
  /**
   * 
   * @param 获取视频详情
   */
  getCurrentVideo(videoId){
    const _this = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id='+videoId,
      success(res){
        //console.log("获取视频详情:");console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            videoInfo: res.data.data.videoInfo
          });
        }
      }
    })
  },
  /**
   * 
   * @param 获取推荐视频
   */
  getOthersList(videoId){
    const _this = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoId,
      success(res){
        //console.log("获取推荐视频:");console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            othersList: res.data.data.othersList
          });
        }
      }
    });
  },
  /**
   * 
   * @param 获取评论数据
   */
  getCommentList(videoId){
    const _this = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      success(res){
        // console.log("获取评论数据:");console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            commentData: res.data.data.commentData
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面传参:");console.log(options);
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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