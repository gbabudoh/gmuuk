<template>
    <div class="advise-services-page">
      <!-- Full-width Banner -->
      <div class="banner">
        <img src="@/assets/images/legal-aid.jpg" alt="Advise Services Banner" />
      </div>
  
      <!-- Content Wrapper -->
      <div class="content">
        <!-- Title -->
        <h2>Our Advice Services Story</h2>
  
        <!-- Story Paragraph -->
        <p>
          At GMUUK, we are committed to providing reliable and confidential advice services to support our community. 
          Whether it's legal aid, housing, or immigration issues, our team is here to guide you every step of the way.
          We strive to empower individuals with the information they need to make informed decisions.
        </p>
  
        <p>
          Your support allows us to expand our advice services and reach more people in need. 
          Each consultation is handled with professionalism and care, ensuring that our community receives the help they deserve.
          Together, we can build a stronger and more informed community.
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
  name: 'AdviseServices',
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

