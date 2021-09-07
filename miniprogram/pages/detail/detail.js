// miniprogram/pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],
    detailChosen: {
      titile: "",
      time: "",
      content: ""
    },
    newsId: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    // debugger;
    console.log(params);
    console.log("传递过来的新闻id为："+params.newsID);
    var that=this;
    wx.cloud.callFunction({
      name:'EssayFunctions',
      config:{
        env:that.data.envId
      },
      data:{
        type:'getDetail',
        news_id:params.newsID
      }
    }).then((resp)=>{
      that.setData({
        detailChosen:resp.result.data[0]
      });
      console.log(this.data.detailChosen);
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });
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