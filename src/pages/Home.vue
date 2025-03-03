<template>
  <div>
    <Banner />
    <Intro />
    <Listing1 />
    <Listing2 />
    <Listing3 />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Home - GMUUK | Ghanaian Muslim Union UK',
  meta: [
    { name: 'description', content: 'Welcome to GMUUK. Discover our community events, projects, and support for the Ghanaian Muslim community in the UK.' },
    { name: 'keywords', content: 'GMUUK, Ghanaian Muslim Union, community events, UK Muslims, Islamic support' },
    { property: 'og:title', content: 'Home - GMUUK | Ghanaian Muslim Union UK' },
    { property: 'og:description', content: 'Welcome to GMUUK. Discover our community events, projects, and support for the Ghanaian Muslim community in the UK.' },
    { property: 'og:url', content: 'https://www.gmuuk.org' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Home - GMUUK | Ghanaian Muslim Union UK' },
    { name: 'twitter:description', content: 'Welcome to GMUUK. Discover our community events, projects, and support for the Ghanaian Muslim community in the UK.' }
  ],
});
</script>

<script>
import Banner from "@/components/Banner.vue";
import Intro from "@/components/Intro.vue";
import Listing1 from "@/components/Listing1.vue";
import Listing2 from "@/components/Listing2.vue";
import Listing3 from "@/components/Listing3.vue";

export default {
  components: {
    Banner,
    Intro,
    Listing1,
    Listing2,
    Listing3,
  },
};
</script>



