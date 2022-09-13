import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/multiple',
    name: 'Multiple',
    component: () => import('../views/Multiple.vue')
  },
  {
    path: '/contents',
    name: 'Contents',
    component: () => import('../views/Contents.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
