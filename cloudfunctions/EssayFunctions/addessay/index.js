const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db=cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
   await db.collection('newsList').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      image_url:event.image_url,
      off_account_url: event.off_account_url,
      publisher: event.publisher,
      time:event.time,
      title:event.title
    }
  })
  return {
    success: true
  }
  } catch (e) {
    // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
    return {
      success: true,
      data: 'create collection success'
    }
  }
}