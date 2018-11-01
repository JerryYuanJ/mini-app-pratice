Page({
  data: {
    tabOptions: ['全部', '我的好友', '特别关注'],
    currentTabIndex: 0
  },
  onTabChange(e){
    const detail = e.detail
    this.setData({
      currentTabIndex: detail.activedTab
    })
  }
})