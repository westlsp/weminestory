const app=getApp();
var timework=require('../../utils/timework.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading_success:false,
    right: [{text: '阅读',style: 'background-color: #F4333C; color: white',}],
    daixu_call:false,
    xihuan_call:false,
    shuaxin_ami:"",
    input_ami:"",
    msg_ico:0,
    userInfo:{},
    msgall: app.globalData.msgall,
    inputtext:null,
    tiaozhuan:false,
    arrays:{},
    dxtiaozhuan: false,
    search_number:null,
    minestory:false,
    msgcall:false,
    chuang_shi_call:false,
    xu_shi_call:false,
    wan_shi_call:false,
    zansum:null,
    story_finsih_msg:null,
    xu_shi_msg:null,
    wan_jie_msg:null,
    shuaxin_zanshu:null,
    shuaxin_zan:false,
    shuaxin_xushi:false,
    xu_shi_nummsg:null,
    shuaxin_finish:null,
    story_finsih_nummsg:null,
    shuaxin_wanjie:false,
    shuaxin_name:false,
    name_msg:null,
    toupiao_arrsum:null,
    toupiao_arrfen:null,
    mingname_arrsum: null,
    mingname_arrfen: null,
    xu_shimsgsum:null,
  },
  searchBtn:function(){
    wx.request({
      url: 'http://47.101.55.60/wxapp/search.php',
      data: {
        content: this.data.inputtext,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        var ddata = res.data
        console.log(ddata)
        var arry = []
        for (var i in ddata) {
          arry.push(ddata[i])
          console.log(ddata[i])
        }
        console.log(arry.constructor)
        this.setData({
          tiaozhuan: true,
          dxtiaozhuan: false,
          minestory: false,
          msgcall: false,
          arrays: arry,
        })
      }
    })
  },
  onPulling:function(){
    console.log('asdas')
  },
  onRefresh:function(){
    console.log('asdas111')
  },
  schu_btn:function(e){
    var that=this
    wx.getStorage({
      key: 'daixu',
      success: function(res) {
        var redata=res.data
        for(var i=0;i<redata.length;i++)
        {
          if (redata[i].numstory == e.currentTarget.dataset.numstory)
          {
            redata.splice(i, 1);
            that.setData({
              arrays: redata,
            })
            break;
          }
        }
        wx.setStorage({
          key: 'daixu',
          data: redata,
          success:function(res){
            console.log(redata)
          }
        })
      },
    })
  },
  daixufunc:function(){
    var that=this
    wx.getStorage({
      key: 'daixu',
      success: function(res) {
        that.setData({
          daixu_call: true,
          arrays: res.data,
        })
      },
      fail:function(){
        var arr=[]
        wx.setStorage({
          key: 'daixu',
          data: arr,
          success:function(res){
            console.log("1")
            that.setData({
              daixu_call: true,
              arrays: res.data,
            })
          }
        })
      }
    })
  },
  xihuanfunc:function(){
    wx.request({
      url: 'http://47.101.55.60/wxapp/like_output.php',
      data: {
        zuopinnum: this.data.msgall.minelike,
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          xihuan_call:true,
          arrays: res.data,
        })
      }
    })
  },
  shouyefunc:function(){
    this.setData({
      daixu_call:false,
      xihuan_call:false,
      minestory: false,
      tiaozhuan: false,
      dxtiaozhuan: false,
      msgcall: false,
    })
  },
  /*search:function(e){
    wx.request({
      url: 'http://47.101.55.60/wxapp/search.php',
      data: {
        content: this.data.inputtext,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        var ddata = res.data
        console.log(ddata)
        var arry = [] 
        for (var i in ddata) {
          arry.push(ddata[i])
          console.log(ddata[i])
        }
        console.log(arry.constructor)
        this.setData({
          tiaozhuan: true,
          dxtiaozhuan: false,
          minestory: false,
          msgcall: false,
          arrays: arry,
        })
      }
    })
  },*/
  shuaxin_clk:function(){
    var that=this
    this.setData({
      shuaxin_ami: "shuaxin_clk_ami",
    })
    wx.request({
      url: 'http://47.101.55.60/wxapp/xustory.php',
      data: {

      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        if(res.data=="fail"){
          wx.showToast({
            title: '加载失败',
            icon: 'none',
            duration: 1000
          })
        }
        var ddata = res.data
        console.log(ddata)
        var arrlength = this.data.arrays.length
        var arry = this.data.arrays
        for (var i = 0; i < ddata.length;i++)
        {
          for (var j = 0; j < arry.length;j++)
          {
            if (ddata[i].id == arry[j].id)
            {
              break;
            }
            if(j==arry.length-1)
            {
              arry.push(ddata[i]);
            }
          }
        }
        console.log(arry.length)
        console.log(this.data.arrays.length)
        if (arry.length > arrlength)
        {
          that.setData({
            arrays: arry,
          })
          wx.showToast({
            title: '为你加载' +(arry.length - arrlength).toString()+'条新内容',
            icon: 'none',
            duration: 1000
          })
        }else{
          wx.showToast({
            title: '没有新内容',
            icon: 'none',
            duration: 1000
          })
        }
        console.log(arry)
        var time=setTimeout(function(){
            that.setData({
            shuaxin_ami: "",
          })
        },1000)
      }
    })
  },
  backcall_shi:function(){
    this.setData({
    chuang_shi_call: false,
    xu_shi_call:false,
    wan_shi_call: false,
    })
  },
  backcall:function(){
    this.setData({
      tiaozhuan: false,
      dxtiaozhuan: false,
      minestory: false,
      msgcall: false,
    })
  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../personmsg/personmsg'
    })
  },
  chuangshifunc:function(){
    wx.navigateTo({
      url: '../makestory/makestory',
    })
  },
  chakan2:function(e){
    console.log(e.currentTarget.dataset.numstory)
    app.globalData.searchzuopinhao = e.currentTarget.dataset.numstory
    wx.navigateTo({
      url: '../search/search',
    })
  },
  chakan1:function(e){
    app.globalData.searchzuopinhao = e.currentTarget.dataset.numstory
    wx.navigateTo({
      url: '../search/search',
    })
  },
  xushifunc: function () {
    wx.request({
      url: 'http://47.101.55.60/wxapp/xustory.php',
      data: {
        
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        var ddata = res.data
        console.log(ddata)
        var arry = []
        for (var i in ddata) {
          arry.push(ddata[i])
          console.log(ddata[i])
        }
        console.log(arry.constructor)
        this.setData({
          dxtiaozhuan: true,
          tiaozhuan: false,
          minestory: false,
          msgcall: false,
          arrays: arry,
        })
      }
    })
  },
  storyfunc: function () {
    this.setData({
      minestory:true,
      tiaozhuan: false,
      dxtiaozhuan: false,
      msgcall: false,
      chuang_shi_call: false,
      xu_shi_call: false,
      wan_shi_call: false,
    })
  },
 msgfunc: function () {
   wx.request({
     url: 'http://47.101.55.60/wxapp/getmsg.php',
     data: {
       openid: app.globalData.openid,
     },
     method: 'POST',
     header: {
       'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
     },
     success: res => {
       this.setData({
         msgcall: true,
         tiaozhuan: false,
         dxtiaozhuan: false,
         minestory: false,
         msg_ico:0,
       })
       wx.setStorage({
         key: "msg_ico",
         data: 0,
         success: function () {
           console.log('写入value1成功')
         },
         fail: function () {
           console.log('写入value1发生错误')
         }
       })
     }
   })
  },
 inputtextfunc:function(e){
   if(e.detail.value=="")
   {
      this.setData({
        tiaozhuan: false,
        dxtiaozhuan: this.data.dxtiaozhuan,
        minestory: this.data.minestory,
        msgcall: this.data.msgcall,
      })
   }
    this.setData({
      inputtext: e.detail.value,
    })
 },
 text_focus:function(e){
   console.log("1");
    var animation=wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%",
    })
    animation.width("79%").step();
    this.setData({
      input_ami:animation.export(),
    })
 },
 text_blur:function(e){
   console.log("2")
   var animation = wx.createAnimation({
     duration: 400,
     timingFunction: "linear",
     delay: 0,
     transformOrigin: "50% 50%",
   })
   animation.width("40%").step();
   this.setData({
     input_ami: animation.export(),
   })
 },
 chuang_shi_func:function(){
   console.log(JSON.parse(this.data.msgall.zichuangstory))
   wx.request({
     url: 'http://47.101.55.60/wxapp/getzichuang.php',
     data: {
       zuopinnum: this.data.msgall.zichuangstory,
     },
     method: 'POST',
     header: {
       'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
     },
     success: res => {
       console.log(res.data)
       this.setData({
         chuang_shi_call: true,
         xu_shi_call: false,
         wan_shi_call: false,
         arrays: res.data,
       })
     }
   })
 },
 xu_shi_func: function () {
   wx.request({
     url: 'http://47.101.55.60/wxapp/getzichuang.php',
     data: {
       zuopinnum: this.data.msgall.xushistory,
     },
     method: 'POST',
     header: {
       'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
     },
     success: res => {
       console.log(res.data)
       this.setData({
         chuang_shi_call: false,
         wan_shi_call: false,
         xu_shi_call: true,
         arrays: res.data,
       })
     }
   })
 },
 wan_shi_func: function () {
   wx.request({
     url: 'http://47.101.55.60/wxapp/getzichuang.php',
     data: {
       zuopinnum: this.data.msgall.finishstory,
     },
     method: 'POST',
     header: {
       'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
     },
     success: res => {
       console.log(res.data)
       this.setData({
         arrays: res.data,
         chuang_shi_call: false,
         xu_shi_call: false,
         wan_shi_call: true,
       })
     }
   })
 },
  sousuo:function(){
      wx.request({
        url: 'http://47.101.55.60/wxapp/search.php',//
        data:{
          content:this.data.inputtext,
        },
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success:res=>{
          var ddata = res.data
          console.log(ddata)
          if(ddata=="fail"){
            wx.showToast({
              title: '请输入内容',
              icon:'none',
              duration:1000,
            })
          }else{
            var arry=[] 
            for(var i in ddata){
              arry.push(ddata[i])
              console.log(ddata[i])
            }
            console.log(arry.constructor)
            this.setData({
              tiaozhuan:true,
              dxtiaozhuan: false,
              minestory: false,
              msgcall: false,
              arrays:arry,
            })
          }
        }
      })
  },
  zanmsg_btn:function(){
    var that=this
    function msg_msg(zan,zanshu,bool) {
      this.zan = zan
      this.zanshu = zanshu
      this.bool = bool
    }
    var msg_msg1 = new msg_msg(this.data.zansum, this.data.shuaxin_zanshu, 0)
    wx.setStorage({
      key: "msg",
      data: msg_msg1,
      success: function () {
        console.log('写入value1成功')
      },
      fail: function () {
        console.log('写入value1发生错误')
      }
    })
    this.setData({
      shuaxin_zan:false,
      msg_ico: --that.data.msg_ico
    })
  },
  xushi_msg_btn:function(e){
    var xushi_arr = this.data.xu_shi_msg;
    var xushi_arrnum = this.data.xu_shi_nummsg;
    xushi_arr.splice(e.currentTarget.dataset.index, 1)
    xushi_arrnum.splice(e.currentTarget.dataset.index, 1)
    console.log(e.currentTarget.dataset.index)
    this.setData({
      xu_shi_msg: xushi_arr,
      xu_shi_nummsg:xushi_arrnum,
    })
  },
  xushi_chakan_btn:function(e){
    function xushi_msg_msg(msg, arrnum, arr, bool) {
      this.msg = msg
      this.arrnum = arrnum
      this.arr = arr
      this.bool = bool
    }
    wx.getStorage({
      key: 'xushi_msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        var xushi_msg = res.data
        xushi_msg.bool[e.currentTarget.dataset.index]=0
        wx.setStorage({
          key: "xushi_msg",
          data: xushi_msg,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      },
      fail: function () {
        wx.setStorage({
          key: "xushi_msg",
          data: "",
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })
    app.globalData.searchzuopinhao = this.data.xu_shi_nummsg[e.currentTarget.dataset.index]
    var xushi_arr = this.data.xu_shi_msg;
    var xushi_arrnum = this.data.xu_shi_nummsg;
    xushi_arr.splice(e.currentTarget.dataset.index, 1)
    xushi_arrnum.splice(e.currentTarget.dataset.index, 1)
    console.log(e.currentTarget.dataset.index)
    this.setData({
      xu_shi_msg: xushi_arr,
      xu_shi_nummsg: xushi_arrnum,
    })
    wx.navigateTo({
      url: '../search/search',
    })
  },
  finish_chakan_btn:function(e){
    function xushi_msg_msg(msg, arrnum, arr, bool) {
      this.msg = msg
      this.arrnum = arrnum
      this.arr = arr
      this.bool = bool
    }
    wx.getStorage({
      key: 'finishshi_msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        var finishshi_msg = res.data
        finishshi_msg.bool[e.currentTarget.dataset.index] = 0
        wx.setStorage({
          key: "finishshi_msg",
          data: finishshi_msg,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      },
      fail: function () {
        wx.setStorage({
          key: "finishshi_msg",
          data: "",
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })
    app.globalData.searchzuopinhao = this.data.story_finsih_nummsg[e.currentTarget.dataset.index]
    var finish_arr = this.data.story_finsih_msg;
    var finish_arrnum = this.data.story_finsih_nummsg;
    finish_arr.splice(e.currentTarget.dataset.index, 1)
    finish_arrnum.splice(e.currentTarget.dataset.index, 1)
    console.log(e.currentTarget.dataset.index)
    this.setData({
      story_finsih_msg: finish_arr,
      story_finsih_nummsg: finish_arrnum,
    })
    wx.navigateTo({
      url: '../search/search',
    })
  },
  finish_msg_btn:function(e){
    var finish_arr = this.data.story_finsih_msg;
    var finish_arrnum = this.data.story_finsih_nummsg;
    finish_arr.splice(e.currentTarget.dataset.index, 1)
    finish_arrnum.splice(e.currentTarget.dataset.index, 1)
    console.log(e.currentTarget.dataset.index)
    this.setData({
      story_finsih_msg: finish_arr,
      story_finsih_nummsg: finish_arrnum,
    })
  },
  toupiao:function(e){
    var num = this.data.wan_jie_msg;
    app.globalData.searchzuopinhao = num[e.currentTarget.dataset.index]
    console.log('../search/search?openid' + app.globalData.openid)
      wx.navigateTo({
        url: '../search/search?',
      })
  },
  mingming:function(e){
    var num = this.data.name_msg;
    app.globalData.searchzuopinhao = num[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mingname_time=[]
    var mingname_timefen = []
    var bool_mg1 = []
    var bool_mg2 = []
    var bool_mg3=[]
    var bool_mg4 = []
    var time_mysql
    var hour
    var minute
    var myDate = new Date()
    var toupiao_timefen = []
    var toupiao_time=[]
    var name_numarr = []
    var wanjie_numarr=[]
    var xushi_numarr=[]
    var xushi_arr = []
    var finish_numarr = []
    var finish_arr = []
    var that=this;
    var msg ;
    var xushi_msg ;
    var finishshi_msg;
    var wanjie_msg;
    var zanjian;
    var name_msg_ok;
    function toupiao_class(msg, numarr, arrsum, bool) {
      this.msg = msg
      this.numarr = numarr
      this.arrsum = arrsum
      this.bool = bool
    }
    function xushi_msg_msg(msg, arrnum, arr, bool) {
      this.msg = msg
      this.arrnum = arrnum
      this.arr = arr
      this.bool = bool
    }
    function timer_obj(day,hour,min,second)
    {
      this.day=day
      this.hour = hour
      this.min = min
      this.second = second
    }
    function msg_msg(zan, zanshu, bool) {
      this.zan = zan
      this.zanshu = zanshu
      this.bool = bool
    }
    var timer_obj1=new timer_obj();
    wx.getStorage({
      key: 'name_msg_ok',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        name_msg_ok = res.data
        console.log(res.data)
        if (name_msg_ok != "" && name_msg_ok != null)
        {
        for (var i = 0; i < (name_msg_ok.bool).length; i++) {
          if (name_msg_ok.bool[i] == 1) {
            mingname_time.push(name_msg_ok.arrsum[i])
            name_numarr.push(name_msg_ok.numarr[i])
            bool_mg4.push(name_msg_ok.bool[i])
            time_mysql = new Date(name_msg_ok.arrsum[i])

            timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
            hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
            timer_obj1.hour = parseInt(hour / 3600000)
            minute = hour % 3600000
            timer_obj1.min = parseInt(minute / 60000)
            timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)

            mingname_timefen.push(timer_obj1)
          }
        }
        console.log(res.data)
        that.setData({
          mingname_arrsum: mingname_time,
          mingname_arrfen: mingname_timefen,
          name_msg: name_numarr,
          shuaxin_name: true,
        })
        var obj
        var obj_sum = that.data.mingname_arrfen
        var timer3 = setInterval(function () {
          that.setData({
            mingname_arrfen: timework.timing(timer3, obj_sum),
          })
        }, 1000)
        }
      },
      fail: function () {
        var toupiao_obj = new toupiao_class("", [], [], [])
        wx.setStorage({
          key: "name_msg_ok",
          data: toupiao_obj,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })
    wx.getStorage({
      key: 'msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        msg = res.data
        console.log(res.data)
        if(msg.bool==1)
        {
          that.setData({
            shuaxin_zan: true,
            shuaxin_zanshu: msg.zanshu,
            zansum: msg.zan,
          })
        }
      },
      fail: function () {
        var msg_msg1 = new msg_msg("", "", "")
        wx.setStorage({
            key: "msg",
            data: msg_msg1,
            success: function () {
              console.log('写入value1成功')
            },
            fail: function () {
            console.log('写入value1发生错误')
            }
        })
     }
    })
    wx.getStorage({
      key: 'msg_ico',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        console.log(res.data)
        that.setData({
          msg_ico:res.data,
        })
      },
      fail: function () {
        wx.setStorage({
          key: "msg_ico",
          data: 0,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })
    wx.getStorage({
      key: 'xushi_msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        xushi_msg = res.data
        console.log(xushi_msg)
        if (xushi_msg!="" && xushi_msg!=null)
        {
        for (var i = 0; i < (xushi_msg.bool).length;i++)
        {
          if (xushi_msg.bool[i]==1)
          {
            xushi_arr.push(xushi_msg.arr[i])
            xushi_numarr.push(xushi_msg.arrnum[i])
            bool_mg1.push(xushi_msg.bool[i])
          }
        }
        that.setData({
          shuaxin_xushi: true,
          xu_shi_msg: xushi_arr,
          xu_shi_nummsg: xushi_numarr,
          xu_shimsgsum: xushi_msg.msg,
        })
        }
      },
      fail: function () {
        var xushi_obj = new xushi_msg_msg("", [], [], [])
        wx.setStorage({
          key: "xushi_msg",
          data: xushi_obj,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })

    wx.getStorage({
      key: 'finishshi_msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        finishshi_msg = res.data
        console.log(finishshi_msg)
        if (finishshi_msg!=null && finishshi_msg!="")
        {
        for (var i = 0; i < (finishshi_msg.bool).length; i++) {
          if (finishshi_msg.bool[i] == 1) {
            finish_arr.push(finishshi_msg.arr[i])
            finish_numarr.push(finishshi_msg.arrnum[i])
            bool_mg2.push(finishshi_msg.bool[i])
          }
        }
        that.setData({
          shuaxin_finish: true,
          story_finsih_msg: finish_arr,
          story_finsih_nummsg: finish_numarr
        })
        }
      },
      fail: function () {
        var xushi_obj = new xushi_msg_msg("", [], [], [])
        wx.setStorage({
          key: "finishshi_msg",
          data: xushi_obj,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })
    wx.getStorage({
      key: 'wanjie_msg',
      success: function (res) {
        // 异步接口在success回调才能拿到返回值
        wanjie_msg = res.data
        console.log(res.data)
        if(wanjie_msg!="" && wanjie_msg!=null)
        {
        for (var i = 0; i < (wanjie_msg.bool).length; i++) {
          if (wanjie_msg.bool[i] == 1) {
            toupiao_time.push(wanjie_msg.arrsum[i])
            wanjie_numarr.push(wanjie_msg.numarr[i])
            bool_mg3.push(wanjie_msg.bool[i])
            time_mysql = new Date(wanjie_msg.arrsum[i])

            timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
            hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
            timer_obj1.hour = parseInt(hour / 3600000)
            minute = hour % 3600000
            timer_obj1.min = parseInt(minute / 60000)
            timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)

            toupiao_timefen.push(timer_obj1)
          }
        }
        
        that.setData({
          toupiao_arrfen: toupiao_timefen,
          toupiao_arrsum: toupiao_time,
          wan_jie_msg: wanjie_numarr,
          shuaxin_wanjie: true,
        })
        var obj_sum = that.data.toupiao_arrfen
        var timer2 = setInterval(function () {
          that.setData({
            toupiao_arrfen: timework.timing(timer2, obj_sum),
          })
        }, 1000)
        }
      },
      fail: function () {
        var toupiao_obj = new toupiao_class("", [], [], [])
        wx.setStorage({
          key: "wanjie_msg",
          data: toupiao_obj,
          success: function () {
            console.log('写入value1成功')
          },
          fail: function () {
            console.log('写入value1发生错误')
          }
        })
      }
    })    

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
      success: res1 => {
        app.globalData.msgall = res1.data
        console.log(res1.data)
        console.log(res1.data.zansum)
        this.setData({
          msgall: app.globalData.msgall,
          loading_success:true,
        })
        var msgall_xushistory = this.data.msgall.xushistory
        var msgall_chuangshistory = this.data.msgall.zichuangstory
        console.log(JSON.parse(msgall_xushistory).num[0])
        var timer = setInterval(function () {
          wx.request({
            url: 'http://47.101.55.60/wxapp/getmsg.php',
            data: {
              openid: app.globalData.openid,
              xuzuopinnum: msgall_xushistory,
              chuangzuopinnum: msgall_chuangshistory,
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
            },
            success: res => {
              var a1 = res.data[0];
              var a2 = JSON.stringify(res.data[1]);
              var a3 = JSON.stringify(res.data[2]);
              var a4 = JSON.stringify(res.data[3]);
              var a5 = JSON.stringify(res.data[4]);
              var a6 = JSON.stringify(res.data[5]);
              var a7 = JSON.stringify(res.data[6]);
               /*-----------------------------------------------------------msgzan_msg*/
              console.log(msg.zan)
              if (msg.zan != a1.zansum) {
                console.log("有新消息1")
                if (msg.zan == "")
                {
                  msg.zan=0;
                  zanjian = a1.zansum - msg.zan;
                }else{
                  zanjian = a1.zansum - msg.zan;
                }
                msg = a1.zansum;
                that.setData({
                  shuaxin_zan: true,
                  shuaxin_zanshu: zanjian,
                  zansum: msg,
                })
                var msg_msg1 = new msg_msg(msg,zanjian,1)
                msg = msg_msg1
                that.setData({
                  msg_ico: ++that.data.msg_ico,
                })
                console.log(msg_msg1)
                wx.setStorage({
                  key: "msg",
                  data: msg_msg1,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                wx.setStorage({
                  key: "msg_ico",
                  data: that.data.msg_ico,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
              }
               /*-----------------------------------------------------------xushi_msg*/
              if (xushi_msg.msg != a2){
                console.log("有新消息2")
                if (xushi_msg.msg != "") {
                  for (var i = 0; i < JSON.parse(xushi_msg.msg).length; i++) {
                    for (var j = JSON.parse(JSON.parse(xushi_msg.msg)[i]).openidsum.length; j < JSON.parse(JSON.parse(a2)[i]).openidsum.length; j++) {
                      xushi_numarr.push(JSON.parse(msgall_xushistory).num[i])
                      xushi_arr.push(JSON.parse(JSON.parse(a2)[i]).openidsum[j])
                      bool_mg1.push(1)
                      ++that.data.msg_ico
                    }
                  }
                }
                else if(xushi_msg.msg == ""){
                  for (var i = 0; i < JSON.parse(a2).length; i++) {
                    for (var j = 0; j < JSON.parse(JSON.parse(a2)[i]).openidsum.length; j++) {
                      xushi_numarr.push(JSON.parse(msgall_xushistory).num[i])
                      xushi_arr.push(JSON.parse(JSON.parse(a2)[i]).openidsum[j])
                      bool_mg1.push(1)
                      ++that.data.msg_ico
                    }
                  }
                }
                console.log(xushi_arr)
                xushi_msg.msg = a2
                that.setData({
                  shuaxin_xushi:true,
                  xu_shi_msg: xushi_arr,
                  xu_shi_nummsg: xushi_numarr,
                  xu_shimsgsum: a2,
                  msg_ico:that.data.msg_ico,
                })
                var xushi_obj = new xushi_msg_msg(a2, xushi_numarr, xushi_arr, bool_mg1)
                wx.setStorage({
                  key: "xushi_msg",
                  data: xushi_obj,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                wx.setStorage({
                  key: "msg_ico",
                  data: that.data.msg_ico,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
              }
              /*-----------------------------------------------------------finishshi_msg*/
              if (finishshi_msg.msg != a3)  {
                console.log("有新消息3")
                if (finishshi_msg.msg != "") {
                  for (var i = 0; i < JSON.parse(finishshi_msg.msg).length; i++) {
                    for (var j = JSON.parse(JSON.parse(finishshi_msg.msg)[i]).openidsum.length; j < JSON.parse(JSON.parse(a3)[i]).openidsum.length; j++) {
                      finish_numarr.push(JSON.parse(msgall_chuangshistory).num[i])
                      finish_arr.push(JSON.parse(JSON.parse(a3)[i]).openidsum[j])
                      bool_mg2.push(1)
                      ++that.data.msg_ico
                    }
                  }
                }
                else if(finishshi_msg.msg == "") {
                  for (var i = 0; i < JSON.parse(a3).length; i++) {
                    for (var j = 0; j < JSON.parse(JSON.parse(a3)[i]).openidsum.length; j++) {
                      finish_numarr.push(JSON.parse(msgall_chuangshistory).num[i])
                      finish_arr.push(JSON.parse(JSON.parse(a3)[i]).openidsum[j])
                      bool_mg2.push(1)
                      ++that.data.msg_ico
                    }
                  }
                }
                finishshi_msg.msg = a3
                that.setData({
                  shuaxin_finish: true,
                  story_finsih_msg: finish_arr,
                  story_finsih_nummsg: finish_numarr,
                  msg_ico: that.data.msg_ico,
                })
                var finishmsg_obj = new xushi_msg_msg(a3, finish_numarr, finish_arr, bool_mg2)
                console.log(finishmsg_obj)
                wx.setStorage({
                  key: "finishshi_msg",
                  data: finishmsg_obj,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                wx.setStorage({
                  key: "msg_ico",
                  data: that.data.msg_ico,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
              }
               /*-----------------------------------------------------------wanjie_msg*/
              console.log(wanjie_msg)
              if (wanjie_msg.msg != a4) {
                console.log("作品完结申请")
                if (wanjie_msg.msg != "") {
                  
                for (var i = 0; i < JSON.parse(wanjie_msg.msg).length;i++)
                {
                  if (JSON.parse(wanjie_msg.msg)[i] != JSON.parse(a4)[i])
                  {
                    if (i < JSON.parse(msgall_xushistory).num.length)
                    {
                      wanjie_numarr.push(JSON.parse(msgall_xushistory).num[i])
                      toupiao_time.push(JSON.parse(a6)[i])
                      time_mysql = new Date(JSON.parse(a6)[i])
                      timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
                      hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
                      timer_obj1.hour=parseInt(hour / 3600000)
                      minute = hour % 3600000
                      timer_obj1.min = parseInt(minute / 60000)
                      timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)
                      
                      toupiao_timefen.push(timer_obj1)
                      bool_mg3.push(1)
                      ++that.data.msg_ico
                    }
                    else
                    {
                      wanjie_numarr.push(JSON.parse(msgall_chuangshistory).num[i])
                      toupiao_time.push(JSON.parse(a6)[i])
                      time_mysql = new Date(JSON.parse(a6)[i])
                      timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
                      hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
                      timer_obj1.hour = parseInt(hour / 3600000)
                      minute = hour % 3600000
                      timer_obj1.min = parseInt(minute / 60000)
                      timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)
                      toupiao_timefen.push(timer_obj1)
                      bool_mg3.push(1)
                      ++that.data.msg_ico
                    }
                  }
                }
                }
                wanjie_msg.msg=a4
                console.log(wanjie_msg.msg)
                that.setData({
                  toupiao_arrfen: toupiao_timefen,
                  toupiao_arrsum:toupiao_time,
                  wan_jie_msg: wanjie_numarr,
                  shuaxin_wanjie:true,
                  msg_ico: that.data.msg_ico,
                })
                var toupiao_obj = new toupiao_class(a4, wanjie_numarr, toupiao_time, bool_mg3)
                console.log(toupiao_obj)
                //wanjie_msg = a4
                wx.setStorage({
                  key: "wanjie_msg",
                  data: toupiao_obj,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                wx.setStorage({
                  key: "msg_ico",
                  data: that.data.msg_ico,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                  console.log("timer")
                  var obj_sum = that.data.toupiao_arrfen
                  var timer2 = setInterval(function () {
                    that.setData({
                      toupiao_arrfen: timework.timing(timer2, obj_sum),
                    })
                  }, 1000)
              }
              /*-----------------------------------------------------------name_msgok_msg*/
              console.log(name_msg_ok)
              if (name_msg_ok.msg != a5) {
                console.log("作品完结进行命名")
                if (name_msg_ok.msg != "") {
                  console.log(name_msg_ok.msg)
                  for (var i = 0; i < JSON.parse(name_msg_ok.msg).length; i++) {
                    if (JSON.parse(name_msg_ok.msg)[i] != JSON.parse(a5)[i]) {
                      if (i < JSON.parse(msgall_xushistory).num.length) {
                        name_numarr.push(JSON.parse(msgall_xushistory).num[i])
                        mingname_time.push(JSON.parse(a7)[i])

                        time_mysql = new Date(JSON.parse(a7)[i])

                        timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
                        hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
                        timer_obj1.hour = parseInt(hour / 3600000)
                        minute = hour % 3600000
                        timer_obj1.min = parseInt(minute / 60000)
                        timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)

                        mingname_timefen.push(timer_obj1)
                        bool_mg4.push(1)
                        ++that.data.msg_ico
                      }
                      else {
                        name_numarr.push(JSON.parse(msgall_chuangshistory).num[i])
                        mingname_time.push(JSON.parse(a7)[i])

                        time_mysql = new Date(JSON.parse(a7)[i])

                        timer_obj1.day = parseInt((time_mysql.valueOf() - myDate.valueOf()) / 86400000)
                        hour = (time_mysql.valueOf() - myDate.valueOf()) % 86400000
                        timer_obj1.hour = parseInt(hour / 3600000)
                        minute = hour % 3600000
                        timer_obj1.min = parseInt(minute / 60000)
                        timer_obj1.second = parseInt(parseInt(minute % 60000) / 1000)

                        mingname_timefen.push(timer_obj1)
                        bool_mg4.push(1)
                        ++that.data.msg_ico
                      }
                    }
                  }
                }
                name_msg_ok.msg = a5
                console.log(name_msg_ok.msg)
                that.setData({
                  mingname_arrsum: mingname_time,
                  mingname_arrfen: mingname_timefen,
                  name_msg: name_numarr,
                  shuaxin_name: true,
                  msg_ico: that.data.msg_ico,
                })
                var toupiao_obj = new toupiao_class(a5, name_numarr, mingname_time, bool_mg4)
                wx.setStorage({
                  key: "name_msg_ok",
                  data: toupiao_obj,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                wx.setStorage({
                  key: "msg_ico",
                  data: that.data.msg_ico,
                  success: function () {
                    console.log('写入value1成功')
                  },
                  fail: function () {
                    console.log('写入value1发生错误')
                  }
                })
                var obj_sum = that.data.mingname_arrfen
                var timer3 = setInterval(function () {
                  that.setData({
                    mingname_arrfen: timework.timing(timer3, obj_sum),
                  })
                }, 1000)
              }
            }
          })
        }, 5000)
        clearInterval(timer);
      }
    })
    /*------------- 没有按钮点击无法获取*/
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
    /*------------------------- */
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})