Page({
  data: {
    keyword: '',
    loading: false,
    refreshing: false,
    loadingMore: false,
    hasMore: true,
    page: 1,
    pageSize: 10,
    list: [
      { 
        id: 1, 
        title: '项目标题1',
        desc: '这是项目1的描述信息',
        image: 'https://img0.baidu.com/it/u=3145022701,3943645695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
        date: '2024-03-15'
      },
      { 
        id: 2, 
        title: '项目标题2',
        desc: '这是项目2的描述信息',
        image: 'https://img2.baidu.com/it/u=3385915685,1681389912&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
        date: '2024-03-14'
      }
    ]
  },

  onLoad() {
    this.loadData();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  // 搜索输入
  onSearchInput(e) {
    this.setData({
      keyword: e.detail.value
    });
  },

  // 搜索确认
  onSearchConfirm() {
    this.setData({
      page: 1,
      list: []
    }, () => {
      this.loadData(true);
    });
  },

  // 清空搜索
  onSearchClear() {
    this.setData({
      keyword: '',
      page: 1,
      list: []
    }, () => {
      this.loadData(true);
    });
  },

  // 下拉刷新
  async onPullDownRefresh() {
    this.setData({
      refreshing: true,
      page: 1,
      list: []
    });
    await this.loadData(true);
    wx.stopPullDownRefresh();
    this.setData({ refreshing: false });
  },

  // 上拉加载更多
  async onReachBottom() {
    if (this.data.loadingMore || !this.data.hasMore) return;
    this.setData({ loadingMore: true });
    await this.loadData();
    this.setData({ loadingMore: false });
  },

  // 加载数据
  async loadData(isRefresh = false) {
    if (this.data.loading) return;
    
    this.setData({ loading: true });

    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 模拟数据
      const newItems = Array(5).fill(0).map((_, index) => ({
        id: this.data.list.length + index + 1,
        title: `项目标题${this.data.list.length + index + 1}`,
        desc: `这是项目${this.data.list.length + index + 1}的描述信息`,
        image: `https://img0.baidu.com/it/u=3145022701,3943645695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333`,
        date: new Date(Date.now() - index * 86400000).toISOString().split('T')[0]
      }));

      // 模拟搜索过滤
      const filteredItems = this.data.keyword
        ? newItems.filter(item => 
            item.title.includes(this.data.keyword) || 
            item.desc.includes(this.data.keyword)
          )
        : newItems;

      this.setData({
        list: isRefresh ? filteredItems : [...this.data.list, ...filteredItems],
        hasMore: this.data.page < 4, // 模拟只有4页数据
        page: this.data.page + 1
      });
    } catch (error) {
      wx.showToast({
        title: '加载失败',
        icon: 'error'
      });
    } finally {
      this.setData({ loading: false });
    }
  },

  // 点击列表项
  onItemClick(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
}); 