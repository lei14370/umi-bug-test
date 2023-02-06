export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: 'home',
  },
  {
    name: '用户管理',
    path: '/user',
    component: 'user',
  },
  {
    name: '用户新增',
    path: '/user/detail',
    component: 'user/detail',
    hideInMenu: true,
  },
  {
    name: '应用管理',
    path: '/application',
    component: 'application',
  },
  {
    name: '应用管理新增',
    path: '/application/detail',
    component: 'application/detail',
    hideInMenu: true,
  },
  {
    name: '监控日志',
    path: '/logs',
    component: 'logs',
  },
  {
    name: '监控日志详情',
    path: '/logs/detail',
    component: 'logs/detail',
    hideInMenu: true,
  },
  {
    name: '登录',
    path: '/login',
    hideInMenu: true,
    layout: false,
    exact: true,
    component: 'login',
  },
];
