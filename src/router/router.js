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
    path: '/createFile',
    name: 'createfile',
    component: resolve => require(['@/view/create-file'], resolve),
    meta: {
      title: '新建档案'
    }
  }, {
    path: '/worker',
    name: 'worker',
    component: resolve => require(['@/view/worker'], resolve),
    meta: {
      title: '占星师'
    }
  }, {
    path: '/feedBack',
    name: 'feedBack',
    component: resolve => require(['@/view/feed-back'], resolve),
    meta: {
      title: '反馈意见'
    }
  }, {
    path: '*',
    redirect: '/bmxp'
  }
]
