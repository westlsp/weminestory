const app=getApp();
import { $wuxToptips } from '../../dist/index'
const icon_clear = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqvcX1taj99Mqn0zz+VZFx4lRcrbwlv9pzgflWNTEU6fxM2p0KlT4Ub9RyzxQjMsiIP9o4rj59Zvp8gzFAeycVRZmc5Zix9Sc1xTzOK+BXO2GWyfxux182vWEWcSGQ+iLmqMvidR/qrYn3dsVztFckswrS20OqOX0Vvqa8niO9b7oiQey5qs+s6g/W5Yf7oAqjRWEsRVlvJm8cNSjtFE7X12/3rmY/8DNRGWRvvSMfqabRWTnJ7s0UIrZBknrRRRSKFDMOjEfjUi3M6fdnlX6ORUVFNSa2YnFPdFpNTvk+7dS/i2f51YTXtQTrKr/7yj+lZtFXGvVjtJmboUnvFG7H4mmH+tt42/3SR/jVyLxJav8A6yOSM/TIrlqK3jjq8etzGWBoy6WO4h1OznwI7hMnsTg/rVsEEZBzXnlTQ3lzbn91M6ewPH5V1QzP+eP3HLPLP5Jfed7RXK2/iO5jwJkSUevQ1rW2vWU+AzmJvR+n512U8ZRqbO3qcdTCVobo1KKRWV1DKwYHoQaWuo5gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikJxQAtISAMk4FZV7rttbZSL99IOyngfjXPXmp3V6T5khCf3F4FcdbG06ei1Z10cFUqavRHR3eu2ltlUPnOOydPzrCutcvLnIV/KT0Tr+dZtFeVVxtWppey8j1KWCpU9bXfmBJJySST3NFFFcp1hRRRSGFFKFLHABP0qVbWZv4MfWnYlyS3IaKtrYufvOB9KeLFO7safKyHVgijRWiLOEdifxpwtYR/AKfKyfbxMyitT7PD/AM8xS/Z4v+ea0coe3XYyqK1DbQ/88xTTaQn+D9aOVh7eJm0VoGyiPQsPxphsP7sn5ilyspVolKirDWUo6YP41E0MifeQj8KVmUpxezGUUUUiwooooAmt7u4tWzDKyewPH5VtWniUjC3UWf8AbT/CuforeliKlL4WYVcNTq/EjvLa8gu13QSq47gdR+FT158kjxOHjZlYdCpwa2rLxFLHhLpfMX++vX/69enRzGMtKmh5lbL5x1hqdPRUFtdwXce+GQMO/qKnr0U01dHntNOzCiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikZgqksQAOpNc/qPiDGYrPBPQyn+lZVa0KSvJmtKjOq7RRq3upW9iuZGy56IvU1zF9rFzekrny4v7inr9TVB3aRy7sWY9STzSV4tfGzq6LRHs4fBQpavVhRRRXEdoUUVNHaySc42j1NOxLkluQ05I3k+6pNX47SNOSNx96sAADA6VSiYyr9iilix++wHsKnS1iT+HJ96noqrIydST6iAAcAAfSloopkBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADGijf7yA1A9ih+4xX9atUUrIak1szNe1lTnG4e1QdDg1s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2RLyfvMeprsw2DlWd3ojixOLjSVo6si03S4tPi4w0pHzP/Qe1X6KK9yEIwjyxWh4c5ym+aT1CiiirJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDM1LR4b4F1xHN/eHf61ytzazWkvlzIVPY9j9K72obi2huojHMgZfftXFicFGr70dGduHxkqXuy1RwVFa+oaDNbEyW+ZYvT+If41kV4lSlOm7SR7NKrCqrxYUUUVmahRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAh8ahnG44XuasveBRtiXpxk1Topp2JcFJ3Y53Z2yxJNNoooKSsFFFT21pPeSbIYyx7nsPrTjFydkKUlFXZBWxpuhSXOJbnMcXZe7f4Vq6docNpiSXEs3qei/StavVw+X296r9x5WIx9/dpfeRwwxwRrHEgVB0AqSiivUSS0R5bd9WFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArNv9Gt73LgeXL/AHlHX6itKionTjNWkrlQnKDvF2OIvNLubIkyJuT++vI/+tVOvQiAQQRkVlXugW1xl4v3L/7I4P4V5dbLmtab+R6lHMVtUXzOSoq7d6Vd2eS8e5B/GnI/+tVKvNnCUHaSselCcZq8XcKKKKgsKKKKACiiigAooooAKKKKACiiigAooooAKKKKBBRRRQMKKKKACiiigAoop8UUk7hIkZ2PZRmmk3ohNpK7GU6ON5XCRoWY9ABmtqz8OSyYa6fy1/uLyfzrftrK3s02wxqvqe5/Gu6jgKk9ZaI4K2Ppw0hqzCsfDrPh7tto/wCeann8TXQwwRW8YjiRUUdgKkor16OHp0laKPKq151XeTCiiitjEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACs+60ezuslo9jn+JODWhRUzhGatJXKjOUHeLsctc+HLiPJgdZV9DwayZrea3bbLEyH/aFd/TXRZF2uoYHsRmuCpl1OWsHY7qeY1I6TVzz6iuxn0KxnyRGY29UOP0rMn8MyDmCdW9nGP1ringK0dtTthj6Mt9DBoq/No1/DnMBYeqHNUnjkjOJEZD/tDFcsqc4/ErHVGrCXwu42iiiszQKKKKACiiigAooooAKKKKACiirEVjdT/wCrt5G99vH51SjKWyJlKMd2V6K1ofD17JzJsiHucn9K0YPDVumDNK8h9BwK6YYKtPpb1OaeNox639DmOvSr1tpF7c4KwlF/vPwK6yCwtbb/AFMKKfXHP51Zrsp5at5v7jjqZk38CMK18NwphriQyH+6vArYht4rdNkMaovooqWivQp0KdP4UcFStUqfGwooorUyCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmlQwwwBHvRRSArSabZS/ftovqFwarSaDp7dImX6OaKKxq0qbWsV9xtTqzT0kypPoFoi5V5h/wACH+FZFxZxxE7WY/U0UV5FaEVsj1qM5PdlRlApooorie53LYmiiVyMk1p2ukQT43PKPoR/hRRXRSinujmqya2Zop4esR181vq3+FWk0bT4+lsp/wB4k/zoor16FKna/KvuPJrVal/if3lmO3gi/wBXDGn+6oFS0UV1pJbHI23uLRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q=='
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{
      label: 'save',
      icon: icon_clear,
    },{
        label: 'like',
        icon: icon_clear,
    },{
        label: 'fuyi',
        icon: icon_clear,
    },{
        label: 'jubao',
        icon: icon_clear,
    },{
        label: 'dianzan',
        icon: icon_clear,
    },{
        label: 'xiangqin',
        icon: icon_clear,
    }],
    trues:true,
    falses:false,
    content:"",
    xushi_data:"",
    mingming_kou:false,
    jiantou:"icon-zuojiantou",
    jiantou_ami:"",
    xiaochuankou:false,
    jubao_clk:false,
    yuan_xu:false,
    fuyi_xu:false,
    fuyi_content:null,
    fuyizhuan:false,
    shuju:null,
    tiaozhuan:false,
    wanjiefou:0,
    xushizhong:0,
    xushi_content:null,
    wenneiarray:null,
    toupiao:0,
    toupiao_man:0,
    toupiao_finish:0,
    name:null,
    yijing_mingming:false,
  },
  fabbtns:function(e){
    var that = this
    if (e.detail.index === 0) {
      if (this.data.tiaozhuan || this.data.fuyizhuan || this.data.fuyi_xu || this.data.yuan_xu){
        function sdata(numstory, content) {
          this.numstory = numstory
          this.content = content
        }
        wx.getStorage({
         key: "daixu",
          success: function (res) {
            var redata = res.data
            var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
            redata.push(datanew)
            wx.setStorage({
             key: "daixu",
             data: redata,
              success: function (res) {
              console.log("sucs")
            }
          })
        },
        fail: function (res) {
          var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
          var datajson = []
          datajson.push(datanew)
          wx.setStorage({
            key: "daixu",
            data: datajson,
            success: function (res) {
              console.log("sucs")
            }
          })
        }
      })
    }else{
        $wuxToptips().warn({
          hidden: false,
          text: '此状态下不能保存',
          duration: 2000,
          success() { 

          },
        })
    }
    } else if (e.detail.index === 1){
      wx.request({
        url: 'http://47.101.55.60/wxapp/add_like.php',
        data: {
          storynum: app.globalData.searchzuopinhao,
          openid: app.globalData.openid,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: res => {
          console.log(res.data)
        }
      })
    } else if (e.detail.index === 2){
      if (this.data.fuyi_content == null && !this.data.jubao_clk && !this.data.wanjiefou && !this.data.xushizhong && !this.data.toupiao){
      wx.request({
        url: 'http://47.101.55.60/wxapp/xushiing.php',
        data: {
          storynum: app.globalData.searchzuopinhao,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: res => {
          console.log(res.data)
          this.setData({
            tiaozhuan: true,
            fuyizhuan: true,
          })
          wx.getStorage({
            key: 'daixu',
            success: function (res) {
              var redata = res.data
              for (var i = 0; i < redata.length; i++) {
                if (redata[i].numstory == app.globalData.searchzuopinhao) {
                  wx.showModal({
                    title: '提示',
                    content: '载入上次未完成(注意故事变化)',
                    success(res) {
                      if (res.confirm) {
                        that.setData({
                          content: redata[i].content,
                        })
                        redata.splice(i, 1);
                        wx.setStorage({
                          key: 'daixu',
                          data: redata,
                          success: function (res) {
                            console.log(redata)
                          }
                        })
                      }
                      else if (res.cancel) {
                        console.log('用户点击取消')
                        redata.splice(i, 1);
                        wx.setStorage({
                          key: 'daixu',
                          data: redata,
                          success: function (res) {
                            console.log(redata)
                          }
                        })
                      }
                    }
                  })
                  break;
                }
              }
            },
          })
        }
      })
      }else{
        $wuxToptips().warn({
          hidden: false,
          text: '此状态下不能复议',
          duration: 2000,
          success() {

          },
        })
      }
    }else if(e.detail.index===3){
      wx.request({
        url: 'http://47.101.55.60/wxapp/jubao.php',
        data: {
          storynum: app.globalData.searchzuopinhao,
          openid: app.globalData.openid,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: res => {
          console.log(res.data)
          if (res.data != "您暂时没有举报权限") {
            this.setData({
              jubao_clk: true,
            })
          }
        }
      })
    } else if (e.detail.index === 4) {
      wx.request({
        url: 'http://47.101.55.60/wxapp/click_zan.php',
        data: {
          storynum: app.globalData.searchzuopinhao,
          openid: app.globalData.openid,
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: res => {
          console.log(res.data)
          this.setData({
            jiantou: "icon-zuojiantou",
            jiantou_ami: "gongneng_img_cl1",
          })
        }
      })
    } else if (e.detail.index === 5) {
      this.setData({
        xiaochuankou: true,
        jiantou: "icon-zuojiantou",
        jiantou_ami: "gongneng_img_cl1"
      })
    }
  },
  losefocus:function(e){
      this.setData({
        xushi_data:e.detail.value,
      })
  },
  /*save_clk:function(){
    var that=this
    that.setData({
      jiantou: "icon-zuojiantou",
      jiantou_ami: "gongneng_img_cl1"
    })
    function sdata(numstory,content){
        this.numstory=numstory
        this.content=content
    }
    wx.getStorage({
      key: "daixu",
      success: function(res) {
        var redata=res.data
        var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
        redata.push(datanew)
        wx.setStorage({
          key: "daixu",
          data: redata,
          success: function (res) {
            console.log("sucs")
          }
        })
      },
      fail:function(res){
        var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
        var datajson=[]
        datajson.push(datanew)
        wx.setStorage({
          key: "daixu",
          data: datajson,
          success: function (res) {
            console.log("sucs")
          }
        })
      }
    })
  },*/
  /*xihuan_clk:function(){
    this.setData({
      jiantou: "icon-zuojiantou",
      jiantou_ami: "gongneng_img_cl1"
    })
    wx.request({
      url: 'http://47.101.55.60/wxapp/add_like.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        openid: app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
      }
    })
  },*/
  mingming_gm:function(){
    this.setData({
      mingming_kou:true,
    })
  },
  /*yichu_gongn:function(){
    if (this.data.jiantou =="icon-zuojiantou")
    this.setData({
      jiantou:"icon-youjiantou",
      jiantou_ami:"gongneng_img_cl",
    })
    else{
      this.setData({
        jiantou: "icon-zuojiantou",
        jiantou_ami: "gongneng_img_cl1"
      })
    }
  },*/
  /*click_xianqingok:function(){
      this.setData({
        xiaochuankou:true,
        jiantou: "icon-zuojiantou",
        jiantou_ami: "gongneng_img_cl1"
      })
  },*/
  cancel_ok1:function(){
    this.setData({
      mingming_kou: false,
    })
  },
  cancel_ok:function(){
    this.setData({
      xiaochuankou: false,
    })
  },
  /*jubao_clk:function(){
    this.setData({
      jiantou: "icon-zuojiantou",
      jiantou_ami: "gongneng_img_cl1"
    })
    wx.request({
      url: 'http://47.101.55.60/wxapp/jubao.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        openid: app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        if (res.data !="您暂时没有举报权限")
        {
          this.setData({
            jubao_clk: true,
          })
        }
      }
    })
  },*/
  fuyi_xu:function(){
    var that=this
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushiing.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          tiaozhuan: true,
          fuyi_xu:true,
        })
        wx.getStorage({
          key: 'daixu',
          success: function (res) {
            var redata = res.data
            for (var i = 0; i < redata.length; i++) {
              if (redata[i].numstory == app.globalData.searchzuopinhao) {
                wx.showModal({
                  title: '提示',
                  content: '载入上次未完成(注意故事变化)',
                  success(res) {
                    if (res.confirm) {
                      that.setData({
                        content: redata[i].content,
                      })
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                    else if (res.cancel) {
                      console.log('用户点击取消')
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                  }
                })
                break;
              }
            }
          },
        })
      }
    })
  },
  yuan_xu:function(){
    var that = this
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushiing.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          tiaozhuan: true,
          yuan_xu: true,
        })
        wx.getStorage({
          key: 'daixu',
          success: function (res) {
            var redata = res.data
            for (var i = 0; i < redata.length; i++) {
              if (redata[i].numstory == app.globalData.searchzuopinhao) {
                wx.showModal({
                  title: '提示',
                  content: '载入上次未完成(注意故事变化)',
                  success(res) {
                    if (res.confirm) {
                      that.setData({
                        content: redata[i].content,
                      })
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                    else if (res.cancel) {
                      console.log('用户点击取消')
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                  }
                })
                break;
              }
            }
          },
        })
      }
    })
  },
  xushi_success3: function (e) {
    wx.request({
      url: 'http://47.101.55.60/wxapp/yuan_yuan.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        id: app.globalData.openid,
        xushi_content: e.detail.value.neirong,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {

        //console.log(res.data.fuyi_content)
        wx.request({
          url: 'http://47.101.55.60/wxapp/xustorydata.php',
          data: {
            storynum: app.globalData.searchzuopinhao,
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          success: res => {
            console.log(res.data)
            this.setData({
              fuyi_content: null,
              shuju: res.data,
              wenneiarray: JSON.parse(res.data.storycontent).wenneisum,
              wanjiefou: parseInt(res.data.boolfinish),
              xushizhong: parseInt(res.data.xushiing),
              //tiaozhuan: false,
            })
          }
        })
      }
    })
  },
  xushi_success2: function (e) {
    wx.request({
      url: 'http://47.101.55.60/wxapp/fuyi_yuan.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        id: app.globalData.openid,
        xushi_content: e.detail.value.neirong,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {

        //console.log(res.data.fuyi_content)
        wx.request({
          url: 'http://47.101.55.60/wxapp/xustorydata.php',
          data: {
            storynum: app.globalData.searchzuopinhao,
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          success: res => {
            console.log(res.data)
            this.setData({
              fuyi_content:null,
              shuju: res.data,
              wenneiarray: JSON.parse(res.data.storycontent).wenneisum,
              wanjiefou: parseInt(res.data.boolfinish),
              xushizhong: parseInt(res.data.xushiing),
              //tiaozhuan: false,
            })
          }
        })
      }
    })
  },
  xushitiaozhuan:function(){
    var that=this
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushiing.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        that.setData({
          tiaozhuan: true,
        })
        wx.getStorage({
          key: 'daixu',
          success: function(res) {
            var redata=res.data
            for (var i = 0; i < redata.length;i++)
            {
              if (redata[i].numstory == app.globalData.searchzuopinhao)
              {
                wx.showModal({
                  title: '提示',
                  content: '载入上次未完成(注意故事变化)',
                  success(res) {
                    console.log(redata)
                    if (res.confirm) {
                        that.setData({
                          content: redata[i].content,
                        })
                        redata.splice(i, 1);
                        wx.setStorage({
                          key: 'daixu',
                          data: redata,
                          success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                     else if (res.cancel) {
                      console.log('用户点击取消')
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                  }
                })
                break;
              }
            }
          },
        })
      }
    })
    
  },
  xushi_success1: function (e) {
    wx.request({
      url: 'http://47.101.55.60/wxapp/fuyi.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        id: app.globalData.openid,
        xushi_content: e.detail.value.neirong,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {

        //console.log(res.data.fuyi_content)
        wx.request({
          url: 'http://47.101.55.60/wxapp/xustorydata.php',
          data: {
            storynum: app.globalData.searchzuopinhao,
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          success: res => {
            console.log(res.data)
            this.setData({
              fuyi_content: JSON.parse(res.data.fuyi).fuyi_content,
              shuju: res.data,
              wenneiarray: JSON.parse(res.data.storycontent).wenneisum,
              wanjiefou: parseInt(res.data.boolfinish),
              xushizhong: parseInt(res.data.xushiing),
            })
          }
        })
      }
    })
  },
  xushi_success:function(e){
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushi_success.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        id: app.globalData.openid,
        xushi_content: e.detail.value.neirong,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        
        console.log(res.data)
        wx.request({
          url: 'http://47.101.55.60/wxapp/xustorydata.php',
          data: {
            storynum: app.globalData.searchzuopinhao,
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          success: res => {
            console.log(res.data)
            this.setData({
              shuju: res.data,
              wenneiarray: JSON.parse(res.data.storycontent).wenneisum,
              wanjiefou: parseInt(res.data.boolfinish),
              xushizhong: parseInt(res.data.xushiing),
              //tiaozhuan: false,
            })
          }
        })
      }
    })
  },
  zaixushi:function(){
    /*wx.showToast({
      title: '正在续写',
      icon: 'success',
      duration: 2000,
    })*/
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  fanhuitiaozhuan:function(){
    
    var that=this
    console.log(that.data.content)
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushijieshi.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        console.log(that.data.xushi_data)
        if (that.data.xushi_data != "") {
            wx.showModal({
              title: '提示',
              content: '是否保存',
              success(res) {
                if (res.confirm) {
                  function sdata(numstory, content) {
                    this.numstory = numstory
                    this.content = content
                  }
                  wx.getStorage({
                    key: "daixu",
                    success: function (res) {
                      console.log("2")
                      var redata = res.data
                      var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
                      
                      redata.push(datanew)
                      console.log(redata)
                      wx.setStorage({
                        key: "daixu",
                        data: redata,
                        success: function (res) {
                          console.log("sucs")
                        }
                      })
                    },
                    fail: function (res) {
                      console.log("1")
                      var datanew = new sdata(app.globalData.searchzuopinhao, that.data.xushi_data)
                      var datajson = []
                      datajson.push(datanew)
                      wx.setStorage({
                        key: "daixu",
                        data: datajson,
                        success: function (res) {
                          console.log("sucs")
                        }
                      })
                      that.setData({
                        xushi_data:"",
                      })
                    }
                  })
                  that.setData({
                    content:"",
                    tiaozhuan: false,
                    fuyizhuan: false,
                    fuyi_xu: false,
                    yuan_xu: false,
                  })
                }
                else if (res.cancel) {
                  console.log('用户点击取消')
                  that.setData({
                    content: "",
                    xushi_data: "",
                    tiaozhuan: false,
                    fuyizhuan: false,
                    fuyi_xu: false,
                    yuan_xu: false,
                  })
                }
              }
            })
          }else{
          that.setData({
            content: "",
            xushi_data:"",
            tiaozhuan: false,
            fuyizhuan: false,
            fuyi_xu: false,
            yuan_xu: false,
          })
          }
        
      }
    })
  },
  wanjie_toupiao:function(){
    wx.request({
      url: 'http://47.101.55.60/wxapp/faqi_toupiao.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        openid: app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          tiaozhuan: false,
          toupiao: 1,
          fuyizhuan:false,
        })
      }
    })
  }, 
  toupiao:function(){
    wx.request({
      url: 'http://47.101.55.60/wxapp/panduan_toupiao.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        openid: app.globalData.openid,
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
          console.log(res.data)


          wx.getStorage({
            key: 'wanjie_msg',
            success: function (res) {
              // 异步接口在success回调才能拿到返回值
              var wanjie_msg = res.data
              for (var i = 0; i < wanjie_msg.numarr.length;i++)
              {
                if (wanjie_msg.numarr[i] == app.globalData.searchzuopinhao)
                {
                  wanjie_msg.bool[i]=0;
                  break;
                }
              }
              wx.setStorage({
                key: 'wanjie_msg',
                data: wanjie_msg,
                success: function () {
                  console.log('写入toupiao成功')
                },
                fail: function () {
                  console.log('写入发生错误')
                }
              })
            },
            fail: function () {
              wx.setStorage({
                key: "wanjie_msg",
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




          this.setData({
            toupiao_finish: 1,
            toupiao_man: 1,
          })
          var arr_id = JSON.parse(res.data.openidusm).openidsum
          var ti_arr = []
          console.log(JSON.parse(res.data.openidusm).openidsum)
          console.log(JSON.parse(res.data.openidusm).openidsum.length)
          for (var i = 0; i < arr_id.length; i++) {
            var flag = 0;
            if (i == 0) {
              ti_arr.push(arr_id[i])
            }
            else {
              for (var j = 0; j < ti_arr.length; j++) {
                if (arr_id[i] == ti_arr[j]) {
                  flag = 1;
                  break;
                }
              }
              if (flag == 0) {
                ti_arr.push(arr_id[i])
              }
            }
          }
          console.log(ti_arr.length)
          var piaoman_arr = JSON.parse(res.data.piaosum).toupiaoidsum
          if (piaoman_arr.length >= (ti_arr.length*0.6))
          {
            console.log("完结")
            wx.request({
              url: 'http://47.101.55.60/wxapp/wanjie_success.php',
              data: {
                storynum: app.globalData.searchzuopinhao,
              },
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
              },
              success: res => {
                console.log(res.data)
                this.setData({
                  wanjiefou:1,
                })
              }
            })
          }
          
      }
    })
  },
  mingming_func:function(e){
    this.setData({
      name: e.detail.value,
    })
  },
  mingming_sumit:function(){
    var that = this
    wx.request({
      url: 'http://47.101.55.60/wxapp/mingming_submit.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        name:this.data.name,
        openid: app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        wx.getStorage({
          key: 'name_msg_ok',
          success: function (res) {
            // 异步接口在success回调才能拿到返回值
            var name_msg_ok = res.data
            for (var i = 0; i < name_msg_ok.numarr.length; i++) {
              if (name_msg_ok.numarr[i] == app.globalData.searchzuopinhao) {
                name_msg_ok.bool[i] = 0;
                break;
              }
            }
            wx.setStorage({
              key: 'name_msg_ok',
              data: name_msg_ok,
              success: function () {
                console.log('写入mingming成功')
              },
              fail: function () {
                console.log('写入发生错误')
              }
            })
          },
          fail: function () {
            wx.setStorage({
              key: "name_msg_ok",
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
        that.setData({
          yijing_mingming: true,
        })
      }
    })
  },
  chakan_toupiao:function(){
    wx.navigateTo({
      url: '../toupiao/toupiao',
    })
  },
  /*click_zanok:function(){
    wx.request({
      url: 'http://47.101.55.60/wxapp/click_zan.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
        openid:app.globalData.openid,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          jiantou: "icon-zuojiantou",
          jiantou_ami: "gongneng_img_cl1",
        })
      }
    })
  },*/
  /*fuyi_clk:function(){
    var that = this
    this.setData({
      jiantou: "icon-zuojiantou",
      jiantou_ami: "gongneng_img_cl1"
    })
    wx.request({
      url: 'http://47.101.55.60/wxapp/xushiing.php',
      data: {
        storynum: app.globalData.searchzuopinhao,
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success: res => {
        console.log(res.data)
        this.setData({
          tiaozhuan: true,
          fuyizhuan:true,
        })
        wx.getStorage({
          key: 'daixu',
          success: function (res) {
            var redata = res.data
            for (var i = 0; i < redata.length; i++) {
              if (redata[i].numstory == app.globalData.searchzuopinhao) {
                wx.showModal({
                  title: '提示',
                  content: '载入上次未完成(注意故事变化)',
                  success(res) {
                    if (res.confirm) {
                      that.setData({
                        content: redata[i].content,
                      })
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                    else if (res.cancel) {
                      console.log('用户点击取消')
                      redata.splice(i, 1);
                      wx.setStorage({
                        key: 'daixu',
                        data: redata,
                        success: function (res) {
                          console.log(redata)
                        }
                      })
                    }
                  }
                })
                break;
              }
            }
          },
        })
      }
    })
  },*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
    var that=this
    wx.request({
      url: 'http://47.101.55.60/wxapp/xustorydata.php',
      data:{
        storynum: app.globalData.searchzuopinhao,
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
      },
      success:res=>{
        if (res.data.namesum != "" && res.data.namesum != null){
          var arr_namesum = JSON.parse(res.data.namesum);
          console.log(JSON.parse(res.data.namesum))
          for (var i = 0; i < arr_namesum.length; i++) {
            if (app.globalData.openid == arr_namesum[i].openid) {
              this.setData({
                yijing_mingming: true,
              })
              break;
            }
          }
        }
        if(res.data.bool_jubao==1)
        {
          this.setData({
            jubao_clk: true,
          })
        }
        if (res.data.fuyi != null && res.data.fuyi != "")
        {
          this.setData({
            fuyi_content: JSON.parse(res.data.fuyi).fuyi_content,
          })
        }
        if (res.data.openidusm != null && res.data.openidusm != "" && res.data.finishpanding==1) {
         var arr_id = JSON.parse(res.data.openidusm).openidsum
        for (var i = 0; i < arr_id.length;i++)
        {
          if (app.globalData.openid == arr_id[i])
          {
            console.log("true")
            this.setData({
              toupiao_man:1,
            })
            break;
          }
        }
        }
        if (res.data.piaosum != null && res.data.piaosum != "") {
          arr_id = JSON.parse(res.data.piaosum).toupiaoidsum
          for (var i = 0; i < arr_id.length; i++) {
            if (app.globalData.openid == arr_id[i]) {
              console.log("true")
              this.setData({
                toupiao_finish: 1,
              })
              break;
            }
          }
        }
        this.setData({
          shuju:res.data,
          wenneiarray: JSON.parse(res.data.storycontent).wenneisum,
          wanjiefou:parseInt(res.data.boolfinish),
          xushizhong: parseInt(res.data.xushiing),
          toupiao: parseInt(res.data.finishpanding),
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