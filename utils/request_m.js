const app=getApp()

function msgget(cb){
  var resdata
  wx.request({
    url: 'http://47.101.55.60/wxapp/msgget.php',
    data: {
      openid: app.globalData.openid,
      name: app.globalData.userInfo.nickName
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
    },
    success: res => {
      resdata=res.data
      typeof cb == "function" && cb(resdata)
    }
  })
}
module.exports={
  msgget:msgget,
}