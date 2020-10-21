import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Layout from '@/layout'
=======
import Home from '../views/Home.vue'
>>>>>>> e65270c3aade407f2611685874bccf1e04a1feb8

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
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
=======
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
>>>>>>> e65270c3aade407f2611685874bccf1e04a1feb8
  }
]

const router = new VueRouter({
  routes
})

export default router
