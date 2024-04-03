import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
  type RouteRecordRaw,
} from "vue-router";

import ItemsView from "@/views/ItemsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "items",
    props: (route: RouteLocationNormalizedLoaded) => ({
      searchTerm: route.query?.search || "",
    }),
    component: ItemsView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router