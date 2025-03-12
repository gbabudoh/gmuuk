import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
  { path: "/about", name: "About", component: () => import("../pages/About.vue") },
  { path: "/team", name: "Team", component: () => import("../pages/Team.vue") },
  { path: "/events", name: "Events", component: () => import("../pages/Events.vue") },
  { path: "/donate", name: "Donate", component: () => import("../pages/Donate.vue") },
  { path: "/gallery", name: "Gallery", component: () => import("../pages/Gallery.vue") },
  { path: "/contact", name: "Contact", component: () => import("../pages/Contact.vue") },
  { path: "/food-distribution", name: "FoodDistribution", component: () => import("../pages/FoodDistribution.vue") },
  { path: "/advice-services", name: "AdviseServices", component: () => import("../pages/AdviseServices.vue") },
  { path: "/building-shelters", name: "BuildingShelters", component: () => import("../pages/BuildingShelters.vue") },
  { path: "/community-health-support", name: "CommunityHealthSupport", component: () => import("../pages/CommunityHealthSupport.vue") },
  { path: "/sponsor-a-child", name: "SponsorAchild", component: () => import("../pages/SponsorAchild.vue") },
  { path: "/supporting-orphans", name: "SupportingOrphans", component: () => import("../pages/SupportingOrphans.vue") },
  { path: "/charity-work", name: "CharityWork", component: () => import("../pages/CharityWork.vue") },
 
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  }
});

export default router;