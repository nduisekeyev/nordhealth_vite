import "@nordhealth/components";
import "@nordhealth/css";
import "@nordhealth/css/lib/nord.min.css";
import "@nordhealth/themes/lib/nord-dark.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Adjust this import based on your store structure

createApp(App).use(store).use(router).mount("#app");
