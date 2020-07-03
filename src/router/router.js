export default [
  {
    path: '/bmxp',
    name: 'bmxp',
    component: resolve => require(['@/view/bmxp'], resolve),
    meta: {
      title: '本命星盘'
    }
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
    path: '/bmxpDetails',
    name: 'bmxpDetails',
    component: resolve => require(['@/view/bmxp-details'], resolve),
    meta: {
      title: '本命星盘'
    }
  },
  {
    path: '*',
    redirect: '/bmxp'
  }
]
