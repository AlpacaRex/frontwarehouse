import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },{
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( '../views/Search.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../views/Detail.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import( '../views/Personal.vue')
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import( '../views/publish.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
