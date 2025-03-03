// src/plugins/gtag.js
import { createApp } from 'vue';
import VueGtag from 'vue-gtag';

export const setupAnalytics = (app) => {
  app.use(VueGtag, {
    config: { id: 'G-LFNPWJZHKJ' }  // Replace with your Google Analytics Measurement ID
  });
};
