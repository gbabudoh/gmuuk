<template>
  <footer class="footer">
      <div class="footer-container">
          <!-- First Column -->
          <div class="footer-column">
              <div class="footer-logo">
                  <img src="@/assets/logo.png" alt="GMUUK Logo" />
              </div>
              <h2>GMUUK</h2>
              <p class="bold-text">Ghana Muslim Union</p>
              <p>Community, Faith, Educate</p>
              <p>Charity Number: 1262773</p>
          </div>

          <!-- Second Column -->
          <div class="footer-column">
              <h2>Quick Links</h2>
              <ul class="footer-links">
                  <li><router-link to="/about" class="footer-link">About GMUUK</router-link></li>
                  <li><router-link to="/team" class="footer-link">Our Team Members</router-link></li>
                  <li><router-link to="/events" class="footer-link">Check Out Events</router-link></li>
                  <li><router-link to="/donate" class="footer-link">Make Donations</router-link></li>
                  <li><router-link to="/contact" class="footer-link">Contact us</router-link></li>
              </ul>
          </div>

          <!-- Third Column -->
          <div class="footer-column">
              <h2>Follow Us</h2>
              <p>Follow us on social:</p>
              <div class="social-icons">
                  <a href="https://en-gb.facebook.com/GMUUK/" target="_blank" rel="noopener noreferrer" class="social-icon">
                      <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/ghana_muslim_union_uk_/?hl=en-gb" target="_blank" rel="noopener noreferrer" class="social-icon">
                      <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCrLSSHrnUEtmwX0dMLV9Prw?app=desktop&cbrd=1" target="_blank" rel="noopener noreferrer" class="social-icon">
                      <i class="fab fa-youtube"></i>
                  </a>
              </div>
          </div>
      </div>

      <!-- Additional Layer for Copyright -->
      <div class="footer-bottom">
          <div class="footer-bottom-content">
              <p>© 2024 GMUUK. All rights reserved.</p>
              <p class="website-credit">Website by Webbidev (<a href="https://webbidev.com" target="_blank" rel="noopener noreferrer">webbidev.com</a>)</p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Footer Styles */
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 1rem 0; /* Remove bottom padding */
}

.bold-text {
  font-weight: bold;
  font-size: 30px;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal columns */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Column Styling */
.footer-column {
  text-align: left;
}

.footer-logo img {
  max-width: 100px;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 5px;
}

.footer-column h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffdd57; /* Highlight color for headings */
}

.footer-column p {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 0.5rem;
}

/* Links Styling */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffdd57; /* Highlight color on hover */
}

/* Social Icons Styling */
.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ffdd57; /* Highlight color on hover */
}

/* Additional Layer for Copyright */
.footer-bottom {
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-top: 1rem;
  border-top: 1px solid #444;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
  color: #bbb;
}

/* Website Credit */
.website-credit {
  font-size: 0.8rem;
  color: #bbb;
}

.website-credit a {
  color: #ffdd57; /* Highlight color for link */
  text-decoration: none;
}

.website-credit a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .footer-container {
      grid-template-columns: 1fr; /* Single column on smaller screens */
      gap: 1.5rem;
      text-align: center;
  }

  .footer-column {
      text-align: center;
  }

  .footer-bottom-content {
      flex-direction: column;
      align-items: center;
  }

  .footer-bottom-content p {
      margin-bottom: 0.5rem;
  }

  .social-icons {
    justify-content: center; /* Center the icons on smaller screens */
  }
}
</style>
