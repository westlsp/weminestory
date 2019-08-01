const app = getApp();
var backchange = require('../../utils/backchange.js')
import { $wuxToptips } from '../../dist/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roading_success:false,
    text_color:'white',
    back_user:"",
    geqian_css:true,
    msgall: app.globalData.msgall,
    zuopinji: app.globalData.msgall.finishstory,
    inputtext:"",
    geqian_btnqiehuan:0,
    change_text:"修改",
    change_geqianami:"",
  },
  none:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  back_change:function(){
    var that=this
    var this_ci=this
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      sourceType: 'album',
      success(res) {
        var tempFilePaths = res.tempFilePaths
        wx.setStorage({
          key: 'back_user',
          data: tempFilePaths[0],
          success:function(){
            console.log("img3")
          }
        })
        backchange.getImageColor(tempFilePaths[0]).then(function(value){
          that.setData({
            text_color:value,
          })
        })
        this_ci.setData({
            back_user:tempFilePaths[0],
        })
        wx.uploadFile({
          url: 'http://47.101.55.60/wxapp/back_user.php', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file_img',
          formData: {
            openid:app.globalData.openid,
          },
          header: {
            "Content-Type": "multipart/form-data"//记得设置
          },
          /*header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },*/
          /*header: {
            'content-type': 'application/json',
          },*/
          success:function(res1) {
            console.log(res1.data)
            if (res1.data=="fail2"){
               $wuxToptips().warn({
                hidden: false,
                text: '服务端保存失败，本地保存成功，请选择2M以下图片',
                duration: 2000,
                success() {

                },
              })
            }
            // do something
          }
        })
      }
    })
  },
  storyfunc: function () {
    wx.navigateTo({
      url: '../minestory/minestory',
    })
  },
  msgfunc: function () {
    wx.navigateTo({
      url: '../messagecall/messagecall',
    })
  },
  bindinput_geqian:function(e){
    this.setData({
      inputtext: e.detail.value,
    })
  },
  change_geqian:function(){
    
    if (this.data.geqian_btnqiehuan==0){
      console.log("1");
        var ani=wx.createAnimation({
          duration: 500,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50%",
        })
        ani.backgroundColor("#7aabe8").step();
      this.setData({
        geqian_btnqiehuan: 1,
        change_text: "确认",
        change_geqianami: ani.export(),
        geqian_css:false,
      })
    }
    else if (this.data.geqian_btnqiehuan==1)
    {
      console.log("2");
      wx.request({
        url: 'http://47.101.55.60/wxapp/geqian_change.php',
        data: {
          openid: app.globalData.openid,
          geqian: this.data.inputtext,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: res => {
          console.log(res.data)
          var ani = wx.createAnimation({
            duration: 500,
            timingFunction: '"linear"',
            delay: 0,
            transformOrigin: "50% 50%",
          })
          ani.backgroundColor('red').step();
          this.setData({
            geqian_btnqiehuan: 0,
            change_text: "修改",
            change_geqianami: ani.export(),
            geqian_css:true,
          })
          app.globalData.msgall.geqian = this.data.inputtext;
          wx.showToast({
            title: '个性签名修改成功',
            icon: 'none',
            duration: 1000
          })
        }
      })
    }
  },
  onLoad: function (options) {
    var that=this

    wx.getStorage({
      key: 'back_user',
      success: function(res) {
          that.setData({
            back_user:res.data,
          })
          console.log("img1")
          console.log(res.data)
          var imgurl=res.data
          backchange.getImageColor(imgurl).then(function (value) {
          that.setData({
            text_color: value,
          })
        })
          /*wx.getImageInfo({
            src:imgurl,
            success(res) {
              ctx.drawImage(res.path, 0, 0, 100, 100)
              ctx.draw()
            }
          })*/
      },
      fail:function(){
        //wx.request获取
        if (app.globalData.msgall.backurl != null && app.globalData.msgall.backurl!="")
        {
          backchange.getImageColor(app.globalData.msgall.backurl).then(function (value) {
            that.setData({
              text_color: value,
            })
          })
          that.setData({
            back_user: app.globalData.msgall.backurl,
          })
          wx.setStorage({
            key: 'back_user',
            data: app.globalData.msgall.backurl,
            success:function(res){
              console.log("img2")
            }
          })
        }
      }
    })

    wx.request({
      url: 'http://47.101.55.60/wxapp/finishstoryadd.php',
      data:{
        openid: app.globalData.openid,
        name: app.globalData.userInfo.nickName,
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        that.setData({
          msgall: res.data,
          zuopinji: JSON.parse(res.data.finishstory),
          roading_success:true,
        })
        app.globalData.msgall = res.data
        if (res.data.geqian == null) {
          app.globalData.msgall.geqian = "";
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})