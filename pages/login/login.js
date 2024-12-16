Page({
  data: {
    username: '',
    password: '',
    isLoading: false,
    showPassword: false,
    animation: null
  },

  onLoad() {
    this.initAnimation();
  },

  initAnimation() {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    
    animation.opacity(1).translateY(0).step();
    this.setData({
      animation: animation.export()
    });
  },

  handleInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [field]: e.detail.value
    });
  },

  togglePasswordVisibility() {
    this.setData({
      showPassword: !this.data.showPassword
    });
  },

  async handleLogin() {
    if (!this.data.username || !this.data.password) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    this.setData({ isLoading: true });

    try {
      // 这里添加登录逻辑
      await new Promise(resolve => setTimeout(resolve, 1500)); // 模拟登录请求
      
      wx.switchTab({
        url: '/pages/home/home'
      });
    } catch (error) {
      wx.showToast({
        title: '登录失败',
        icon: 'error'
      });
    } finally {
      this.setData({ isLoading: false });
    }
  }
}); 