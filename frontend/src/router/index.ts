import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import $store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const user = $store.getters.getUser
      if (Object.keys(user).length) {
        next()
      } else {
        next('/auth')
      }
    },
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
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
    beforeEnter: (to, from, next) => {
      const user = $store.getters.getUser
      if (Object.keys(user).length) {
        next()
      } else {
        next('/auth')
      }
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
