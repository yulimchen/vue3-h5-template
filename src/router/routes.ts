import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: "demo",
    children: [
      {
        path: "demo",
        name: "demo",
        component: () => import("@/views/demo/index.vue"),
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
