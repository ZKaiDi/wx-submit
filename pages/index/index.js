//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  onLoad: function () {
    let that = this;
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
  },

})
