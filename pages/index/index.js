//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr: [
      {
        id: 1,
        name: "神经用药"
      },
      {
        id: 2,
        name: "神经用药"
      },
      {
        id: 3,
        name: "神经用药"
      },
      {
        id: 4,
        name: "神经用药"
      },
      {
        id: 5,
        name: "神经用药"
      },
      {
        id: 6,
        name: "神经用药"
      },
      {
        id: 7,
        name: "神经用药"
      },
    ],
    chooseid:1,
  },

  //事件处理函数
  choose:function(option){
    let id=option.currentTarget.dataset.id
    this.setData({
      chooseid:id
    })
  },
  onLoad: function () {

  },

})
