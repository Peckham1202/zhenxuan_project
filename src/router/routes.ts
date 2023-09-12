export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'login',
    meta: {
      title: '登录',
      icon: 'User',
    },
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
      icon: 'Filter',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home.vue'),
        name: 'home',
        meta: {
          title: '主页',
          icon: 'House',
        },
      },
    ],
  },
  {
    path: '/ceshi',
    component: () => import('@/views/login.vue'),
    name: 'ceshi',
    meta: {
      title: '测试',
      icon: 'Document',
    },
    children: [
      {
        path: '/ceshi1',
        component: () => import('@/layout/index.vue'),
        name: 'ceshi',
        meta: {
          title: '测试1',
          icon: 'Notebook',
        },
      },
      {
        path: '/ceshi2',
        component: () => import('@/views/home.vue'),
        name: 'ceshi',
        meta: {
          title: '测试2',
          icon: 'Memo',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    name: '404',
    meta: {
      title: '404',
      icon: 'CircleCloseFilled',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      icon: 'QuestionFilled',
    },
  },
];
