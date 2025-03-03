<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo (Far Left) -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="GMUUK Logo" />
        </router-link>
      </div>

      <!-- Desktop Navigation (Far Right) -->
      <nav class="nav-links" v-if="!isMobile">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/team" class="nav-link">Team</router-link>
        <router-link to="/events" class="nav-link">Events</router-link>
        <router-link to="/gallery" class="nav-link">Gallery</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/donate" class="donate-button">Donate</router-link> <!-- Donate Button -->
      </nav>

      <!-- Hamburger Menu (Far Right) -->
      <div class="hamburger" @click="toggleMobileNav" v-if="isMobile">
        <span v-if="!showMobileNav">☰</span>
        <span v-else>X</span>
      </div>
    </div>

    <!-- Mobile Navigation (Full-Screen Menu) -->
    <div class="mobile-nav" v-if="showMobileNav">
      <router-link to="/" class="mobile-nav-link" @click="toggleMobileNav">Home</router-link>
      <router-link to="/about" class="mobile-nav-link" @click="toggleMobileNav">About</router-link>
      <router-link to="/team" class="mobile-nav-link" @click="toggleMobileNav">Team</router-link>
      <router-link to="/events" class="mobile-nav-link" @click="toggleMobileNav">Events</router-link>
      <router-link to="/gallery" class="mobile-nav-link" @click="toggleMobileNav">Gallery</router-link>
      <router-link to="/contact" class="mobile-nav-link" @click="toggleMobileNav">Contact</router-link>
      <router-link to="/donate" class="mobile-donate-button" @click="toggleMobileNav">Donate</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      showMobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.showMobileNav = false; // Close mobile nav on desktop
      }
    },
  },
  mounted() {
    this.handleResize(); // Check screen size on load
    window.addEventListener("resize", this.handleResize); // Listen to resize events
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize); // Cleanup event listener
  },
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background: #f2f2f2;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  max-width: 150px;
}

/* Nav Links */
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 19px;
}

.nav-link:hover {
  color: orange;
}

/* Donate Button */
.donate-button {
  background-color: #ff9800;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.donate-button:hover {
  background-color: #e68900;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  font-size: 1.95rem;
  cursor: pointer;
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #f0f0f0, #d6d6d6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  align-items: center;
  z-index: 20;
  margin-top: 80px;
}

.mobile-nav-link {
  font-size: 1.5rem;
  color: #4a4a4a;
  text-decoration: none;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d6d6d6;
}

.mobile-donate-button {
  background-color: #ff9800;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  width: 80%;
  margin: 1rem 0;
}

.mobile-donate-button:hover {
  background-color: #e68900;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>

