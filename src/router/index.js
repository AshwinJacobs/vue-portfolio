import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Portfolio" */ "../views/Projects.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Testimonials.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
