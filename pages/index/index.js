//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    data:'',
    title:'',
    data_list:[]
  },

  //下拉刷新
  onPullDownRefresh() {
    this.onLoad()
    wx.showNavigationBarLoading() //在标题栏中显示加载
    wx.stopPullDownRefresh()
  },

  onLoad: function () {
    var that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url: '/pages/auth/auth',
          })
        }
      }
    })

    //加载数据库数据
    const db = wx.cloud.database({})
    //查询当前用户所有集合
    db.collection('work').where({
      _openid:this.data.openid
    }).get({
      success:res=>{
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2),
        })
        //调试信息
        /*console.log('查询成功：', res.data[0])*/
        this.setData({
          data_list:res.data
        })
        wx.showToast({
          icon:'success',
          title: '加载完成',
        })
      },
      fail:err=>{
        wx.showToast({
          title: '查询记录失败',
        })
        console.log('查询失败： ',err)
      }
    })
  },

})
