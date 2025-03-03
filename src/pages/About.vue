<template>
  <div class="about-page">
    <!-- Full-Width Banner -->
    <div class="banner">
      <img src="@/assets/images/about-us.jpg" alt="About Banner" />
    </div>

    <!-- Content Section -->
    <div class="content">
      <h1>About Us</h1>
      <p>
        We are a Ghanaian Muslim Organisation. We aim to increase faith, build a community, and educate. We provide much-needed help to the Ghanaian community in the UK and support projects home and abroad. That means we facilitate events, including Ramadan gatherings, Nikah wedding ceremonies, and funeral events. We hold community talks on health, legal issues, finance and many more.
      </p>

      <p>
        We run a weekly Quran school for children online and a summer days trip for families. 
        Ghana Muslim Union UK provides activities for youth including book clubs, tech sessions and bowling trips. And holds online lectures for sisters. We provide support for orphanages and schools in Ghana and have expanded this service. GMUUK has been working and operating in the UK since 1972 and has been led by volunteers. Ghana Muslim Union was started by elders from the Ghanaian Muslim community who recognised that there was a need for Islamic services for their community.
        Our vision is to acquire premises where the organisation can serve the community.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'About Us - GMUUK',
  meta: [
    { name: 'description', content: 'Learn more about GMUUK and our mission to support the Ghanaian Muslim community in the UK and abroad.' },
    { name: 'keywords', content: 'GMUUK, Ghanaian Muslim Union, community support, Islamic services, UK' }
  ],
});
</script>

<style scoped>
/* About Page Styles */
.about-page {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Banner Styles */
.banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Content Section Styles */
.content {
  max-width: 90%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: left;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #000;
  text-align: center;
  font-weight: bold;
}

.content p {
  font-size: 1.25rem;
  line-height: 1.4rem;
  color: #000;
  margin-bottom: 1rem;
}

/* Responsive Design */

/* Tablets (≤1024px) */
@media screen and (max-width: 1024px) {
  .content h1 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1.1rem;
  }

  .content {
    padding: 0.8rem;
  }
}

/* Mobile Devices (≤768px) */
@media screen and (max-width: 768px) {
  .content h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .content p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .content {
    padding: 0.5rem;
  }
}

/* Small Mobile Devices (≤480px) */
@media screen and (max-width: 480px) {
  .banner img {
    height: auto;
  }

  .content h1 {
    font-size: 1.6rem;
  }

  .content p {
    font-size: 0.95rem;
  }

  .content {
    padding: 0.5rem;
  }
}
</style>
