Page({
  data: {
    tabFixed: false,
    tabOptions: ['全部', '附近', '特别关注'],
    tabHeight: null
  },
  /**
   * 初始化观察器
   */
  initTabObserver() {
    const distance = this.data.tabHeight
    // 设置observeAll为true才可以observe多个selector
    this.tabObserver = wx.createIntersectionObserver(this, { observeAll: true})
    this.tabObserver
      .relativeToViewport({ bottom: distance })
      // 注意这里要写两个，不然tab固定了以后回不去
      .observe('.tab,.slider', (res) => {
        const visible = res.intersectionRatio > 0
        this.setData({ tabFixed: !visible })
      })
  },
  onReady(){
    const query = wx.createSelectorQuery()
    let self = this
    // 计算tab的高度
    query.select(".tab").boundingClientRect(function (res) {
      self.setData({
        tabHeight: res.height
      })
      self.initTabObserver()
    }).exec()
  }
})