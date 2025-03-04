<template>
  <div class="donate-page">
    <!-- ✅ Banner Works Fine -->
    <div class="banner">
      <img src="@/assets/images/donate.jpg" alt="Donate Banner" />
    </div>

    <!-- Content Wrapper -->
    <div class="content">
      <!-- Title -->
      <h1>Thank You For Your Donations</h1><br/>      

      <!-- Description -->
      <p class="description">
        So far you have raised around £6,000 on My Ten Nights over the past 3 years. Your donations have helped renovate classrooms, school toilet facilities, and orphanages in Ghana. GMUUK has supported food banks and Muslim burial funds in London. Thank you for your donations and continued support during the month of Ramadan and beyond, may Allah continue to strengthen the bond amongst the Ummah, Ameen.
      </p>     

      <!-- Donation Buttons -->
      <div class="donation-buttons">
        <a href="https://mytennights.com/?charity=ghana-muslim-union-uk" target="_blank" class="btn btn-left">My TenNights</a>
        <a href="https://www.justgiving.com/ghanamuslimunion" target="_blank" class="btn btn-right">Donate</a>
      </div>

      <!-- Section Title -->
      <h2>See What We Do with Your Donations</h2>

      <!-- ✅ Grid Images Fixed & Fully Responsive -->
      <div class="donation-impact">
        <div v-for="(item, index) in donationItems" :key="index" class="donation-item">
          <!-- ✅ Link added to images -->
          <a :href="item.link">
            <img :src="item.image" :alt="item.title" />
          </a>
          <div class="overlay">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Donate - GMUUK',
  meta: [
    { name: 'description', content: 'Support GMUUK by donating to our charity. Help us build a premises in London and support various community projects in the UK and Ghana.' },
    { name: 'keywords', content: 'GMUUK donate, charity, Ghanaian Muslim Union, support, community projects, London, Ghana' },
    { property: 'og:title', content: 'Donate - GMUUK' },
    { property: 'og:description', content: 'Support GMUUK by donating to our charity. Help us build a premises in London and support various community projects in the UK and Ghana.' },
    { property: 'og:url', content: 'https://www.gmuuk.org/donate' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Donate - GMUUK' },
    { name: 'twitter:description', content: 'Support GMUUK by donating to our charity. Help us build a premises in London and support various community projects in the UK and Ghana.' }
  ],
});
</script>

<script>
export default {
  data() {
    return {
      donationItems: [
  { image: new URL('@/assets/images/food-supply.jpg', import.meta.url).href, title: "Food Distribution", link: "/food-distribution" },      
  { image: new URL('@/assets/images/school-supply.jpg', import.meta.url).href, title: "Supporting Orphans", link: "/supporting-orphans" },
  { image: new URL('@/assets/images/orphan-image.jpg', import.meta.url).href, title: "Sponsor a Child to Go to School", link: "/sponsor-a-child" },
  { image: new URL('@/assets/images/healthcare.jpg', import.meta.url).href, title: "Community Health Support", link: "/community-health-support" },
  { image: new URL('@/assets/images/legal-aid.jpg', import.meta.url).href, title: "Advice Services", link: "/advice-services" },
  { image: new URL('@/assets/images/shelter.jpg', import.meta.url).href, title: "Building Shelters", link: "/building-shelters" }
  ],
    };
  },
};
</script>

<style scoped>
/* ✅ Full-width Banner */
.banner {
  width: 100vw;
  height: 600px;
  overflow: hidden;
  position: relative;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive Banner */
@media (max-width: 1024px) {
  .banner {
    height: 450px;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .banner {
    height: 250px;
  }
}

/* Centered Content */
.content {
  text-align: center;
  padding: 2rem 1rem;
}

/* Title */
h1 {
  font-size: 2.5rem;
  margin-top: 1.5rem;
  color: #000;
  font-weight: bold;
}

/* Description */
.description {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.4rem;
  margin: 1.5rem auto;
  max-width: fit-content;
  text-align: left;
}

/* Donation Buttons */
.donation-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  max-width: 250px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background 0.3s ease;
}

.btn-left {
  background: #4caf50;
  color: white;
}

.btn-right {
  background: #ff9800;
  color: white;
}

.btn:hover {
  opacity: 0.85;
}

/* Section Title */
h2 {
  font-size: 2rem;
  margin-top: 3rem;
  color: #000;
}

/* Grid Images */
.donation-impact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  margin-top: 2rem;
}

.donation-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.donation-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  border-radius: 0 0 8px 8px;
}

@media (max-width: 992px) {
  .donation-impact {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .donation-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 80%;
  }

  .donation-impact {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>


