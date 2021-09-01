// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    authority:false,//判断是否是管理员用户，用于添加文章
  },
  handleGetUserInfo(e){
    const {userInfo}=e.detail;
    wx.setStorageSync("userinfo",userInfo);
    wx.navigateBack({
      delta: 1
    });
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo});
  },
  authentication:function(){
    wx.cloud.callFunction({
      name:'EssayFunctions',
      data:{
        type:'getAuthor'
      }
    }).then((resp)=>{
      console.log(resp);
      this.setData({
        authority:resp.result.openid
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.authentication();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

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