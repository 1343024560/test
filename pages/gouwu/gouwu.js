// pages/gouwu/gouwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num :0
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    wx.setNavigationBarColor({
      frontColor:'#ffffff',
      backgroundColor:'#000000'
    }) 
    wx.hideTabBar({
      animation: false
    });
  },

 
})