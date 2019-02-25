Page({

  data: {
    showFront: false
  },

  flip(){
    this.setData({ showFront: !this.data.showFront })
  }
})