
const app = getApp()

Page({
  data: {
    danmakuRecor: '',
    inputValue: ''
  },
  onLoad: function () {
    let that = this;

    // websocket
    let socketTask = wx.connectSocket({
      url: 'ws://192.168.2.153:8080/chat'
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
    wx.onSocketMessage(function (res) {
      that.danmakuRecordArr.push(res.data)
      that.setData({
        danmakuRecor: that.danmakuRecordArr.join('\n')
      })
    })
    that.setData({
      socketTask: socketTask
    })
  },
  danmakuRecordArr: [],
  sendMsg: function (e) {
    let socketTask = this.data.socketTask
    let msg = e.detail.value;
    
    socketTask.send({
      data : msg
    })
    this.setData({
      inputValue: ''
    })
  }
})
