export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      // {
      //   path: 'Exchange/:memberId',
      //   component: '@/pages/Exchange',
      // },
      {
        path: 'list',
        component: '@/pages/Exchange/list',
      },
      {
        path: 'detail',
        component: '@/pages/Exchange/detail',
      },
      {
        path: 'area',
        component: '@/pages/Exchange/areaForm',
      },
      {
        path: 'image',
        component: '@/pages/Exchange/image',
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
            path: 'Exchange/:memberId',
            component: '@/pages/Exchange',
          },
          {
            path: 'Search/:memberId',
            component: '@/pages/Search',
          },
        ],
      },
    ],
  },
];
