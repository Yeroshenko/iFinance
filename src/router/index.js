import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    alias: '/register',
    name: 'Auth',
    meta: { layout: 'empty' },
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main' },
    component: () => import('@/views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'main' },
    component: () => import('@/views/Planning.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'main' },
    component: () => import('@/views/Record.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main' },
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('@/views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
