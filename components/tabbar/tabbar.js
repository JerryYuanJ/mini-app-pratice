Component({
  properties: {
    tabItems: Array,
    // 选中标签页的颜色(文字颜色+小滑块颜色)
    activedColor: {
      type: String,
      value: '#d5001c'
    }
  },
  data: {
    activedIndex: 0,
    // slider的左偏移量，用这个来控制其移动的距离
    sliderOffset: 0
  },
  methods: {
    // 切换tab时调用的方法
    clickTab(e) {
      this.setData({
        activedIndex: e.currentTarget.id,
        sliderOffset: e.currentTarget.offsetLeft
      })
      // 触发父组件的tab-change方法，并将当前选中的tab作为参数传递给父组件
      this.triggerEvent('tab-change', { activedTab: e.currentTarget.id })
    }
  }
})
