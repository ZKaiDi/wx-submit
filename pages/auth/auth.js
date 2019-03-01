const app = getApp();
Page({
  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },

  onLoad:function(option){
    var that=this;
      wx.setNavigationBarTitle({
        title: "登录"
      })
  }
});
