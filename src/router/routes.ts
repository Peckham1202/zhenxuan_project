export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'login',
    meta: {
      title: '登录',
    },
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home.vue'),
        name: 'home',
        meta: {
          title: '主页',
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
    },
    children: [
      {
        path: '/ceshi1',
        component: () => import('@/layout/index.vue'),
        name: 'ceshi',
        meta: {
          title: '测试1',
        },
      },
      {
        path: '/ceshi2',
        component: () => import('@/views/home.vue'),
        name: 'ceshi',
        meta: {
          title: '测试2',
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
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
    },
  },
];
