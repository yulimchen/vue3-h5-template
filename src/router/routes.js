import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: 'Demo',
    children: [
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/demo')
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: {
          noCache: true
        }
      }
    ]
  }
]

export default routes
