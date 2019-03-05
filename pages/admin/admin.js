// pages/admin/admin.js
var app =getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    a: '',
    b: ''
  },

  formSubmit(e){
    //console.log('adfa:',e.detail.value)
    var name=e.detail.value.name;
    var passwd=e.detail.value.passwd;
    //调试信息
    /*console.log(name,passwd)
    console.log(this.data.a, this.data.b)*/
    if(name===this.data.a&&passwd===this.data.b){
      wx.navigateTo({
        url: '../all/all'
      })
    }else{
      wx.showModal({
        title: '登陆失败',
        content: '请检查用户名及密码',
      })
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title:'管理员'
    })
    const db = wx.cloud.database({})
    db.collection('admin').get({
      success:res=>{
        this.setData({
          queryResult: JSON.stringify(res.data, null, 2),
        })
        //调试信息
        /*console.log('查询成功：', res.data[0])*/
          this.data.a=res.data[0].name
          this.data.b=res.data[0].passwd

        console.log(a,b)
      },
      fail:err=>{
        wx.showToast({
          title: '请检查网络连接',
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