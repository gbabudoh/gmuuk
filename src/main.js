// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./global.css"; // Import global styles
import '@fortawesome/fontawesome-free/css/all.css';

// Import vue-gtag for Google Analytics
import VueGtag from "vue-gtag";

// Create the Vue app instance
const app = createApp(App);

// Configure Google Analytics
app.use(VueGtag, {
  config: { id: "G-G-LFNPWJZHKJ" } // Replace with your Google Analytics Measurement ID
}, router); // Pass the router to enable page tracking

// Use router and mount the app
app.use(router).mount("#app");

