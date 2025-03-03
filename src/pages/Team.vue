<template>
  <div class="team-page">
    <h1 class="page-title">Our Team</h1>
    <div class="team-grid">
      <!-- Team Member 1 -->
      <div class="team-member">
        <img src="@/assets/images/Sheikh-Samad-Ibrahim.jpg" alt="Team Member 1" />
        <h1>Sheikh Abdul Samad Ibrahim</h1>
        <p>Chairman</p>
      </div>

      <!-- Team Member 2 -->
      <div class="team-member">
        <img src="@/assets/images/Sheikh-Razak-Salihu.jpg" alt="Team Member 2" />
        <h1>Sheikh Abdul Razak Salihu</h1>
        <p>Imam</p>
      </div>

      <!-- Team Member 3 -->
      <div class="team-member">
        <img src="@/assets/images/Issah-Ali.jpg" alt="Team Member 3" />
        <h1>Issah Ali</h1>
        <p>Financial Secretary</p>
      </div>

      <!-- Team Member 4 -->
      <div class="team-member">
        <img src="@/assets/images/Adam-Kone.jpg" alt="Team Member 4" />
        <h1>Adam Kone</h1>
        <p>General Secretary</p>
      </div>

      <!-- Team Member 5 -->
      <div class="team-member">
        <img src="@/assets/images/Habiba-Gariba.jpg" alt="Team Member 5" />
        <h1>Habiba Gariba</h1>
        <p>Treasurer</p>
      </div>

      <!-- Team Member 6 -->
      <div class="team-member">
        <img src="@/assets/images/Shakiru-Pedro.jpg" alt="Team Member 6" />
        <h1>Shakiru Pedro</h1>
        <p>Social Secretary</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Our Team - GMUUK | Ghanaian Muslim Union UK',
  meta: [
    { name: 'description', content: 'Meet the team behind GMUUK who are dedicated to serving the Ghanaian Muslim community in the UK.' },
    { name: 'keywords', content: 'GMUUK team, Ghanaian Muslim Union, leadership, UK Muslims' },
    { property: 'og:title', content: 'Our Team - GMUUK | Ghanaian Muslim Union UK' },
    { property: 'og:description', content: 'Meet the team behind GMUUK who are dedicated to serving the Ghanaian Muslim community in the UK.' },
    { property: 'og:url', content: 'https://www.gmuuk.org/team' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Team - GMUUK | Ghanaian Muslim Union UK' },
    { name: 'twitter:description', content: 'Meet the team behind GMUUK who are dedicated to serving the Ghanaian Muslim community in the UK.' }
  ],
});
</script>

<script>
export default {
  name: "Team",
};
</script>

<style scoped>
/* Team Page Styles */
.team-page {
  padding: 2rem 1rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: bold
}

/* Grid Layout */
.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns per row */
  gap: 2rem; /* Space between grid items */
  max-width: 1200px;
  margin: 0 auto; /* Center the grid */
}

/* Team Member Card */
.team-member {
  text-align: center;
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 8px;
  background: transparent;
}

.team-member img {
  width: 150px; /* Circle size */
  height: 150px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover; /* Ensures the image fits inside the circle */
  margin-bottom: 1rem;  
}

.team-member h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #000;  
  font-weight: bold;
}

.team-member p {
  font-size: 1.25rem;
  color: #000; 
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }

  .team-member img {
    width: 120px; /* Adjust image size for smaller screens */
    height: 120px;
  }

  .team-member h1 {
    font-size: 1.3rem; /* Adjust heading size */
  }

  .team-member p {
    font-size: 0.9rem; /* Adjust paragraph size */
  }
}
</style>
