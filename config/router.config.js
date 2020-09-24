export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: 'Exchange/:memberId',
        component: '@/pages/Exchange',
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
        path: '/',
        component: '@/layouts/BaseLayout',
        routes: [
          {
            path: '/',
            component: '@/pages/index',
          },
        ],
      },
    ],
  },
];
