<script setup>
import AboutPageBanner from './views/about-us/AboutPageBanner.vue'

defineEmits(['navigate'])

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const partners = [
  { name: 'Oracle Academy', src: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/Oracle_Academy_rgb.png' },
  { name: 'Cisco Networking Academy', src: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/1024px-Cisco_academy_logo.svg_-300x300.png' },
  { name: 'Acer Academy', src: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/acer-300x300.jpg' },
  { name: 'Huawei ICT Academy', src: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/huawei-academy-logo-300x300.jpg' },
]
</script>

<template>
  <main class="about-page">
    <AboutPageBanner title="About Us" />

    <section id="about" class="about-intro">
      <div>
        <p class="about-kicker">COLLEGE OF COMPUTER STUDIES</p>
        <h2>Different people,<br />one goal.</h2>
      </div>
      <p class="about-lead">The College of Computer Studies brings together people and ideas through information technology education, academic excellence, and a commitment to service.</p>
    </section>

    <section id="vision" class="vision-section">
      <div class="vision-copy">
        <p class="about-kicker">OUR FOUNDATION</p>
        <h2>Vision and Mission</h2>
        <div class="vision-statement-grid">
          <article>
            <h3>Vision</h3>
            <p>The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsiveness to the needs of the total person and the world.</p>
          </article>
          <article>
            <h3>Mission</h3>
            <p>A college of the future that educates students through the Christian principles and practices of computer studies and prepares them for advanced study, careers in software development, computing systems technology, and information management, and lifelong learning.</p>
          </article>
          <article>
            <h3>Quality Policy</h3>
            <p>To fulfill the mission and realize the vision of Central Philippine University, CCS commits to providing superior quality services by integrating Christian values, academic excellence, the highest level of professionalism, and quality considerations in every aspect of its operations.</p>
            <p>The college maintains a quality management system that complies with international quality standards and continually improves to meet the expectations of the university community, partner institutions, and the general public.</p>
          </article>
        </div>
      </div>
      <img :src="'/ccs-home/history-ccs-mark.png'" alt="College of Computer Studies mark" />
    </section>

    <section id="history" class="about-history">
      <div class="about-history-inner">
        <div>
          <p class="about-kicker">REMEMBER</p>
          <h2>Our History</h2>
        </div>
        <p>The college began in 1995 with the birth of the Bachelor of Science in Computer Science program under the College of Commerce. The College of Computer Studies was formed in 2003, bringing together computing programs that continue to grow today.</p>
        <button class="about-link" @click="$emit('navigate', 'history')">Read the full history <span>→</span></button>
      </div>
    </section>

    <section id="dean" class="dean-message">
      <img src="/ccs-home/faculty/dean.png" alt="Ma. Christina A. Quijano, MSCS, Dean" />
      <div>
        <p class="about-kicker">ENGAGE</p>
        <h2>Message from the Dean</h2>
        <p>In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non academic, each students is unique enough to achieve whatever they want to reach for in our college.</p>
        <p class="dean-name">Ma. Christina A. Quijano, MSCS<br /><span>Dean</span></p>
      </div>
    </section>

    <section id="linkages" class="linkages-section">
      <div>
        <p class="about-kicker">CONNECT</p>
        <h2>Our Partners and Memberships</h2>
        <p>Driving technology for education</p>
      </div>
      <div class="partner-grid">
        <img v-for="partner in partners" :key="partner.name" :src="partner.src" :alt="partner.name" />
      </div>
    </section>
    <button class="back-to-top" type="button" aria-label="Back to top" @click="scrollToTop">⌃</button>
  </main>
</template>

<style scoped>
.about-page {
  --about-green: #143e3b;
  --about-gold: #ffad1f;
  min-height: 100vh;
  color: #34423b;
  background: #fff;
  font-family: Roboto, Arial, sans-serif;
}

.about-intro {
  width: min(1200px, calc(100% - 44px));
  min-height: 255px;
  margin: -75px auto 68px;
  padding: 36px 42px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 52px;
  align-items: center;
  position: relative;
  z-index: 2;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 15px 34px #18251e24;
}

.about-kicker {
  margin: 0 0 13px;
  color: #74887a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .13em;
}

.about-intro h2,
.vision-copy h2,
.about-history h2,
.dean-message h2,
.linkages-section h2 {
  margin: 0;
  color: var(--about-green);
  font: 500 clamp(32px, 3.4vw, 46px)/1.15 'Roboto Slab', Georgia, serif;
}

.about-lead {
  margin: 0;
  padding-left: 22px;
  border-left: 3px solid var(--about-gold);
  color: #65716c;
  font-size: 17px;
  line-height: 1.8;
}

.vision-section {
  position: relative;
  padding: 76px max(22px, calc((100% - 1200px) / 2));
  overflow: hidden;
  background: #f3f6f1;
}

.vision-copy {
  position: relative;
  z-index: 1;
}

.vision-copy h2 {
  margin-bottom: 30px;
}

.vision-statement-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.vision-statement-grid article {
  min-height: 260px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 10px 24px #18251e12;
}

.vision-copy h3 {
  margin: 0 0 14px;
  color: #f5a018;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.vision-copy article p {
  margin: 0 0 10px;
  color: #65716c;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
}

.vision-section > img {
  position: absolute;
  right: max(4%, calc((100% - 1660px) / 2));
  top: 50%;
  width: min(360px, 28vw);
  transform: translateY(-50%);
  opacity: .06;
}

.about-history {
  padding: 76px 24px;
  color: #fff;
  background: var(--about-green);
}

.about-history-inner {
  width: min(1200px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: .8fr 1.4fr auto;
  gap: 38px;
  align-items: center;
}

.about-history h2 {
  color: var(--about-gold);
}

.about-history-inner > p {
  margin: 0;
  color: #d0d7d4;
  font-size: 15px;
  line-height: 1.8;
}

.about-link {
  border: 0;
  border-radius: 4px;
  padding: 13px 18px;
  color: #163e3b;
  background: var(--about-gold);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
}

.about-link span {
  margin-left: 8px;
}

.dean-message {
  width: min(1200px, calc(100% - 44px));
  margin: 72px auto;
  padding: 32px;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 52px;
  align-items: center;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 15px 34px #18251e1b;
}

.dean-message > img {
  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center top;
}

.dean-message h2 {
  margin-bottom: 20px;
  color: #f5a018;
}

.dean-message > div > p:not(.about-kicker):not(.dean-name) {
  margin: 0;
  padding-left: 18px;
  border-left: 3px solid var(--about-gold);
  color: #65716c;
  font-size: 15px;
  line-height: 1.85;
}

.dean-name {
  margin: 24px 0 0;
  color: var(--about-green);
  font-size: 16px;
  font-style: italic;
  text-align: left;
}

.dean-name span {
  font-size: 14px;
}

.linkages-section {
  padding: 76px 24px 90px;
  text-align: center;
  background: #f3f6f1;
}

.linkages-section h2 {
  font-size: clamp(32px, 3vw, 44px);
}

.linkages-section > div:first-child > p:last-child {
  margin: 10px 0 42px;
  color: #78827f;
}

.partner-grid {
  width: min(1050px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  align-items: center;
}

.partner-grid img {
  width: 100%;
  height: 145px;
  padding: 18px;
  border: 1px solid #e3e8e1;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px #061a1a12;
  object-fit: contain;
}

.back-to-top {
  position: fixed;
  z-index: 30;
  right: 27px;
  bottom: 25px;
  width: 55px;
  height: 55px;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
  background: white;
  box-shadow: 0 3px 12px #0002;
  color: #111;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .vision-statement-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .vision-statement-grid article:last-child {
    grid-column: 1 / -1;
  }

  .about-history-inner {
    grid-template-columns: 1fr 1.4fr;
  }

  .about-link {
    grid-column: 2;
    width: max-content;
  }
}

@media (max-width: 850px) {
  .about-intro {
    width: calc(100% - 36px);
    min-height: 0;
    margin-top: -56px;
    padding: 28px;
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .about-lead {
    font-size: 15px;
  }

  .vision-section {
    padding: 58px 20px;
  }

  .vision-statement-grid {
    grid-template-columns: 1fr;
  }

  .vision-statement-grid article:last-child {
    grid-column: auto;
  }

  .vision-section > img {
    right: -80px;
    top: 20%;
    width: 240px;
  }

  .about-history-inner {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .about-link {
    grid-column: auto;
  }

  .dean-message {
    width: calc(100% - 36px);
    margin: 48px auto;
    padding: 24px;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .dean-message > img {
    max-width: 360px;
    height: 380px;
    margin: 0 auto;
  }

  .partner-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}
</style>
