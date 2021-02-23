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
        component: () => import('@/views/demo'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/tools'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: {
          keepAlive: false
        }
      }
    ]
  }
]

export default routes
