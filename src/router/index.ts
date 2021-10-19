import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Page1.vue";
import {stepsMap} from "@/utills/configs/StepsMap"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: `/${stepsMap.orders[0]}`,
  },

  {
    path: `/${stepsMap.orders[0]}`,
    name: stepsMap.orders[0],
      component: () =>  import(/* webpackChunkName: "about" */ "../views/Page1.vue"),
  },
  {
    path: `/${stepsMap.orders[1]}`,
    name: stepsMap.orders[1],
    component: () =>  import("../views/Page2.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
