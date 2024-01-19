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
    meta: { requiresAuth: true, allowedRoles: ["admin", "user"] },
  },
  {
    path: "/dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true, allowedRoles: ["admin"] },
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

router.beforeEach((to, _from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated =
      store.getters.isAuthenticated || localStorage.getItem("user");

    if (isAuthenticated) {
      // Check the user's role
      const userRole = store.getters.currentUser?.role;

      // Check if the user has the required role for the route
      if (
        to.meta.allowedRoles &&
        (to.meta.allowedRoles as string[]).includes(userRole)
      ) {
        next();
      } else {
        // Redirect to a route indicating insufficient permissions
        next({ path: "/products" });
      }
    } else next({ path: "/" });
  } else next();
});

export default router;
