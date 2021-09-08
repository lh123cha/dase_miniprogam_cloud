// 云函数入口文件
const getEssay = require('./getessay/index')
const addEssay = require('./addessay/index')
const getHistory = require('./getHistory/index')
const getAuthor = require('./getAuthor/index')
const getDetail = require('./getDetail/index')
const getGraph = require('./getGraph/index')

exports.main = async (event, context) => {
  switch (event.type) {
    case 'getEssay':
      return await getEssay.main(event, context);
    case 'addEssay':
      return await addEssay.main(event, context);
    case 'getHistory':
      return await getHistory.main(event,context);
    case 'getAuthor':
      return await getAuthor.main(event,context);
    case 'getDetail':
      return await getDetail.main(event,context);
    case 'getGraph':
      return await getGraph.main(event,context);
    case 'getSingleGrapth':
      return await getGraph.getsingle(event,context);
  }
}