import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: 'demo',
    children: [
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/demo')
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('@/views/tools')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
      }
    ]
  }
]

export default routes
