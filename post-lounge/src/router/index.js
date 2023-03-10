import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
