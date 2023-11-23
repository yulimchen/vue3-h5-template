import Layout from "@/layout/index.vue";
import Demo from "@/views/demo/index.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      }
    ]
  }
];

export default routes;
