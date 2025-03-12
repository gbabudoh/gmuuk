<template>
    <div class="charity-work">
      <h2>What We Do With Your Donations</h2>
  
      <!-- Grid of 6 Columns -->
      <div class="grid-container">
        <div class="grid-item">
          <img :src="foodImage" alt="Food Distribution" />
          <p>We provide essential food supplies to families in need in both Ghana and the UK.</p>
          <router-link to="/food-distribution">Read More</router-link>
        </div>
        <div class="grid-item">
          <img :src="orphanImage" alt="Supporting Orphans" />
          <p>Your donations help provide education supplies for children in Ghana, especially orphans.</p>
          <router-link to="/supporting-orphans">Read More</router-link>
        </div>
        <div class="grid-item">
          <img :src="schoolImage" alt="Sponsor a Child to Go to School" />
          <p>Sponsor a child's education in Ghana and provide them with the resources they need to succeed.</p>
          <router-link to="/sponsor-a-child">Read More</router-link>
        </div>
        <div class="grid-item">
          <img :src="healthcareImage" alt="Community Health Support" />
          <p>Support healthcare initiatives by funding medical supplies and healthcare camps in Ghana.</p>
          <router-link to="/community-health-support">Read More</router-link>
        </div>
        <div class="grid-item">
          <img :src="adviceImage" alt="Advice Services" />
          <p>We offer legal aid and advice to those who need it the most in underserved communities.</p>
          <router-link to="/advice-services">Read More</router-link>
        </div>
        <div class="grid-item">
          <img :src="shelterImage" alt="Building Shelters" />
          <p>Your support helps us build shelters and provide safe housing for vulnerable families in Ghana.</p>
          <router-link to="/building-shelters">Read More</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CharityWork",
    data() {
      return {
        foodImage: new URL('@/assets/images/food-supply.jpg', import.meta.url).href,
        orphanImage: new URL('@/assets/images/orphan-image.jpg', import.meta.url).href,
        schoolImage: new URL('@/assets/images/school-supply.jpg', import.meta.url).href,
        healthcareImage: new URL('@/assets/images/healthcare.jpg', import.meta.url).href,
        adviceImage: new URL('@/assets/images/legal-aid.jpg', import.meta.url).href,
        shelterImage: new URL('@/assets/images/shelter.jpg', import.meta.url).href,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container for the page */
  .charity-work {
    text-align: center;
    padding: 0;
    text-align: left;
  }
  
  /* Title Style */
  h2 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #333;
     text-align: center;
     margin-top: 30px; 
     font-weight: 600;
  }

  
  /* Grid Container */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns per row */
    gap: 1.5rem;
    padding: 1rem;
    margin-top: 2rem;
    width: 100%;
    padding: 0;
  }
  
  /* Grid Item Style */
  .grid-item {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f9f9f9;
    padding: 1rem;
  }
  
  .grid-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .grid-item p {
    font-size: 1rem;
    margin: 1rem 0;
  }
  
  .grid-item router-link {
    text-decoration: none;
    font-size: 1rem;
    color: #ff9800;       
  }
  
  .grid-item router-link:hover {
    color: #e68a00;   
  }

  
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr); /* 2 columns per row on tablets */
    }
  }
  
  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: 1fr; /* 1 column per row on small screens */
    }
  }
  </style>
  
  