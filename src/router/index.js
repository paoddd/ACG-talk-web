import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'redirect',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path:'/home',
        name:'Home',
        component:() => import('@/views/home/index')
      },
    ]
  },
  {
    path: '/icon',
    name: 'About',
    component: () => import('@/views/icon-copy/icon-list')
  }
]

const router = new VueRouter({
  routes
})

export default router
