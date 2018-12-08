const status = {
  pull: '下拉刷新',
  refreshing: '正在加载数据...',
  done: '加载完成'
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    touch: {
      startY: 0
    },
    fromTop: false,
    scrollTop: -50,
    am: null,
    refreshTip: status.pull
  },
  methods: {
    touchStart(e) {
      const self = this
      const query = wx.createSelectorQuery().in(this)
      query.select('.scroll-container')
        .fields({
          scrollOffset: true,
          size: true
        }, (res) => {
          self.setData({
            fromTop: res.scrollTop < 10,
            'touch.startY': e.touches[0].clientY
          })
        })
        .exec()
    },
    touchEnd(e) {
      const endTouch = e.changedTouches[0].clientY
      const touch = this.data.touch, self = this
      let moveDistance = endTouch - touch.startY
      if (this.data.fromTop && moveDistance > 60) {
        this.loadData().then(()=>{
          self.setData({
            refreshTip: status.done
          })
          self.tipGoBack()
        })
      }
    },
    tipGoBack(){
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear'
      })
      animation.top('-50rpx').step()
      this.setData({
        am: animation.export()
      })
    },
    endFn(){
      this.setData({
        am: null
      })
    },
    loadData() {
      wx.showToast({
        title: 'loading',
        icon: 'loading'
      })
      return new Promise((resolve, reject) => {
        this.setData({
          scrollTop: 0,
          refreshTip: status.refreshing
        })
        setTimeout(() => {
          resolve()
          wx.hideLoading()
        }, 2000)
      })
    }
  }
})