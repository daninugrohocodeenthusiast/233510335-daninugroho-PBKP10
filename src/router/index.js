import { createRouter, createWebHistory } from 'vue-router';

// Import all your page components from the views folder
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import ArticleView from '../views/ArticleView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  }
  // Anda bisa menambahkan rute lain di sini, misalnya 404 Not Found
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Menggunakan history mode untuk URL bersih
  routes
});

export default router;