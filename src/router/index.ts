import Login from "@/views/login/index.vue";
import Home from "@/views/home/index.vue";
import { createRouter, createWebHistory, Router } from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Login },
]
export const router: Router = createRouter({
    history: createWebHistory(),
    routes, 
})