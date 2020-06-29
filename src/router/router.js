export default [
  {
    path: '/bmxp',
    name: 'bmxp',
    component: resolve => require(['@/view/bmxp'], resolve),
    meta: {
      title: 'bmxp'
    }
  }, {
    path: '/createFile',
    name: 'createfile',
    component: resolve => require(['@/view/create-file'], resolve),
    meta: {
      title: '新建档案'
    }
  }, {
    path: '/privatePolicy',
    name: 'privatepolicy',
    component: resolve => require(['@/view/private-policy'], resolve),
    meta: {
      title: '隐私政策'
    }
  }
]
