<template>
  <div class="gallery-container">
    <h1>Gallery</h1>

    <!-- Show loading state -->
    <div v-if="loading" class="loading">Loading gallery...</div>

    <!-- Show error if API fails -->
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Display gallery grid -->
    <div v-if="gallery.length > 0" class="gallery-grid">
      <div 
        v-for="image in gallery.slice(0, 8)" 
        :key="image.id" 
        class="gallery-item"
      >
        <!-- Clickable image -->
        <div class="image-wrapper" @click="openModal(image)">
          <img :src="image.url" :alt="image.title" loading="lazy" />
          <!-- Caption Overlay at Bottom -->
          <div class="caption">
            <h3>{{ image.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="!loading && !error">No images found in the gallery.</p>

    <!-- Modal (Pop-up) -->
    <div v-if="selectedImage" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-button" @click="closeModal">&times;</span>
        <img :src="selectedImage.url" :alt="selectedImage.title" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      gallery: [], // Stores gallery images
      loading: true, // Loading state
      error: null, // Error message
      selectedImage: null, // Image selected for the modal
    };
  },
  methods: {
    async fetchGallery() {
      try {
        const response = await axios.get("https://backend.gmuuk.org/wp-json/wp/v2/media?per_page=20");

        this.gallery = response.data
          .filter((item) => item.media_type === "image") // Ensure only images are included
          .map((item) => ({
            id: item.id,
            title: item.title.rendered,
            url: item.source_url, // Image URL
          }));

        this.loading = false;
      } catch (err) {
        console.error("Error fetching gallery:", err.message || err.response);
        this.error = "Failed to load gallery. Please try again later.";
        this.loading = false;
      }
    },
    openModal(image) {
      this.selectedImage = { ...image }; // Store only the selected image
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    },
    closeModal() {
      this.selectedImage = null;
      document.body.style.overflow = "auto"; // Enable scrolling again
    },
  },
  mounted() {
    this.fetchGallery();
  },
};
</script>

<style scoped>
/* Container */
.gallery-container {
  width: auto;
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  text-align: center;
  background: #f9f9f9;
}

/* Heading */
.gallery-container h1 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}

/* Loading and Error Messages */
.loading,
.error {
  font-size: 1.5rem;
  margin: 2rem;
}

.error {
  color: red;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Adjusted to allow larger images */
  gap: 20px;
  padding: 20px;
  justify-content: center; /* Center the images */
}

/* Gallery Item */
.gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

/* Image Wrapper */
.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px; /* Increased max-width to allow larger images */
  overflow: hidden;
  border-radius: 8px;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
}

/* Caption Overlay (Bottom of Image) */
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  transition: opacity 0.2s ease-in-out;
  text-align: left;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-wrapper:hover .caption {
  opacity: 1;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%; /* Adjusted to take more space */
  text-align: center;
  position: relative;
}

.modal-content img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Close Button */
.close-button {
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 40px;
  cursor: pointer;
  color: red;
  font-weight: bold;
}

/* Responsive Adjustments */
/* Responsive Adjustments */
@media screen and (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 per row on tablets */
  }
}

@media screen and (max-width: 768px) {
  .gallery-container {
    padding: 20px;
  }

  .gallery-container h1 {
    font-size: 24px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 per row on mobile */
  }

  .image-wrapper {
    max-width: 300px; /* Larger image size for tablets */
  }
}

@media screen and (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 per row on small screens */
  }

  .image-wrapper {
    max-width: 350px; /* Larger images for small devices */
  }

  .modal-content {
    max-width: 90%;
  }
}
</style>


