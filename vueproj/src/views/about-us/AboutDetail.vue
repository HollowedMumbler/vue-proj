<script setup>
import AboutPageBanner from './AboutPageBanner.vue'

defineProps({
  title: String,
  intro: String,
  sections: Array,
  image: String,
  imageAlt: String,
  items: Array,
})
</script>

<template>
  <main class="about-detail">
    <AboutPageBanner :title="title" />

    <div class="detail-content">
      <section v-if="intro" class="detail-intro">
        <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
        <p>{{ intro }}</p>
      </section>

      <div v-if="sections?.length || image" class="detail-feature-grid">
        <section v-if="sections?.length" class="detail-sections">
          <article v-for="section in sections" :key="section.heading" class="detail-card">
            <p class="eyebrow">{{ section.label || title }}</p>
            <h2>{{ section.heading }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </article>
        </section>

        <figure v-if="image" class="detail-image">
          <img :src="image" :alt="imageAlt || title" />
        </figure>
      </div>

      <section v-if="items?.length" class="detail-items">
        <article
          v-for="item in items"
          :key="item.title"
          class="detail-item-card"
          :class="`detail-${item.kind || 'item'}`"
        >
          <div v-if="item.image" class="detail-item-media">
            <img :src="item.image" :alt="item.alt || ''" />
            <div v-if="item.kind === 'news'" class="detail-news-hover">
              <p>{{ item.hoverText || item.text }}</p>
              <a :href="item.href" target="_blank" rel="noopener noreferrer">
                Read the full update ↗
              </a>
            </div>
          </div>
          <div class="detail-item-copy">
            <p v-if="item.meta" class="eyebrow">{{ item.meta }}</p>
            <h2>{{ item.title }}</h2>
            <p v-if="item.text">{{ item.text }}</p>
            <a v-if="item.href && item.kind !== 'news'" :href="item.href" target="_blank" rel="noopener noreferrer">
              Read more ↗
            </a>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<style scoped>
.about-detail {
  --about-green: #143e3b;
  --about-gold: #ffad1f;
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.detail-content {
  width: min(1160px, calc(100% - 44px));
  margin: -75px auto 0;
  padding-bottom: 76px;
  position: relative;
  z-index: 2;
}

.detail-intro,
.detail-card,
.detail-image,
.detail-item-card {
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 15px 34px #18251e1b;
}

.detail-intro {
  margin-bottom: 24px;
  padding: 26px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.eyebrow {
  margin: 0 0 10px;
  color: #74887a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.detail-intro > p:last-child {
  max-width: 860px;
  margin: 0 auto;
  color: #65716c;
  font-size: 16px;
  line-height: 1.75;
}

.detail-feature-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: stretch;
  gap: 24px;
}

.detail-sections {
  display: grid;
  gap: 18px;
}

.detail-card {
  padding: 26px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.detail-card h2,
.detail-item-card h2 {
  margin: 0 0 14px;
  color: #f5a018;
  font-size: 23px;
  font-weight: 600;
  line-height: 1.3;
}

.detail-card > p:not(.eyebrow) {
  margin: 0;
  color: #65716c;
  font-size: 15px;
  line-height: 1.85;
}

.detail-card > p + p {
  margin-top: 12px;
}

.detail-image {
  margin: 0;
  padding: 18px;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.detail-image img {
  width: 100%;
  max-height: 420px;
  border-radius: 8px;
  object-fit: cover;
}

.detail-items {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 22px;
}

.detail-item-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.detail-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 38px #18251e2a;
}

.detail-item-media {
  flex: none;
  position: relative;
  overflow: hidden;
}

.detail-item-media > img {
  width: 100%;
  height: 205px;
  object-fit: cover;
}

.detail-partner .detail-item-media > img {
  height: 190px;
  padding: 24px;
  object-fit: contain;
  background: #fff;
}

.detail-news-hover {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  inset: 0;
  color: #fff;
  background: linear-gradient(180deg, #092123dc, #143e3bee);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.detail-news-hover p {
  margin: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.7;
}

.detail-news-hover a {
  width: fit-content;
  margin-top: 12px;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--about-gold);
  color: var(--about-gold);
  font-size: 12px;
  font-weight: 700;
}

.detail-news:hover .detail-news-hover,
.detail-news:focus-within .detail-news-hover {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.detail-news:hover .detail-item-media > img,
.detail-news:focus-within .detail-item-media > img {
  transform: scale(1.05);
}

.detail-news .detail-item-media > img {
  transition: transform 0.3s ease;
}

.detail-item-copy {
  flex: 1;
  padding: 21px 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.detail-item-card h2 {
  color: var(--about-green);
  font-size: 19px;
}

.detail-item-card .eyebrow {
  margin-bottom: 8px;
  color: #a47a30;
  letter-spacing: 0.04em;
}

.detail-item-card .detail-item-copy > p:not(.eyebrow) {
  margin: 0;
  color: #65716c;
  font-size: 14px;
  line-height: 1.7;
}

.detail-item-card a {
  margin-top: 15px;
  display: inline-block;
  color: var(--about-green);
  font-size: 13px;
  font-weight: 700;
  text-decoration-color: var(--about-gold);
  text-underline-offset: 3px;
}

@media (max-width: 900px) {
  .detail-items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .detail-feature-grid {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 16px;
  }
}

@media (max-width: 700px) {
  .detail-content {
    width: min(540px, calc(100% - 36px));
    margin-top: -56px;
    padding-bottom: 54px;
  }

  .detail-intro {
    padding: 22px;
  }

  .detail-feature-grid,
  .detail-items {
    grid-template-columns: 1fr;
  }

  .detail-image {
    min-height: 250px;
  }

  .detail-image img {
    width: min(100%, 360px);
    max-height: 420px;
  }
}
</style>
