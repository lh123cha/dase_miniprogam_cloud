const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库查询结果
  try{
    res=db.collection('detail').where({
      news_id:event.news_id
    }).get();
  }catch(exption){
    console.log("Get Error");
  }
  return res;
  // return db.collection('eventList').where({
  //   date: event.date,
  // }).get();
}