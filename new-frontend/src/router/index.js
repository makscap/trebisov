import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ConstructorView from "../views/ConstructorView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    title: "Domov",
    component: HomeView,
  },
  {
    path: "/:chapters+",
    component: ConstructorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
