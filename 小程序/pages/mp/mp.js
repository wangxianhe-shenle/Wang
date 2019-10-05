// pages/mp/mp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop: {
      mobile: 17344401663,
      yx: '2954767729@qq.com',
      zy: 'Web前端工程师',
    },
    phoneNum: '18835942849'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShareAppMessage: function (ops) {
    return {
      title: 'xx小程序',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },
  fxhy: function(e) {
    console.log(e)
    wx.updateShareMenu({
      withShareTicket: true,
      success() { }
    })
  },
  bcdh :function () {
    wx.addPhoneContact({
      firstName: '王显赫',
      mobilePhoneNumber: '17344401663',
    })
  },
  textPaste() {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: this.data.shop.yx,
      success: function (res) {
        wx.getClipboardData({
          // 这个api是把拿到的数据放到电脑系统中的
          success: function(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  textPastee() {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: this.data.shop.zy,
      success: function (res) {
        wx.getClipboardData({
          // 这个api是把拿到的数据放到电脑系统中的
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  bddh: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone, // 仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})