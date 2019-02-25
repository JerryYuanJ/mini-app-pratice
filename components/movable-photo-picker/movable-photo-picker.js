const MAX_PHOTO_COUNT = 9

Component({
  properties: {
    
  },

  data: {
    photos: [],
    showDelete: false,
    x: 0,
    y: 0
  },

  methods: {
    showDeleteIcon() {
      this.setData({
        showDelete: true
      })
    },
    deletePhoto(e) {
      const index = e.currentTarget.dataset.index
      let photoList = this.data.photos
      // delete one item in array
      photoList.splice(index, 1)
      this.setData({
        photos: photoList
      })
      this.triggerEvent('on-photo-pick', photoList, {})
    },
    addPhoto() {
      const currentLength = this.data.photos.length
      this.openCamera(MAX_PHOTO_COUNT - currentLength)
    },
    openCamera(count) {
      let self = this
      wx.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'],
        success: function (res) {
          const photos = res.tempFilePaths
          let origin = self.data.photos
          self.setData({
            photos: origin.concat(photos),
            showDelete: false
          })
          self.triggerEvent('on-photo-pick', photos, {})
        },
      })
    },
  }
})
