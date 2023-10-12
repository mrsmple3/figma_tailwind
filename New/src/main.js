import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import ServicePage from "@/components/ServicePage.vue";
import ServiceSingle from "@/components/ServiceSingle.vue";
import TeamPage from "@/components/TeamPage.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage,
    },
    {
      name: "About",
      path: "/about",
      component: AboutPage,
    },
    {
      name: "Contact",
      path: "/contact",
      component: ContactPage,
    },
    {
      name: "Service",
      path: "/services",
      component: ServicePage,
    },
    {
      name: "Service Single",
      path: "/service-single",
      component: ServiceSingle,
    },
    {
      name: "Team",
      path: "/team",
      component: TeamPage,
    },
    {
      name: "NotFound",
      path: "/:catchAll(.*)",
      component: NotFoundPage,
    },
  ],
});

createApp(App).use(router).mount("#app");
