Page({
  data: {
    banners: [
      'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
      'https://tdesign.gtimg.com/mobile/demos/swiper2.png',
    ],
    quickActions: [
      { icon: 'shop', text: '商城', color: '#0052d9' },
      { icon: 'notification', text: '消息', color: '#ff4d4f' },
      { icon: 'chart', text: '数据', color: '#52c41a' },
      { icon: 'calendar', text: '日程', color: '#722ed1' }
    ],
    news: [
      { title: '重要通知：系统升级维护公告', time: '10分钟前' },
      { title: '新功能上线：智能助手全新升级', time: '2小时前' },
      { title: '行业动态：最新技术发展趋势', time: '5小时前' }
    ],
    features: [
      {
        title: '数据概览',
        desc: '实时监控数据变化',
        icon: 'chart-bubble',
        color: '#1890ff',
        background: 'linear-gradient(135deg, #1890ff20 0%, #1890ff10 100%)'
      },
      {
        title: '任务管理',
        desc: '高效处理待办事项',
        icon: 'task',
        color: '#52c41a',
        background: 'linear-gradient(135deg, #52c41a20 0%, #52c41a10 100%)'
      },
      {
        title: '消息中心',
        desc: '及时接收重要通知',
        icon: 'notification',
        color: '#ff4d4f',
        background: 'linear-gradient(135deg, #ff4d4f20 0%, #ff4d4f10 100%)'
      },
      {
        title: '个人中心',
        desc: '管理个人信息设置',
        icon: 'user',
        color: '#722ed1',
        background: 'linear-gradient(135deg, #722ed120 0%, #722ed110 100%)'
      }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  onQuickAction(e) {
    const { index } = e.currentTarget.dataset;
    const action = this.data.quickActions[index];
    wx.showToast({
      title: `点击了${action.text}`,
      icon: 'none'
    });
  },

  onNewsClick(e) {
    const { index } = e.currentTarget.dataset;
    const news = this.data.news[index];
    wx.showToast({
      title: news.title,
      icon: 'none'
    });
  },

  onFeatureClick(e) {
    const { index } = e.currentTarget.dataset;
    const feature = this.data.features[index];
    wx.showToast({
      title: feature.title,
      icon: 'none'
    });
  }
}) 