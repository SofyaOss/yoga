import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import PriceView from '@/views/PriceView.vue'
import AreasView from '@/views/AreasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/price',
    name: 'price',
    component: PriceView
  },
  {
    path: '/areas',
    name: 'areas',
    component: AreasView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
