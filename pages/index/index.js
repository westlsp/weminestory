//index.js
//获取应用实例
const app = getApp()
var requestm = require('../../utils/request_m.js')

Page({
  data:{
    denglume:false,
    btn_ani:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  onLoad: function () {
    var that=this
    if (app.globalData.userInfo) {
        console.log(app.globalData.openid)
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      /*----------------------------------------------------1--------------- */
      requestm.msgget(function (data) {
        app.globalData.msgall = data
        console.log(data)
        that.setData({
          denglume: true,
        })
        wx.navigateTo({
          url: '../test/test',
        })
      })
      console.log("1")
    } 
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      //console.log(app.globalData.openid)
      // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
        //app.globalData.userInfo=res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        /*----------------------------------------------------2--------------- */
          requestm.msgget(function(data){
            app.globalData.msgall=data
            console.log(data)
            that.setData({
             denglume: true,
            })
            wx.navigateTo({
              url: '../test/test',
            })
          })
          console.log("2")
       }
    }
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          console.log("3")
        }
      })
    }

  },
  getUserInFo: function(e) {
    var that=this
    console.log(e)
    console.log("4")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.request({
      url: 'http://47.101.55.60/wxapp/login_user.php',
      data:{
        openid: app.globalData.openid,
        name: app.globalData.userInfo.nickName
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success:res=>{
        console.log(res.data)
        /*----------------------------------------------------3--------------- */
        requestm.msgget(function (data) {
          app.globalData.msgall = data
          console.log(data)
          var animation = wx.createAnimation({
            duration: 2000,
            timingFunction: "linear",
            delay: 0,
            transformOrigin: "50% 50%",
          })
          animation.width("100%").backgroundColor('#29dd75').step();     //边旋转边放大
          //导出动画数据传递给组件的animation属性。
          that.setData({
            btn_ani: animation.export(),
          })
          var timer1 = setTimeout(function () {
            wx.navigateTo({
              url: '../test/test'
            })
          }, 2000)
        })
      }
    })
  }
})

/*wx.request({
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
          app.globalData.msgall = res.data
          console.log(res.data.zansum)
          this.setData({
            denglume: true,
          })
          wx.navigateTo({
            url: '../test/test',
          })
        }
      })*/           1

/*wx.request({
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
            app.globalData.msgall = res.data
            console.log(res.data)
            this.setData({
              denglume:true,
            })
            wx.navigateTo({
              url: '../test/test',
            })
          }
        })*/                          2

/*wx.request({
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
            app.globalData.msgall = res.data
            console.log(res.data.zansum)
            var animation = wx.createAnimation({
              duration: 2000,
              timingFunction: "linear",
              delay: 0,
              transformOrigin: "50% 50%",
            })
            animation.width("100%").backgroundColor('#29dd75').step();     //边旋转边放大
            //导出动画数据传递给组件的animation属性。
            this.setData({
              btn_ani: animation.export(),
            })
            var timer1 = setTimeout(function () {
              wx.navigateTo({
                url: '../test/test'
              })
            }, 2000)
          }
        })*/                         3