import { createRouter, createWebHistory } from 'vue-router'
import ExibirVagas from '../views/ExibirVagas.vue'

const routes = [
  {
    path: '/',
    name: 'ExibirVagas',
    component: ExibirVagas
  },
  {
    path: '/publicarVagas',
    name: 'PublicarVagas',
    component: () => import(/* webpackChunkName: "publicarVagas" */ '../views/PublicarVagas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
