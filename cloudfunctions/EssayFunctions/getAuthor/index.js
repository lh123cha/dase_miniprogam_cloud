//cloudfuctions/login/login.js
const cloud = require('wx-server-sdk')
// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db=cloud.database();
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  const wxContext = cloud.getWXContext()
  userinfo={
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  };
  db.collection('UserPermission').get().then(res2=>{
    if(userinfo.openid === res2.data[0]._openid){
      return {
        authority:true,
        openid:userinfo.openid
      }
     }
  })
  return {
    authority:false,
    openid:userinfo.openid
  }
}