Page({
  data: {
    tabFixed: false,
    tabOptions: ['全部', '附近', '特别关注'],
    placeholderHeight: null
  },
  onPageScroll(e){
    // 页面滚动的距离
    const scrollDistance = e.scrollTop
    // 占位元素的高度
    const placeholderHeight = this.data.placeholderHeight
    this.setData({
      tabFixed: scrollDistance > placeholderHeight
    })
  },
  onReady(){
    const query = wx.createSelectorQuery()
    const self = this
    // 这里：获取placeholder的height = tab的top(顶部坐标)
    // 在你明确tab上面有A什么的时候，可以直接获取A的高度: example1
    // 否则，必须获取tab的top值: example2
    // example1
    query.select(".placeholder-content").boundingClientRect(function (res) {
      self.setData({
        placeholderHeight: res.height
      })
    }).exec()
    // example2
    /**
     * query.select(".tab").boundingClientRect(function (res) {
          console.info(res)
          self.setData({
            placeholderHeight: res.height
          })
        }).exec()
     */
  }
})