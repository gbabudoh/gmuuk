<template>
  <section class="intro">
    <div class="intro-content">
      <h2>Welcome to Ghana Muslim Union (GMUUK)</h2>
      <p>
        Ghana Muslim Union (GMUUK) is dedicated to uplifting the Ghanaian and broader Muslim communities in London. Our mission is to provide essential support to those in need, offering a welcoming place for worship during Ramadan, comprehensive funeral services, and opportunities for charitable giving.  At GMUUK, we strive to make a meaningful impact by supporting underprivileged individuals and extending our assistance to orphanages and schools in Ghana. We organise a range of activities tailored for seniors, youth, and sisters within the London community, fostering unity and engagement.  Our goal is to create a strong, supportive environment where the Muslim community can thrive, connect, and access the help they need. Through our initiatives, GMUUK continues to be a cornerstone of support for Muslims in London and beyond.
      </p>        
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
/* Intro Section Styles */
.intro {
  padding: 3rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Content Container */
.intro-content {
  max-width: 90%; /* Ensures text does not stretch too wide */
  width: 100%;
  text-align: left;
}

/* Heading */
.intro-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  text-align: center;
  font-weight: 900;
}

/* Paragraph */
.intro-content p {
  font-size: 1.25rem;
  line-height: 1.4;
  color: #000;
  text-align: justify;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .intro {
    padding: 2.5rem 1.5rem;
  }

  .intro-content h2 {
    font-size: 2rem; /* Reduce heading size for tablets */
  }

  .intro-content p {
    font-size: 1.1rem; /* Reduce paragraph size slightly */
  }
}

@media (max-width: 768px) {
  .intro {
    padding: 2rem 1rem;
  }

  .intro-content h2 {
    font-size: 1.8rem; /* Reduce heading size for mobile */
  }

  .intro-content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .intro {
    padding: 1.5rem 0.8rem;
  }

  .intro-content h2 {
    font-size: 1.6rem; /* Smaller font for smaller screens */
  }

  .intro-content p {
    font-size: 0.95rem;
    text-align: left; /* Ensure proper readability */
  }
}
</style>
