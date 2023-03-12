import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: `/user/:id`,
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue')
   
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
