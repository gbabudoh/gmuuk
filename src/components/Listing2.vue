<template>
    <section class="listing-banner">
      <!-- Image with Text Overlay -->
      <div class="banner-container">
        <img src="@/assets/images/banner-wide.jpg" alt="Banner" class="banner-image" />
        <div class="overlay-text">
          <h1>Identify Support Opportunities</h1>
          <p>
            Explore new events programs and activities that connect you with the community and help you make a lasting impact.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Listing2",
  };
  </script>
  
  <style scoped>
  /* Listing Banner Section */
  .listing-banner {
    position: relative;
    width: 100%;
    padding: 0; /* No extra padding */
    margin: 0 auto; /* Center the banner */
    overflow: hidden; /* Ensure no overflow */
  }
  
  .banner-container {
    position: relative;
    width: 100%; /* Full width of the page */
    max-width: 96%; /* Optional: Limit max width for large screens */
    margin: 0 auto; /* Center the banner */
  }
  
  .banner-image {
    width: 100%; /* Ensure the image spans full width */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensure image fills the container */
    border-radius: 8px; /* Optional: Rounded corners */
  }
  
  /* Overlay Text */
  .overlay-text {
    position: absolute;
    top: 10%; /* Position text at the top-left corner */
    left: 5%; /* Slightly inset from the left */
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for readability */
    max-width: 50%; /* Limit text width */
  }
  
  .overlay-text h1 {
    font-size: 5.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;    
  }
  
  .overlay-text p {
    font-size: 2.6rem;
    line-height: 1.4;
    text-align: left;
    text-align: left;
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 768px) {
  .overlay-text {
    position: static; /* Remove absolute positioning */
    text-align: left; /* Align text to the left */
    margin: 1rem 0; /* Add spacing above and below */
    width: 100%; /* Ensure the container spans the full width */
    max-width: 100%; /* Ensure it doesn't exceed the container width */
  }

  .banner-container {
    flex-direction: column; /* Stack elements vertically */
  }

  .overlay-text h1 {
    font-size: 3.5rem;
    text-align: left; /* Align heading to the left */
    color: #000;
    text-shadow: none;
    padding: 10px;
    margin: 0; /* Remove default margin */
    width: 100%; /* Ensure the heading spans the full width */
    max-width: 100%; /* Ensure it doesn't exceed the container width */
  }

  .overlay-text p {
    font-size: 1rem;
    text-shadow: none;
    color: #000;
    text-align: left; /* Align paragraph to the left */
    padding: 10px;
    margin: 0; /* Remove default margin */
    width: 100%; /* Ensure the paragraph spans the full width */
    max-width: 100%; /* Ensure it doesn't exceed the container width */
  }
}
  </style>
  