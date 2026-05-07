import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: 'Unfold Coffee — Beranda' },
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/pages/Menu.vue'),
    meta: { title: 'Unfold Coffee — Menu' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: { title: 'Unfold Coffee — Tentang Kami' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// Dynamic page title
router.afterEach((to) => {
  document.title = to.meta.title || 'Unfold Coffee'
})

export default router
