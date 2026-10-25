<script setup>
import PageBanner from './PageBanner.vue'
</script>

<template>
  <main class="contact-page">
    <PageBanner
      kicker="We Will Gladly Assist You"
      title="Contact Details"
      active-page="contact"
    />

    <section class="contact-details" aria-label="Contact details">
      <article class="contact-item">
        <svg class="contact-icon phone-icon" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M15.2 5.5 27 3l7.1 17.1-8.2 6.2a42 42 0 0 0 11.8 11.8l6.2-8.2L61 37l-2.5 11.8c-.8 3.8-4.5 6.3-8.3 5.7C28.1 50.8 13.2 35.9 9.5 13.8c-.6-3.8 1.9-7.5 5.7-8.3Z" />
        </svg>
        <h2>Telephone</h2>
        <p><a href="tel:+63333291971">329-1971 local 1094</a></p>
      </article>

      <article class="contact-item">
        <svg class="contact-icon mail-icon" viewBox="0 0 72 64" aria-hidden="true">
          <path d="M5 8h43a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Zm0 6v2l21.5 15L48 16v-2L26.5 29 5 14Z" />
          <path d="M54 22h11a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H42a5 5 0 0 1-5-5v-7h7v5h19V30h-9v-8Z" />
          <path d="m2 49 17-12 9 7 9-7 6 4v3h-4v-1l-11 9-9-7L5 54v-5Z" />
        </svg>
        <h2>CPU Mail</h2>
        <p><a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a></p>
      </article>

      <article class="contact-item">
        <span class="contact-icon facebook-icon" aria-hidden="true">f</span>
        <h2>Social Media</h2>
        <p>College of Computer Studies - CPU</p>
      </article>
    </section>

    <section class="contact-map" aria-label="Map to Mary J. Thomas Hall">
      <iframe
        title="Google Maps location of Mary J. Thomas Hall, Central Philippine University"
        src="https://www.google.com/maps?q=10.732702,122.548114&z=16&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  color: #666;
  background: #fff;
  font-family: Roboto, Arial, sans-serif;
}

.contact-details {
  box-sizing: border-box;
  width: min(1532px, calc(100% - 80px));
  min-height: 540px;
  margin: 0 auto;
  padding: 128px 0 100px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  text-align: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-icon {
  display: block;
  width: 64px;
  height: 64px;
  margin-bottom: 23px;
  fill: #e99b00;
  color: #e99b00;
}

.mail-icon { width: 72px; }

.facebook-icon {
  width: 64px;
  font: 700 76px/64px Arial, sans-serif;
  text-align: center;
}

.contact-item h2 {
  margin: 0 0 22px;
  color: #c78b36;
  font: 400 25px/1.25 'Roboto Slab', Georgia, serif;
}

.contact-item p {
  margin: 0;
  color: #7b7b7b;
  font-size: 16px;
  line-height: 1.6;
}

.contact-item a {
  color: inherit;
  text-decoration: none;
}

.contact-item a:hover { color: #194641; }

.contact-map {
  width: min(1700px, calc(100% - 64px));
  margin: 0 auto 42px;
}

.contact-map iframe {
  display: block;
  width: 100%;
  height: 560px;
  border: 0;
}

@media(max-width: 700px) {
  .contact-details {
    width: calc(100% - 40px);
    min-height: 0;
    padding: 75px 0 100px;
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .contact-icon { margin-bottom: 14px; }
  .contact-item h2 { margin-bottom: 10px; font-size: 22px; }
  .contact-item p { font-size: 15px; }
  .contact-map { width: calc(100% - 28px); }
  .contact-map iframe { height: 440px; }
}
</style>
