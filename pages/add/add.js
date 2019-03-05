const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index: null,
    picker: ['键鼠配件', '网络', '显示器', '主机'],
    date: '2019-01-01',
  },

  formSubmit(e) {
    wx.showLoading({
      title: '正在提交···',
    })
    const db = wx.cloud.database()
    /*console.log('form发生了submit事件，携带数据为：', e.detail.value)*/
    db.collection('work').add({
      data:{
        name:e.detail.value.name,
        department:e.detail.value.department,
        detaill:e.detail.value.detaill,
        machine:this.data.mach,
        date:e.detail.value.date
      },
        success:res=>{
          wx.hideLoading()
          //返回结果处理
          wx.showToast({
            title:"提交成功",
          })
          /*console.log('提交成功: ',res._id)*/
        },
        fail:err=>{
          wx.hideLoading()
          wx.showToast({
            icon:'none',
            title: '提交失败，请检查网络连接'
          })
          /*console.log('提交失败: ',err)*/
        }
      })
    
    db.collection('workadm').add({
      data: {
        name: e.detail.value.name,
        department: e.detail.value.department,
        detaill: e.detail.value.detaill,
        machine: this.data.mach,
        date: e.detail.value.date
      },
    })
    
  },

  PickerChange(e) {
    /*console.log(e)*/
    this.setData({
      index: e.detail.value,
      mach: this.data.picker[e.detail.value]
    })
    //显示当前mach的值，确认提交的machine值
    /*console.log(this.data.mach)*/
  },

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  onLoad:function(options){
    var that = this;
    wx.setNavigationBarTitle({
      title:"故障反馈"
    })
  },

})