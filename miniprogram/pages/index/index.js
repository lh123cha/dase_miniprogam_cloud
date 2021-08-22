// index.js
// 获取应用实例
const app = getApp()

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
    swiperList:[
      {
        image:"http://dase.ecnu.edu.cn//dase-module-admin/uploads/image/20210409/1617957626259028186.png",
        title:"党史学习教育动员会"
      },
      {
        image:"http://dase.ecnu.edu.cn//dase-module-admin/uploads/image/20210419/1618834506340049006.jpeg",
        title:"“党在我心中”主题党日活动"
      }
    ],
    newsList:[
      {
        image:"http://zzb.ecnu.edu.cn/_upload/article/images/f8/cb/698259244e76bd172450147c29e1/23161c4c-07ce-415e-bbc4-0e5b2e5c4a8c.jpg",
        title:"教工第一党支部开展“改革潮涌，奋楫者先”主题党日活动",
        publisher:"数据学院党委",
        time:"2020-12-28"
      },
      {
        image:"http://zzb.ecnu.edu.cn/_upload/article/images/3b/ed/f63c5ff4446b8a626d569c035ae2/e10dec48-4bab-418d-91e4-5175473404b1.jpg",
        title:"学习贯彻五中全会精神，有效推进党建与育人相融合",
        publisher:"数据学院党委",
        time:"2020-11-30"
      },
      {
        image:"http://zzb.ecnu.edu.cn/_upload/article/images/5b/1f/7c0dacae471c87a938fb17639327/ef4f0202-4961-47b9-b5d2-7b5e8094af35.jpg",
        title:"“传承红色基因 聆听四史故事”“四史”主题党日活动",
        publisher:"数据学院党委",
        time:"2020-11-24"
      },
      {
        image:"http://zzb.ecnu.edu.cn/_upload/article/images/38/0f/934d8c044b3fa05bd772ce1edd73/9b4c4073-8711-4e27-b38a-062497fd5e65.png",
        title:"研究生第一党支部参观《陈云与党风廉政建设》专题展",
        publisher:"数据学院党委",
        time:"2020-10-20"
      },
      {
        image:"http://zzb.ecnu.edu.cn/_upload/article/images/31/44/f0507a784da281018e2111361bf5/51a24553-36fb-4457-b3bb-58f3820a9534.png",
        title:"《铭记党的历程，永远不忘初心》“四史”学习教育专题党课",
        publisher:"数据学院党委",
        time:"2020-06-23"
      },
      
    ],
    eventsList:[
      {
        date:"1939年4月24日",
        texts:["毛泽东在抗日军政大学生产运动初步总结大会上讲话。讲话指出：抗大同别的机关一样，生产的第一阶段的任务已完成了，这证明中共中央所决定的计划是可以实现的。历史上几千年来做官的不耕田，读书人也不耕田，假使全国党政军学，办党的，做官的，大家干起来，那还不是一个新的中国吗？你们将工农商学兵结合起来了。你们读书叫学，开荒是农，打窑洞做鞋子是工，办合作社是商，你们又是军，你们是工农商学兵结合在一个人身上，文武配合，知识与劳动结合起来，可算是天下第一。"]
      },
      {
        date:"1945年4月24日",
        texts:["  毛泽东向中共七大提交《论联合政府》的书面政治报告。报告分析了国际国内形势，系统地总结了抗战中两条不同指导路线的斗争和人民战争的基本经验，阐述了中国共产党在民族民主革命阶段的一般纲领和具体纲领，指出中国人民应当争取打败侵略者、建设新中国的前途。","关于一般纲领，报告指出：我们的主张是，在彻底打败日本侵略者之后，建立一个全国绝大多数人民为基础而在工人阶级领导之下的统一战线的民主联盟的国家制度，即新民主主义的国家制度.关于具体纲领，报告提出的主要内容是：彻底消灭日本侵略者，不许中途妥协；废止国民党一党专政，建立民主的联合政府；争取人民的自由；实行人民的统一；建立人民的军队；实行农村改革（抗日期间实行减租减息）；发展民族工业；发展文化教育事业，团结知识分子；争取少数民族在政治、经济、文化的解放和发展；建立和平、独立、民主的外交。在这些具体纲领中，最重要的就是建立联合政府。一切这些具体纲领，如果没有一个举国一致的民主的联合政府，就不可能顺利地在全中国实现。"]
      },  
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),// 如需尝试获取用户信息可改为false
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
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.setData({
      winHeight:488+this.data.newsList.length*250
    })
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
