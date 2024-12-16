Component({
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#0052d9",
    list: [{
      pagePath: "/pages/home/home",
      icon: "home",
      text: "首页"
    }, {
      pagePath: "/pages/list/list",
      icon: "view-list",
      text: "列表"
    }, {
      pagePath: "/pages/profile/profile",
      icon: "user",
      text: "我的"
    }]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
}) 