export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/login.vue'),
    name: 'login',
    meta: {
      title: '登录',
      icon: 'User',
      hidden: true,
    },
  },
  {
    path: '/home',
    // component: () => import('@/views/home.vue'),
    component: () => import('@/layout/index.vue'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'HomeFilled',
    },
  },
  {
    path: '/screen',
    component: () => import('@/layout/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      icon: 'DataBoard',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/menu',
        component: () => import('@/views/acl/menu.vue'),
        name: 'Menu',
        meta: {
          title: '菜单管理',
          icon: 'HelpFilled',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCart',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'Operation',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'Histogram',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Connection',
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
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      icon: 'QuestionFilled',
      hidden: true,
    },
  },
];
