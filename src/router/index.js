import { createRouter, createWebHistory } from 'vue-router'
import LoginImage1 from '/assets/images/LoginImage1.jpg'
import Login from '../views/LoginView.vue'
import Visualization from '../views/VisualizationView.vue'
import A from '../views/11.vue'

const images = [
  LoginImage1,
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/visualization',
    name: 'visualization',
    component: Visualization
  },  
  {
    path: '/a',
    name: 'a',
    component: A
  },  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    const img = new Image();
    img.src = images[0];
  }
  next();
});

export default router