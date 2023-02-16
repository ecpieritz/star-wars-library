import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/PeopleView.vue')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('../views/FilmsView.vue')
  },
  {
    path: '/species',
    name: 'species',
    component: () => import('../views/SpeciesView.vue')
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import('../views/PlanetsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
