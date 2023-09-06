export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'login',
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'home',
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
];
