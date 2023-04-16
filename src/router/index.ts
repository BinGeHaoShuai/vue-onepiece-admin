import Home from "@/layout/index.vue";
import Login from "@/views/login/index.vue";
import { createRouter, createWebHistory, Router } from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
]
export const router: Router = createRouter({
    history: createWebHistory(),
    routes, 
})