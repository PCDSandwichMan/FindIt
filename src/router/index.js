import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Support from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/support",
    name: "support",
    component: Support
  }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
});

export default router;
