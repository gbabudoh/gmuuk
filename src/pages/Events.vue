<template>
  <div class="events-page">
    <h1>Upcoming Events</h1>
    <iframe
      id="events-iframe"
      src="https://backend.gmuuk.org/events"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Upcoming Events - GMUUK',
  meta: [
    { name: 'description', content: 'Explore the upcoming events organized by GMUUK. Stay updated on community gatherings, seminars, and other events.' },
    { name: 'keywords', content: 'GMUUK events, Ghanaian Muslim Union, community events, seminars, gatherings' },
    { property: 'og:title', content: 'Upcoming Events - GMUUK' },
    { property: 'og:description', content: 'Explore the upcoming events organized by GMUUK. Stay updated on community gatherings, seminars, and other events.' },
    { property: 'og:url', content: 'https://www.gmuuk.org/events' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Upcoming Events - GMUUK' },
    { name: 'twitter:description', content: 'Explore the upcoming events organized by GMUUK. Stay updated on community gatherings, seminars, and other events.' }
  ],
});
</script>

<script>
export default {
  mounted() {
    const iframe = document.getElementById("events-iframe");

    // Dynamically adjust iframe height on load
    iframe.onload = () => {
      try {
        const iframeContent = iframe.contentWindow.document;
        iframe.style.height = iframeContent.body.scrollHeight + "px";
      } catch (error) {
        console.error("Error adjusting iframe height:", error);
      }
    };

    // Periodically check for content height changes and adjust iframe height
    setInterval(() => {
      try {
        const iframeContent = iframe.contentWindow.document;
        iframe.style.height = iframeContent.body.scrollHeight + "px";
      } catch (error) {
        console.error("Error adjusting iframe height:", error);
      }
    }, 1000); // Adjust height every second
  },
};
</script>

<style scoped>
.events-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  margin-top: 20px;
}

.site-header {
  background-color: var(--base-3);
  display: none;
}

iframe {
  width: 100%; /* Ensure the iframe takes the full width of its container */
  height: 100vh; /* Set initial height to viewport height */
  border: none; /* Remove iframe border */
  overflow: hidden; /* Prevent scrollbars from showing */
}
</style>



