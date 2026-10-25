<script setup>
import AboutPageBanner from './AboutPageBanner.vue'

const partners = [
  { name: 'Oracle Academy', image: 'Oracle_Academy_rgb.png' },
  { name: 'Cisco Networking Academy', image: '1024px-Cisco_academy_logo.svg_-300x300.png' },
  { name: 'Acer Academy', image: 'acer-300x300.jpg' },
  { name: 'Huawei ICT Academy', image: 'huawei-academy-logo-300x300.jpg' },
  { name: 'PSITE', image: 'psite.png' },
  { name: 'GoveSmart', image: 'govesmart-1-300x76.jpg' },
  { name: 'MAYAD', image: 'mayad-300x55.png' },
  { name: 'LasorTech', image: 'LasorTech-300x89.jpg' },
  { name: 'Startup Project Ventures', image: 'startupproject.jpg' },
]
</script>

<template>
  <main class="linkages-page">
    <AboutPageBanner title="Linkages" />

    <section class="linkages-content" aria-labelledby="linkages-heading">
      <header class="linkages-heading">
        <p class="linkages-eyebrow">CONNECT</p>
        <h2 id="linkages-heading">Our Partners and Memberships</h2>
        <p>Organizations and academies featured by the College of Computer Studies.</p>
      </header>

      <div class="linkages-grid" aria-label="CCS partner and membership logos">
        <figure v-for="partner in partners" :key="partner.name" class="linkages-logo">
          <img :src="`/images/ccs/${partner.image}`" :alt="partner.name" />
        </figure>
      </div>
    </section>
  </main>
</template>

<style scoped>
.linkages-page {
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.linkages-content {
  width: min(1200px, calc(100% - 44px));
  margin: -75px auto 0;
  padding: 34px;
  position: relative;
  z-index: 2;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #f5f7f3;
  box-shadow: 0 15px 34px #18251e24;
}

.linkages-heading {
  margin: 0 auto 30px;
  text-align: center;
}

.linkages-eyebrow {
  margin: 0 0 8px;
  color: #74887a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.linkages-heading h2 {
  margin: 0;
  color: #143e3b;
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: clamp(27px, 3vw, 38px);
  line-height: 1.25;
}

.linkages-heading > p:last-child {
  margin: 10px 0 0;
  color: #78827f;
  font-size: 14px;
  line-height: 1.6;
}

.linkages-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.linkages-logo {
  min-height: 150px;
  margin: 0;
  padding: 20px;
  display: grid;
  place-items: center;
  border: 1px solid #e6e9e4;
  border-radius: 9px;
  background: #fff;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.linkages-logo:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px #18251e18;
}

.linkages-logo img {
  width: min(100%, 230px);
  max-height: 96px;
  object-fit: contain;
}

.linkages-logo:last-child:nth-child(4n + 1) {
  grid-column: 2 / span 2;
}

@media (max-width: 950px) {
  .linkages-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .linkages-logo:last-child:nth-child(4n + 1) {
    grid-column: auto;
  }
}

@media (max-width: 700px) {
  .linkages-content {
    width: min(540px, calc(100% - 36px));
    margin-top: -56px;
    padding: 24px 18px;
  }

  .linkages-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .linkages-logo {
    min-height: 120px;
    padding: 14px;
  }

  .linkages-logo img {
    max-height: 78px;
  }

  .linkages-logo:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}
</style>
