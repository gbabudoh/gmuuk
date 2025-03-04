<template>
  <div class="contact-container">
    <!-- Contact Form at the Top -->
    <div class="contact-form">
      <h2>Send Us a Message</h2>
      <iframe
        src="https://backend.gmuuk.org/contact"
        width="100%"
        height="700"
        frameborder="0"
        style="border: none; overflow: hidden;">
      </iframe>
    </div>

    <!-- Contact Details Below -->
    <div class="contact-details">
      <h3>Contact Information</h3>
      <p><strong>Telephone:</strong>+ 44 (0) 7923142771</p>
      <p><strong>Email:</strong> <a href="mailto:info@gmuuk.org" style="color: inherit; text-decoration: none;">info@gmuuk.org</a></p>
      <p><strong>Website:</strong> <a href="https://www.gmuuk.org" target="_blank" style="color: inherit; text-decoration: none;">www.gmuuk.org</a></p>

    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Contact Us - GMUUK',
  meta: [
    { name: 'description', content: 'Contact GMUUK for support, inquiries, or partnership opportunities.' },
    { name: 'keywords', content: 'GMUUK contact, Ghanaian Muslim Union, support, inquiries, partnership' },
    { property: 'og:title', content: 'Contact Us - GMUUK' },
    { property: 'og:description', content: 'Contact GMUUK for support, inquiries, or partnership opportunities.' },
    { property: 'og:url', content: 'https://www.gmuuk.org/contact' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Us - GMUUK' },
    { name: 'twitter:description', content: 'Contact GMUUK for support, inquiries, or partnership opportunities.' }
  ],
});
</script>

<style scoped>
/* Container */
.contact-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  background: #f9f9f9;
}

/* Contact Form */
.contact-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: -100px;
}

.contact-form h2 {
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
}

/* Remove iframe scrolling */
.contact-form iframe {
  display: block;
  width: 100%;
  height: 700px;
  border: none;
  overflow: hidden;
}

/* Contact Details */
.contact-details {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-details h3 {
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: 700;
}

.contact-details p {
  font-size: 18px;
  margin-bottom: 10px;
}

.contact-details a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .contact-container {
    padding: 0;
  }

  .contact-form, .contact-details {
    padding: 0;
  }

  .contact-form h2, .contact-details h3 {
    font-size: 20px;
    margin-top: 20px;
  }

  .contact-details p {
    font-size: 16px;
  }

  .contact-form iframe {
    height: 900px;
  }
}
</style>

