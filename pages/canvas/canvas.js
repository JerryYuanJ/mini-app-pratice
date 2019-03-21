Page({
  data: {
    hasPicture: false,
    text: ''
  },

  onLoad: function (options) {

  },

  getInput(e){
    this.setData({ text: e.detail.value })
  },

  drawPicture(e) {
    this.setData({ hasPicture: true })
    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('c-1')
    context.rect(0, 0, 750, 200)
    context.setFillStyle('lightblue')
    context.fill()
    context.setFontSize(30)
    context.setFillStyle('black')
    context.fillText(this.data.text, 100, 100)
    context.setTextAlign('center')
    context.setTextBaseline('middle')
    context.draw()
  },
  savePicture(){
    let self = this
    wx.canvasToTempFilePath({
      canvasId: 'c-1',
      fileType: 'jpg',
      quality: 1,
      success(res){
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(){
            wx.showToast({
              title: '保存成功',
            })
          }
        })
      }
    })
  }
})