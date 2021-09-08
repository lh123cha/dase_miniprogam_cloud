const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库查询结果
  return await db.collection('GraphicParty').get()
}
exports.getsingle = async(event,context) => {
  try{
    res=db.collection('GraphicParty').where({
      _id:event.graph_id
    }).get();
  }catch(exption){
    console.log("Get Error");
  }
  return res;
}