<template>
  <section class="listing3">
    <div class="listing3-grid">
      <!-- First Column -->
      <router-link to="/events" class="listing3-item">
        <img src="@/assets/images/comm-card-1.jpg" alt="Item 1" />
        <h1>Community Events</h1>
        <p>
          Join exciting community events and connect with like-minded individuals
          to make a lasting impact.
        </p>
      </router-link>

      <!-- Second Column -->
      <router-link to="/donate" class="listing3-item">
        <img src="@/assets/images/comm-card-2.jpg" alt="Item 2" />
        <h1>Supporting Communities In Ghana</h1>
        <p>
          Discover meaningful volunteer opportunities and contribute to causes
          that matter most to you.
        </p>
      </router-link>

      <!-- Third Column -->
      <router-link to="/events" class="listing3-item">
        <img src="@/assets/images/comm-card-3.jpg" alt="Item 3" />
        <h1>Workshops and Training</h1>
        <p>
          Enhance your skills by participating in workshops and training programs
          tailored to your needs.
        </p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Listing3",
};
</script>

<style scoped>
/* Listing Section Styles */
.listing3 {
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.listing3-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal columns */
  gap: 1.5rem; /* Space between grid items */
  max-width: 100%; /* Limit the width of the grid */
  width: 100%;
}

/* Individual Grid Item */
.listing3-item {
  background: transparent;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease-in-out;
}

.listing3-item:hover {
  transform: scale(1.03);
}

.listing3-item img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0; /* Rounded corners at the top */
  object-fit: cover; /* Ensure the image fills its container */
}

.listing3-item h1 {
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
  color: #000;
  font-weight: bold;
}

.listing3-item p {
  font-size: 1.25rem;
  color: #000;
  line-height: 1.4rem;
  text-align: left;
}

/* Responsive Styles */
@media screen and (max-width: 1024px) {
  .listing3-grid {
    grid-template-columns: 1fr 1fr; /* Two columns for tablets */
    gap: 1rem; /* Reduce gap for smaller screens */
  }
}

@media screen and (max-width: 768px) {
  .listing3-grid {
    grid-template-columns: 1fr; /* Single column for smaller devices */
  }

  .listing3-item {
    padding: 0.8rem; /* Reduce padding for smaller devices */
  }

  .listing3-item h1 {
    font-size: 1.3rem; /* Slightly smaller heading */
  }

  .listing3-item p {
    font-size: 0.95rem; /* Adjust paragraph font size */
  }
}
</style>
