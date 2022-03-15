import { createRouter, createWebHistory } from 'vue-router'
import Currencies from '../views/Currencies.vue'
import Converter from '../views/Converter.vue'

const routes = [
  {
    path: '/',
    name: 'currencies',
    component: Currencies
  },
  {
    path: '/converter',
    name: 'converter',
    component: Converter,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
