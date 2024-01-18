import store from "@/store";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: () => import("@/views/Products.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
  // Add a catch-all route for 404
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (store.getters.isAuthenticated || localStorage.getItem("user")) {
      // Proceed to the route
      next();
    } else {
      // Redirect to the login page or another authentication route
      next({ path: "/" });
    }
  } else {
    // If the route does not require authentication, proceed
    next();
  }
});

export default router;
