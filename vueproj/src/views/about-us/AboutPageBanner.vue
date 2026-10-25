<script setup>
import PageHeader from '../../PageHeader.vue'

defineProps({ title: { type: String, required: true } })
</script>

<template>
  <section class="about-page-banner">
    <PageHeader active-page="about" />
    <div class="about-page-banner-title">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped>
.about-page-banner {
  min-height: 390px;
  position: relative;
  background-image:
    linear-gradient(112deg, #a8781dc9 0%, #6c713bbd 45%, #143e3bc4 100%),
    url('/ccs-home/MT.jpg');
  background-position: center, center 72%;
  background-size: cover;
  background-repeat: no-repeat;
}

.about-page-banner::after {
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

.about-page-banner-title {
  padding: 150px 22px 115px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.about-page-banner-title h1 {
  margin: 0;
  color: #fff;
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: clamp(44px, 4.2vw, 62px);
  font-weight: 600;
  line-height: 1.2;
}

.about-page-banner-title h1::after {
  width: 56px;
  height: 3px;
  margin: 24px auto 0;
  display: block;
  background: #fff;
  content: '';
}

@media (max-width: 850px) {
  .about-page-banner {
    min-height: 350px;
  }

  .about-page-banner-title {
    padding-top: 138px;
  }
}
</style>
