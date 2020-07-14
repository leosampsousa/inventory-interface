import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history", // Use browser history
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/index")
    },

    {
        path: "/inventory",
        name: "inventory",
        component: () => import("./components/index")
      },

    {
      path: "/inventory/:id",
      name: "Item Details",
      component: () => import("./components/item")
    },

    {
        path :"/howmany",
        name: "Count",
        component: () => import("./components/howmany")
    }

  ]
});

export default router;