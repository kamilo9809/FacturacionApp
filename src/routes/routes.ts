import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/dashboard.vue";
import Login from "../views/login.vue";
import Error404 from "../views/error404.vue";
import CreateInvoicing from "../views/navItems/createInvoicing.vue";
import History from "../views/navItems/history.vue";
import SearchInvoicing from "../views/navItems/searchInvoicing.vue";
import Clients from "../views/navItems/clients.vue";
import Configurations from "../views/navItems/configurations.vue";
import Reports from "../views/navItems/reports.vue";

const routes = [
  { 
    path: "/dashboard", 
    component: dashboard, 
    children: [
      {
        path:'createInvoicing',
        component:CreateInvoicing
      },
      {
        path:'hystory',
        component:History
      },
      {
        path:'searchInvoicing',
        component:SearchInvoicing
      },
      {
        path:'clients',
        component:Clients
      },
      {
        path:'configuration',
        component:Configurations
      },
      {
        path:'reports',
        component:Reports
      },
    ] 
  },
  { 
    path: "/login", 
    component: Login 
  },
  { 
    path: "/error404", 
    component: Error404 
  },
  {
    path:'/',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
