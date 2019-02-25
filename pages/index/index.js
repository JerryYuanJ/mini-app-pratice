Page({
  data: {
    pageMap: {
      tab: "../tabbar-usage/tabbar-usage",
      "fixed-v1": "../fixed-ele-observer/fixed-ele-observer",
      "fixed-v2": "../fixed-ele-scroll/fixed-ele-scroll",
      readmore: "../readmore/readmore",
      modal: '../my-modal/my-modal',
      scroll: '../scroll/scroll',
      flip: '../flip-card/flip-card'
    }
  },
  go(e) {
    const tag = e.target.dataset.tag
    if (tag) {
      wx.navigateTo({
        url: this.data.pageMap[tag],
      })
    }
  },
  openMap() {
    wx.chooseLocation({
      success(res) {
        if (res.name) {
          wx.showModal({
            title: '您选择了',
            content: res.address + ' ' + res.name,
          })
        }
      }
    })
  }
})