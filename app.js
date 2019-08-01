//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          let url = 'https://api.weixin.qq.com/sns/jscode2session'
          let data = {
            appid: 'wxced5987574f31805',
            secret: '94799b5f4d95d1ef6762eb2df5b9514f',
            js_code: res.code,
            grant_type: 'authorization_code'
          }
          wx.request({
            url: url,
            data: data,
            method: 'POST',
            /*header: {
              'content-type': 'application/json' // 默认值
            },*/
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            success: res => {
              console.log(res.data);
              this.globalData.openid=res.data.openid
              console.log(this.globalData.openid)
            }
          })
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log("5")
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid: {},
    msgall:{},
    searchzuopinhao:null,
  }
})

/*"tabBar":{
    "list":[
      {"pagePath":"pages/index/index",
      "text":"首页"},
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ],
    "color":"black",
    "position":"bottom",
    "selectedColor":"yellow",
    "backgroundColor":"blue",
    "borderStyle":"black"
  },*/
