/**
 * 1. if in tab pages make sure call wx.hideTabbar() first and 
 *      put logic codes in success callback
 * 2. scroll behaviar can't go inside
 * 3. keep in mind when to use catch/bind to avoid inside event
 */
Page({
  data: {
    show1: false,
    show2: false
  },
  displayModal1(){
    this.setData({
      show1: true
    })
  },
  hideModal1(){
    this.setData({
      show1: false
    })
  },
  displayModal2() {
    this.setData({
      show2: true
    })
  },
  hideModal2() {
    this.setData({
      show2: false
    })
  },
  //一个空方法，不用实现，可以阻止滚动行为的穿透
  touchMove(){}
})