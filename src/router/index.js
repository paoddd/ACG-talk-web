import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/layout/index'
import Layout from '@/layout/Layout'
import PageLayout from '@/layout/PageLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'redirect',
    component: Layout,
    redirect: '/home',
    meta:{
      keepAlive:true 
   },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: index,
        meta:{
          keepAlive:true //需要被缓存的组件
       },
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
        component: () => import('@/views/my-info/index')
      },
    ]
  },
  {
    path: '/icon',
    name: 'About',
    component: () => import('@/views/icon-copy/icon-list')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/index')
  },
  {
    path: '/page',
    name: 'Page',
    component: PageLayout,
    children:[{
      path: '/article',
      name: 'Article',
      component: () => import('@/views/talk-article/index')
    },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
