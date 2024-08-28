const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Discussions.vue') },
      { path: '/actus', component: () => import('pages/Actus.vue') },
      { path: '/commun', component: () => import('pages/Commun.vue') },
      { path: '/appels', component: () => import('pages/Appels.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
