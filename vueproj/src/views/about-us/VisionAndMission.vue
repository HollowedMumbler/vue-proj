<script setup>
import PageBanner from '../../PageBanner.vue'
</script>

<template>
  <main class="vision-mission-page">
    <PageBanner
      kicker="College of Computer Studies · Central Philippine University"
      title="Vision and Mission"
      active-page="about"
    />

    <section class="vision-boxes" aria-label="College statements">
      <article class="vision-box">
        <h2>Vision</h2>
        <p>
          The College of Computer Studies is founded on the vision of academic excellence in
          Information Technology Education and responsiveness to the needs of the total person and
          the world.
        </p>
      </article>

      <article class="vision-box">
        <h2>Mission</h2>
        <p>
          A college of the future that educates students through the Christian principles and
          practices of computer studies and prepares them for advanced study, careers in software
          development, computing systems technology, and information management, and lifelong
          learning.
        </p>
      </article>

      <article class="vision-box">
        <h2>Quality Policy</h2>
        <p>
          To fulfill the mission and realize the vision of Central Philippine University, CCS
          commits to providing superior quality services by integrating Christian values,
          academic excellence, the highest level of professionalism, and quality considerations in
          every aspect of its operations.
        </p>
        <p>
          The college maintains a quality management system that complies with international
          quality standards. It continually improves to meet the expectations of the university
          community, partner institutions, and the general public.
        </p>
      </article>
    </section>

    <footer class="vision-source">
      <p>Statement wording is adapted from the College of Computer Studies.</p>
      <a href="https://ccs.cpu.edu.ph/vision-and-mission/" target="_blank" rel="noopener noreferrer">
        Official CCS Vision and Mission ↗
      </a>
    </footer>
  </main>
</template>

<style scoped>
.vision-mission-page {
  --vision-green: #143e3b;
  --vision-gold: #ffad1f;
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.vision-mission-page :deep(.page-banner) {
  min-height: 390px;
  background-image:
    linear-gradient(112deg, #a8781dc9 0%, #6c713bbd 45%, #143e3bc4 100%),
    url('/ccs-home/MT.jpg');
  background-position: center, center 72%;
  background-size: cover;
  background-repeat: no-repeat;
}

.vision-mission-page :deep(.page-banner-title) {
  padding: 150px 22px 115px;
  position: relative;
  z-index: 1;
}

.vision-mission-page :deep(.page-banner-title p) {
  display: none;
}

.vision-mission-page :deep(.page-banner-title h1) {
  color: #fff;
  font-size: clamp(44px, 4.2vw, 62px);
  font-weight: 600;
}

.vision-mission-page :deep(.page-banner-title h1::after) {
  width: 56px;
  height: 3px;
  margin: 24px auto 0;
  display: block;
  background: #fff;
  content: '';
}

.vision-mission-page :deep(.page-banner)::after {
  height: 150px;
  position: absolute;
  right: -8%;
  bottom: -94px;
  left: -8%;
  border-radius: 50% 50% 0 0 / 65% 65% 0 0;
  background: #fff;
  content: '';
  transform: rotate(-3deg);
}

.vision-boxes {
  width: min(1200px, calc(100% - 44px));
  margin: -75px auto 0;
  padding: 0 0 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 24px;
  position: relative;
  z-index: 2;
}

.vision-box {
  padding: 30px 26px 32px;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 15px 34px #18251e24;
  text-align: center;
}

.vision-box h2 {
  margin: 0 0 18px;
  color: #f5a018;
  font-size: 24px;
  font-weight: 600;
}

.vision-box p {
  margin: 0;
  color: #777;
  font-size: 14px;
  line-height: 1.9;
}

.vision-box p + p {
  margin-top: 14px;
}

.vision-source {
  padding: 26px 22px 34px;
  text-align: center;
}

.vision-source p {
  margin: 0 0 8px;
  color: #78827f;
  font-size: 12px;
}

.vision-source a {
  color: var(--vision-green);
  font-size: 13px;
  font-weight: 700;
  text-decoration-color: var(--vision-gold);
  text-underline-offset: 3px;
}

@media (max-width: 950px) {
  .vision-boxes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .vision-box:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 700px) {
  .vision-mission-page :deep(.page-banner) {
    min-height: 340px;
  }

  .vision-mission-page :deep(.page-banner-title) {
    padding-top: 138px;
  }

  .vision-boxes {
    width: min(520px, calc(100% - 36px));
    margin-top: -56px;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .vision-box:last-child {
    grid-column: auto;
  }
}
</style>
