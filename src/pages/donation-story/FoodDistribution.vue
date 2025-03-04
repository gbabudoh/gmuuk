<template>
    <div class="food-distribution-page">
      <!-- Full-width Banner -->
      <div class="banner">
        <img src="@/assets/images/food-supply.jpg" alt="Food Distribution Banner" />
      </div>
  
      <!-- Content Wrapper -->
      <div class="content">
        <!-- Title -->
        <h2>Our Food Distribution Story</h2>
  
        <!-- Story Paragraph -->
        <p>
          At GMUUK, we are committed to making a difference in the lives of the less fortunate by distributing food to those in need.
          Over the years, your generous donations have enabled us to reach countless families, ensuring that no one goes hungry.
          From providing essential groceries to organizing community meals, our mission is to spread kindness and compassion, one meal at a time.
        </p>
  
        <p>
          With your support, we have been able to expand our reach and impact more communities, both locally and abroad.
          Every contribution, big or small, plays a vital role in our food distribution initiatives. Together, we can continue to fight hunger and bring hope to those who need it the most.
        </p>
  
        <!-- Bottom Title -->
        <h3>Keep Supporting Us</h3>
  
        <!-- Donate Button -->
        <div class="donate-button-wrapper">
            <a href="https://www.justgiving.com/ghanamuslimunion" class="donate-button" target="_blank" rel="noopener noreferrer">Donate</a>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FoodDistribution',
  };
  </script>
  
  <style scoped>
  /* Full-width Banner Styles */
  .banner {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }
  
  .banner img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Ensure full image is displayed without cuts */
    display: block;
  }
  
  /* Content Wrapper Styles */
  .content {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
  }
  
  .content p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .content h3 {
    font-size: 1.5rem;
    margin-top: 40px;
    color: #333;
  }
  
  /* Donate Button Styles */
  .donate-button-wrapper {
    text-align: center;
    margin-top: 20px;
  }
  
  .donate-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff9800;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.125rem;
    transition: background-color 0.3s ease;
  }
  
  .donate-button:hover {
    background-color: #e68a00;
  }
  
 /* Responsive Design */
@media screen and (max-width: 768px) {
  .content {
    padding: 15px;
  }

  .content h2 {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 1rem;
  }

  .content h3 {
    font-size: 1.25rem;
  }

  .donate-button {
    font-size: 1rem;
    padding: 8px 16px;
  }
}

@media screen and (max-width: 480px) {
  .content h2 {
    font-size: 1.25rem;
  }

  .content p {
    font-size: 0.95rem;
  }

  .content h3 {
    font-size: 1.1rem;
  }

  .donate-button {
    font-size: 0.95rem;
    padding: 6px 12px;
  }
}
</style>
