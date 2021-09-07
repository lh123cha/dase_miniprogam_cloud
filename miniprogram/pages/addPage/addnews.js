// pages/addPage/addnews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_url:'',
    content_url:'',
    title:'',
    publisher:'数据学院党委',
    time:'',
    content:"",
    modalHidden:true
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

  },

  //表单提交
  formSubmit(e){
    console.log(e);
    var that=this;
    var title=e.detail.value.title;
    var image_url=e.detail.value.image_url;
    var content_url=e.detail.value.content_url;
    var publisher=e.detail.value.publisher;
    var content=e.detail.value.content;
    var time=Date.now();
    if(publisher==''){
      publisher='数据学院党委'
    }
    that.setData({
      title:title,
      image_url:image_url,
      content_url:content_url,
      time:time,
      publisher:publisher,
      content:content,
      modalHidden:false
    })
    wx.cloud.callFunction({
      name:'EssayFunctions',
      config:{
        env:that.data.envId
      },
      data:{
        type:'addEssay',
        title:that.data.title,
        image_url:that.data.image_url,
        content_url:that.data.content_url,
        time:that.data.time,
        publisher:that.data.publisher,
        content:that.data.content
      }
    }).then((resp)=>{
      console.log(resp);
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });
  },
  //模态框取消
  modalCancel(){
    wx.showToast({
      title: '取消提交',
      icon:'none'
    })
    this.setData({
      modalHidden:true,
    })
  },
  //模态框确定
  modalConfirm() {
    wx.showToast({
      title: '提交成功',
      icon:'success'
    })
    this.setData({
      modalHidden: true
    })
  },
})