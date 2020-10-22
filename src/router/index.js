import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/layout/index'
import Layout from '@/layout/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'redirect',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: index,
        children: [{
          path: '/home',
          name: 'Index',
          component: () => import('@/views/home/index')
        }]
      },
    ]
  },
  {
    path: '/',
    name: 'redirect',
    component: Layout,
    children: [
      {
        path: '/me',
        name: 'Me',
        component: ()=> import('@/views/my-info/index')
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
