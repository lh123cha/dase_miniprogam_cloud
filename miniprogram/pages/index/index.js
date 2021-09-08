// index.js
// 获取应用实例
const app = getApp()

var time= require("../../utils/util.js");
Page({
  data: {
    currentIndexNav:0,//被点击首页导航菜单的索引
    winHeight:0,
    navlist:[
      {
        id:1,
        text:"党建动态"
      },
      {
        id:2,
        text:"今日党史"
      },
      {
        id:3,
        text:"图解党建"
      }
    ],
    swiperList:[],
    newsList:[],
    eventsList:[],
    graphList:[],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),// 如需尝试获取用户信息可改为false,
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    });
    if (e.target.dataset.index == 0) {
      this.setData({
        winHeight:488+this.data.newsList.length*250
      })
    } else if (e.target.dataset.index == 1){    
        this.setData({
          winHeight:2200
        })
    }
  },
  showDetail(e){
    // debugger;
    var newsID = e.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: '/pages/detail/detail?newsID='+newsID,
    })
  },
  showGraphDetail(e){
    var graphgID = e.currentTarget.dataset.graphid;
    wx.navigateTo({
      url: '/pages/graphParty/graph?graphID='+graphgID,
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面加载函数
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    wx.showLoading({
      title: '',
    })
    this.getList();
    // console.log(this.data.swiperList);
  },
  getList(){
    var that=this;
    wx.cloud.callFunction({
      name:'EssayFunctions',
      config:{
        env:that.data.envId
      },
      data:{
        type:'getHistory',
        date:"4月24日"
      }
    }).then((resp)=>{
      that.setData({
        eventsList:resp.result.data,
      });
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });

    wx.cloud.callFunction({
      name: 'EssayFunctions',
      config: {
        env: that.data.envId
      },
      data: {
        type: 'getEssay'
      }
    }).then((resp) => {
      for(var j=0;j<resp.result.data.length;j++){
        resp.result.data[j].time=time.formatTime(resp.result.data[j].time);
      }
      // resp.result.data.time=time.formatTime(resp.result.data.time);
      that.setData({
        newsList: resp.result.data,
      });
      console.log(that.data.newsList.slice(1,3));
      that.setData({
        swiperList:that.data.newsList.slice(0,2)
      })
      console.log(that.data.swiperList);
      that.setData({
        winHeight:488+that.data.newsList.length*250
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });

    //获得图解党建列表
    wx.cloud.callFunction({
      name: 'EssayFunctions',
      config: {
        env: that.data.envId
      },
      data: {
        type: 'getGraph'
      }
    }).then((resp) => {
      for(var j=0;j<resp.result.data.length;j++){
        resp.result.data[j].time=time.formatTime(resp.result.data[j].time);
      }
      // resp.result.data.time=time.formatTime(resp.result.data.time);
      that.setData({
        graphList: resp.result.data,
      });
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
