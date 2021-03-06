export default [
  {
    path: '/bmxp',
    name: 'bmxp',
    component: resolve => require(['@/view/bmxp'], resolve),
    meta: {
      title: '本命星盘'
    },
    children: [
      {
        path: 'reportDetail',
        name: 'reportDetail',
        component: resolve => require(['@/view/report-detail'], resolve),
        meta: {
          title: '报告解析'
        }
      }, {
        path: 'secretDetail',
        name: 'secretDetail',
        component: resolve => require(['@/view/secret-detail'], resolve),
        meta: {
          title: '星盘解密'
        }
      }
    ]
  }, {
    path: '/yfhp',
    name: 'yfhp',
    component: resolve => require(['@/view/yfhp'], resolve),
    meta: {
      title: '缘分合盘'
    }
  }, {
    path: '/throw',
    name: 'throw',
    component: resolve => require(['@/view/throw'], resolve),
    meta: {
      title: '占星骰子'
    }
  }, {
    path: '/bjp',
    name: 'bjp',
    component: resolve => require(['@/view/bjp'], resolve),
    meta: {
      title: '比较盘'
    },
    children: [
      {
        path: 'reportBjp',
        name: 'bjpDetails',
        component: resolve => require(['@/view/report-bjp'], resolve),
        meta: {
          title: '报告解析'
        }
      }
    ]
  }, {
    path: '/tlyjy',
    name: 'tlyjy',
    component: resolve => require(['@/view/tlyjy'], resolve),
    meta: {
      title: '塔罗研究院'
    },
    children: [
      {
        path: 'pmlx',
        name: 'pmlx',
        component: resolve => require(['@/view/pmlx'], resolve),
        meta: {
          title: ''
        },
        children: [
          {
            path: 'details',
            name: 'pmlxDetails',
            component: resolve => require(['@/view/pmlx-details'], resolve),
            meta: {
              title: ''
            }
          }
        ]
      }, {
        path: 'tlkt',
        name: 'tlkt',
        component: resolve => require(['@/view/tlkt'], resolve),
        meta: {
          title: '塔罗课堂'
        }
      }
    ]
  }, {
    path: '/tarotClass',
    name: 'tarotClass',
    component: resolve => require(['@/view/tarot-class'], resolve),
    meta: {
      title: '塔罗课堂'
    }
  }, {
    path: '/createFile',
    name: 'createfile',
    component: resolve => require(['@/view/create-file'], resolve),
    meta: {
      title: '新建档案'
    }
  }, {
    path: '/tarot',
    name: 'tarot',
    component: resolve => require(['@/view/tarot'], resolve),
    meta: {
      title: ''
    }
  }, {
    path: '/worker',
    name: 'worker',
    component: resolve => require(['@/view/worker'], resolve),
    meta: {
      title: '咨询师'
    }
  }, {
    path: '/feedBack',
    name: 'feedBack',
    component: resolve => require(['@/view/feed-back'], resolve),
    meta: {
      title: '反馈意见'
    }
  }, {
    path: '/love',
    name: 'xnlove',
    component: resolve => require(['@/view/love'], resolve),
    meta: {
      title: '虚拟恋人'
    }
  }, {
    path: '*',
    redirect: '/bmxp'
  }
]
