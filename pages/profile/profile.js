Page({
    data: {
        userInfo: {
            avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
            nickname: '微信用户',
            level: 'Lv.8',
            vipStatus: '黄金会员'
        },
        quickActions: [
            { 
                icon: 'heart', 
                text: '收藏', 
                value: '12',
                color: '#ff4d4f',
                type: 'favorite'
            },
            { 
                icon: 'star', 
                text: '关注', 
                value: '28',
                color: '#ffa940',
                type: 'follow'
            },
            { 
                icon: 'shop', 
                text: '订单', 
                value: '6',
                color: '#1890ff',
                type: 'order'
            },
            { 
                icon: 'wallet', 
                text: '钱包', 
                value: '￥888',
                color: '#52c41a',
                type: 'wallet'
            }
        ],
        menuGroups: [
            {
                title: '我的服务',
                type: 'service',
                items: [
                    { icon: 'cart', text: '购物车', color: '#1890ff', type: 'cart', badge: '2' },
                    { icon: 'location', text: '收货地址', color: '#52c41a', type: 'address' },
                    { icon: 'ticket', text: '优惠券', color: '#ff4d4f', type: 'coupon', badge: '5' },
                    { icon: 'notification', text: '消息', color: '#722ed1', type: 'message', badge: '99+' }
                ]
            },
            {
                title: '更多服务',
                type: 'more',
                more: true,
                items: [
                    { icon: 'service', text: '客服', color: '#13c2c2', type: 'service' },
                    { icon: 'help-circle', text: '帮助', color: '#eb2f96', type: 'help' },
                    { icon: 'flag', text: '反馈', color: '#faad14', type: 'feedback' },
                    { icon: 'info-circle', text: '关于', color: '#2f54eb', type: 'about' }
                ]
            }
        ]
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({ selected: 2 })
        }
    },

    onEditProfile() {
        wx.showToast({ title: '编辑资料', icon: 'none' })
    },

    onSettings() {
        wx.showToast({ title: '设置', icon: 'none' })
    },

    onQuickAction(e) {
        const { type } = e.currentTarget.dataset
        wx.showToast({ title: `点击了${type}`, icon: 'none' })
    },

    onMenuClick(e) {
        const { type } = e.currentTarget.dataset
        wx.showToast({ title: `点击了${type}`, icon: 'none' })
    },

    onMoreTap(e) {
        const { type } = e.currentTarget.dataset
        wx.showToast({ title: `查看更多${type}`, icon: 'none' })
    },

    onLogout() {
        wx.showModal({
            title: '提示',
            content: '确定要退出登录吗？',
            success: (res) => {
                if (res.confirm) {
                    wx.showToast({ title: '退出成功', icon: 'success' })
                }
            }
        })
    }
})
