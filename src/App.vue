<template>
  <div>
    <!-- Navbar -->
    <Navbar />
    
    <!-- Main Content -->
    <router-view />
    
    <!-- Footer -->
    <Footer />

    <!-- GDPR Cookie Banner -->
    <GDPRCookie />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import GDPRCookie from "./components/GDPRCookie.vue"; // Import GDPR Cookie Component

export default {
  components: {
    Navbar,
    Footer,
    GDPRCookie, // Register GDPR Cookie Component
  },
};
</script>
