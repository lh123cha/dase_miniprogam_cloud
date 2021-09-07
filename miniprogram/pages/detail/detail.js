// miniprogram/pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],
    detailChosen: {
      titile: "数据学院教工第一党支部开展“改革潮涌，奋楫者先”主题党日活动",
      time: "2020-12-24 12:00:00",
      content: "<p>12月23日下午，数据科学与工程学院教工第一党支部围绕学习改革开放史和习近平总书记在浦东开发开放30周年庆祝大会上的重要讲话精神，开展“改革潮涌，奋楫者先”主题党日活动，支部书记金澈清主持。 </p><img src='http://zzb.ecnu.edu.cn/_upload/article/images/f8/cb/698259244e76bd172450147c29e1/23161c4c-07ce-415e-bbc4-0e5b2e5c4a8c.jpg' style='width:100%;'><p>学院党委书记李欣以《学好改革开放史，砥砺奋进新征程》为主题，为支部党员教师讲党课。她以“数”说改革开放40年各领域突出 贡献为切入点，全方位展现了我国改革开放的新格局；聚焦“扶贫开发”政策，指出“打赢脱贫攻坚战就是共产党人守初心担使命的生动体现”。 </p>"
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