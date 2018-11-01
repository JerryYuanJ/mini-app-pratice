Component({
  properties: {
    tabItems: Array,
    activedColor: {
      type: String,
      value: '#d5001c'
    }
  },
  data: {
    activedIndex: 0,
    sliderOffset: 0
  },
  methods: {
    clickTab(e) {
      this.setData({
        activedIndex: e.currentTarget.id,
        sliderOffset: e.currentTarget.offsetLeft
      })
      this.triggerEvent('tab-change', { activedTab: e.currentTarget.id })
    }
  }
})
