Page({
  data: {
    detail: {
      id: 1,
      title: '标题文本',
      author: '作者名称',
      date: '2024-03-15',
      readCount: '1.2k',
      likeCount: '328',
      coverImage: 'https://img0.baidu.com/it/u=2428053500,1565248432&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      content: '这里是详细的内容描述，可以很长很长...',
      tags: ['标签1', '标签2', '标签3'],
      images: [
        'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
        'https://img2.baidu.com/it/u=2948679093,3111758781&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
        'https://img0.baidu.com/it/u=2428053500,1565248432&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img1.baidu.com/it/u=3709586903,1286591012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
        'https://img0.baidu.com/it/u=3145022701,3943645695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333'
      ]
    },
    showFullContent: false,
    isLiked: false,
    isCollected: false,
    scrollTop: 0,
    showHeader: false,
    loading: true
  },

  onLoad(options) {
    const { id } = options;
    this.loadDetailData(id);
  },

  // 加载详情数据
  async loadDetailData(id) {
    try {
      this.setData({ loading: true });
      
      // 模拟接口请求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 模拟数据
      const detail = {
        id,
        title: '详情标题示例',
        author: '作者名称',
        date: '2024-03-15',
        readCount: '1.2k',
        likeCount: '328',
        coverImage: 'https://img0.baidu.com/it/u=2428053500,1565248432&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        content: '这是一段很长的详细内容描述，可以包含很多文字...这是一段很长的详细内容描述，可以包含很多文字...这是一段很长的详细内容描述，可以包含很多文字...',
        tags: ['标签1', '标签2', '标签3'],
        images: [
          'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
          'https://img2.baidu.com/it/u=2948679093,3111758781&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
          'https://img0.baidu.com/it/u=2428053500,1565248432&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
          'https://img1.baidu.com/it/u=3709586903,1286591012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
          'https://img0.baidu.com/it/u=3145022701,3943645695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333'
        ]
      };

      this.setData({
        detail,
        loading: false
      });

    } catch (error) {
      console.error('加载详情失败:', error);
      wx.showToast({
        title: '加载失败',
        icon: 'error'
      });
    }
  },

  // 监听页面滚动
  onPageScroll(e) {
    const showHeader = e.scrollTop < 100;
    if (this.data.showHeader !== showHeader) {
      this.setData({ showHeader });
    }
    this.setData({ scrollTop: e.scrollTop });
  },

  // 展开/收起内容
  toggleContent() {
    this.setData({
      showFullContent: !this.data.showFullContent
    });
  },

  // 点赞
  toggleLike() {
    this.setData({
      isLiked: !this.data.isLiked
    });
    wx.showToast({
      title: this.data.isLiked ? '已点赞' : '已取消点赞',
      icon: 'none'
    });
  },

  // 收藏
  toggleCollect() {
    this.setData({
      isCollected: !this.data.isCollected
    });
    wx.showToast({
      title: this.data.isCollected ? '已收藏' : '已取消收藏',
      icon: 'none'
    });
  },

  // 预览图片
  previewImage(e) {
    const { current } = e.currentTarget.dataset;
    wx.previewImage({
      current,
      urls: this.data.detail.images
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: this.data.detail.title,
      path: `/pages/detail/detail?id=${this.data.detail.id}`
    };
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  }
}); 