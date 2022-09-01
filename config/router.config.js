/*
 * @Author: xgj
 * @since: 2022-09-01 21:31:56
 * @lastTime: 2022-09-02 00:53:29
 * @LastAuthor: xgj
 * @FilePath: /react-mobile/config/router.config.js
 * @message:
 */
export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: 'login',
        component: '@/pages/Login',
      },
      {
        path: 'sale',
        component: '@/pages/sale',
      },
      {
        path: 'home',
        component: '@/pages/Home',
      },
      {
        path: 'Search/detail',
        component: '@/pages/Search/detail',
      },
      {
        path: 'Demo',
        component: '@/pages/Demo',
      },
      {
        path: '/',
        component: '@/layouts/BaseLayout',
        routes: [
          // {
          //   path: '/',
          //   component: '@/pages/index',
          // },
          {
            path: 'report',
            component: '@/pages/report',
          },
          {
            path: 'Our',
            component: '@/pages/Our',
          },
          // {
          //   path: 'Exchange/:memberId',
          //   component: '@/pages/Exchange',
          // },
          // {
          //   path: 'Search/:memberId',
          //   component: '@/pages/Search',
          // },
        ],
      },
    ],
  },
];
