import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initAll } from "@id-sk/frontend/idsk/all";
import VueCookies from "vue-cookies";
import Markdown from "vue3-markdown-it";
import { createMetaManager } from "vue-meta";

initAll();
createApp(App)
  .use(VueCookies, { expire: "7d" })
  .use(Markdown)
  .use(router)
  .use(createMetaManager())
  .mount("#app");
