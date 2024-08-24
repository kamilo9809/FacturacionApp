import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../components/dashboard.vue';

const routes = [
  { path: '/dashboard', component: dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
