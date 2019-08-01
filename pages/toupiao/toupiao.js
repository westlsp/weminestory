const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zuopinnum:null,
    toupiao_sum:null,
    openid:null,
  },
  toupiao_btn:function(e){
    wx.request({
      url: 'http://47.101.55.60/wxapp/toupiao_add.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        toupiao_man: e.currentTarget.dataset.openid,
        openid: app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        //console.log(JSON.parse(res.data.namesum)[0].zanman)
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://47.101.55.60/wxapp/toupiao_msg.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        var arr_namesum = JSON.parse(res.data.namesum);
        /*console.log(JSON.parse(res.data.namesum))
        for (var i = 0; i < arr_namesum.length; i++) {
          if (app.globalData.openid == arr_namesum[i].openid) {
            this.setData({
              yijing_mingming: true,
            })
            break;
          }
        }*/
        this.setData({
          zuopinnum: app.globalData.searchzuopinhao,
          toupiao_sum: arr_namesum,
          openid: app.globalData.openid,
        })
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