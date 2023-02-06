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
    name: '登录',
    path: '/login',
    hideInMenu: true,
    layout: false,
    exact: true,
    component: 'login',
  },
];
