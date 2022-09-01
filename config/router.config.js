export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
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
