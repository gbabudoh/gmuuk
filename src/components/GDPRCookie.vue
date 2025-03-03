<template>
  <div v-if="showBanner" class="gdpr-cookie-banner">
    <p class="gdpr-text">We use cookies to ensure you get the best experience on our website.</p>
    <div class="gdpr-buttons">
      <button class="gdpr-button not-ok" @click="rejectCookies">DECLINE</button>
      <button class="gdpr-button ok" @click="acceptCookies">ACCEPT</button>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Cookie Policy - GMUUK',
  meta: [
    { name: 'description', content: 'Learn about our cookie policy at GMUUK and how we use cookies to enhance your browsing experience.' },
    { name: 'keywords', content: 'GMUUK cookies, cookie policy, GDPR compliance, privacy policy' },
    { property: 'og:title', content: 'Cookie Policy - GMUUK' },
    { property: 'og:description', content: 'Learn about our cookie policy at GMUUK and how we use cookies to enhance your browsing experience.' },
    { property: 'og:url', content: 'https://www.gmuuk.org/cookie-policy' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Cookie Policy - GMUUK' },
    { name: 'twitter:description', content: 'Learn about our cookie policy at GMUUK and how we use cookies to enhance your browsing experience.' }
  ],
});
</script>

<script>
export default {
  name: "GDPRCookie",
  data() {
    return {
      showBanner: false,
    };
  },
  methods: {
    acceptCookies() {
      localStorage.setItem("cookieConsent", "accepted");
      this.showBanner = false;
    },
    rejectCookies() {
      localStorage.setItem("cookieConsent", "rejected");
      this.showBanner = false;
    },
    checkConsent() {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        this.showBanner = true;
      }
    },
  },
  mounted() {
    this.checkConsent();
  },
};
</script>

<style scoped>
.gdpr-cookie-banner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #222;
  color: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  z-index: 1000;
  max-width: 90%;
}

.gdpr-text {
  margin: 0;
  padding-right: 20px;
  font-size: 14px;
}

.gdpr-buttons {
  display: flex;
  gap: 10px;
}

.gdpr-button {
  background-color: #ffdd57;
  color: #222;
  border: none;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
  width: 100px;
}

.gdpr-button.not-ok {
  background-color: #ff6b6b;
  color: #fff;
}

.gdpr-button.ok {
  background-color: #4caf50;
  color: #fff;
}

.gdpr-button:hover {
  opacity: 0.9;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .gdpr-cookie-banner {
        bottom: 10px;
        right: 50%;
        transform: translateX(50%);
        flex-direction: column;
        align-items: center;
        padding: 15px;
        width: 80%;
    }

    .gdpr-text {
        padding-right: 0;
        margin-bottom: 5px;
        font-size: 12px;
        text-align: center;
    }

    .gdpr-buttons {
        gap: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .gdpr-button {
        padding: 8px;
        font-size: 12px;
        max-width: 120px;
    }
}
</style>


  