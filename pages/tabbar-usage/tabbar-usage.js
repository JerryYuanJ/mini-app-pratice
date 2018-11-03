Page({
  data: {
    tabOptions: ['全部', '我的好友', '特别关注'],
    currentTabIndex: 0
  },
  onTabChange(e){
    // 接受来自组件传递的参数
    const detail = e.detail
    this.setData({
      currentTabIndex: detail.activedTab
    })
  }
})