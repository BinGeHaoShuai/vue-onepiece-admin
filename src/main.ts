import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import {router} from "./router/index";
import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";


const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(router);
app.use(pinia);

app.mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
