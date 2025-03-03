<template>
  <div class="banner">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
      <!-- First Slide (Overlay on left for desktop, bottom for mobile) -->
      <div class="slide">
        <img src="@/assets/images/banner0.jpg" alt="Banner Image 1" />
        <div class="overlay left-overlay">
          <h1>Supporting Muslims and Ghanaian Families</h1>
          <p>Connecting cultures, strengthening faith, building community bonds.</p>
        </div>
      </div>

      <!-- Second Slide (Overlay on right for desktop, bottom for mobile) -->
      <div class="slide">
        <img src="@/assets/images/banner1.jpg" alt="Banner Image 2" />
        <div class="overlay right-overlay">
          <h1>Empowering Communities, Bridging Faith and Support</h1>
          <p>Uniting Muslims, Supporting Ghanaians, Empowering Communities</p>
        </div>
      </div>
    </div>

    <button class="arrow left-arrow" @click="prevSlide">&#10094;</button>
    <button class="arrow right-arrow" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      totalSlides: 2,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
  },
};
</script>

<style scoped>
/* Importing Poppins Font */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

.banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 200%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
}

.slide {
  flex: 0 0 50%;
  height: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Shared Overlay Styling */
.overlay {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  padding: 20px;
  max-width: 400px;
  border-radius: 5px;
  transition: all 0.5s ease;
}

/* Left Overlay (Grey Background) */
.left-overlay {
  left: 5%;
  background: rgba(100, 100, 100, 0.8); /* Grey background */
  border: 3px solid #fff;
}

/* Right Overlay (Dark Blue Background) */
.right-overlay {
  right: 5%;
  background: rgba(10, 30, 80, 0.8); /* Dark Blue background */
  border: 3px solid #fff;
}

/* Overlay Title with Poppins Font */
.overlay h1 {
  font-size: 28px;
  font-family: "Poppins", serif;
  margin-bottom: 10px;
  font-weight: 600;
}

/* Overlay Text */
.overlay p {
  font-size: 18px;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
}

.arrow.left-arrow {
  left: 10px;
}

.arrow.right-arrow {
  right: 10px;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Responsive: Move overlay to the bottom on smaller screens */
@media screen and (max-width: 768px) {
  .banner {
    height: auto; /* Auto height to adjust dynamically */
  }

  .slide img {
    width: 100%;
    height: 230px; /* Fixed height for mobile */
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: relative; /* Move text completely below the image */
    bottom: auto;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    text-align: center;
    border-radius: 0;
    padding: 20px; /* Increased padding to ensure full text visibility */
  }

  .overlay h1 {
    font-size: 22px;
    line-height: 1.4; /* Ensures text spacing for visibility */
    word-wrap: break-word;
  }

  .overlay p {
    font-size: 14px;
    line-height: 1.6; /* Proper spacing for readability */
    word-wrap: break-word;
  }

  .left-overlay, .right-overlay {
    left: 0;
    right: 0;
    text-align: center;
  }
}

/* ✅ Further Adjustments for Small Mobile Devices */
@media screen and (max-width: 480px) {
  .banner {
    height: auto;
  }

  .slide img {
    height: 230px; /* Ensuring uniform height */
  }

  .overlay {
    padding: 15px; /* Adjust padding for full text display */
  }

  .overlay h1 {
    font-size: 26px; /* Adjusted font size */
    line-height: 1.4; /* Ensures full text visibility */
    text-align: left;
  }

  .overlay p {
    font-size: 20.5px; /* Adjusted font size */
    line-height: 1.4; /* Keeps text readable */
    text-align: left;
  }

  .arrow {
    font-size: 1.5rem;
    padding: 0.3rem;
  }
}

</style>



