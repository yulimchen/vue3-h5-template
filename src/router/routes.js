const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/Demo'),
    children: [

    ]
  }
]

export default routes
