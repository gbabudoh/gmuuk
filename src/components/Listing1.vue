<template>
    <section class="listing">
      <div class="listing-grid">
        <!-- First Grid Item -->
        <div class="listing-item">
          <img src="@/assets/images/community-events.jpg" alt="Listing 1 Image" />
          <p>
            Explore our wide range of activities and opportunities designed to connect you with
            the community and make a meaningful impact.
          </p>
        </div>
  
        <!-- Second Grid Item -->
        <div class="listing-item">
          <img src="@/assets/images/events-programs.jpg" alt="Listing 2 Image" />
          <p>
            Discover events and programs that align with your interests, and join hands with
            like-minded individuals to achieve your goals.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Listing1",
  };
  </script>
  
  <style scoped>
  /* Listing Section Styles */
  .listing {
    padding: 2rem 1rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .listing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two equal columns for larger screens */
    gap: 1.5rem; /* Space between grid items */
    max-width: 100%; /* Constrain grid width */
    width: 100%;
  }
  
  .listing-item {
    background: transparent;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: transparent;
  }
  
  .listing-item img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0; /* Rounded corners at the top */
    object-fit: cover;
  }
  
  .listing-item p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.4rem;
    color: #000;
    text-align: left;
    
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 1024px) {
    .listing-grid {
      grid-template-columns: 1fr 1fr; /* Two columns for tablets */
      gap: 1rem; /* Reduce gap for smaller screens */
    }
  }
  
  @media screen and (max-width: 768px) {
    .listing-grid {
      grid-template-columns: 1fr; /* Single column for smaller devices */
    }
    .listing-item {
      padding: 0.8rem; /* Reduce padding for smaller devices */
    }
    .listing-item p {
      font-size: 0.95rem; /* Slightly smaller font for text */
    }
  }
  
  @media screen and (max-width: 480px) {
    .listing {
      padding: 1rem 0.5rem; /* Smaller padding for very small devices */
    }
    .listing-item p {
      font-size: 0.9rem; /* Further reduce text size */
    }
  }
  </style>
  
  