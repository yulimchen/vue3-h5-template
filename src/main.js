import { createApp } from "vue";
import { createPinia } from "pinia";
// normalize.css
import "normalize.css/normalize.css";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
