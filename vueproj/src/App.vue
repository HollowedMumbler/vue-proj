<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import HistoryPage from './history.vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const showHistory = ref(false)

const programs = [
  {
    name: 'Computer Science',
    description:
      'The Computer Science (CS) Program is designed for students who wants to study computing in depth, focusing in the software, the hardware',
  },
  {
    name: 'Information Technology',
    description:
      'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
  },
  {
    name: 'Digital Media and Interactive Arts',
    description:
      'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
  },
  {
    name: 'Library Information Science',
    description:
      'The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development',
  },
]

const news = [
  {
    title: 'Community Engagement MOA Signing Ceremony',
    description:
      'Memorandum of Agreement signing between Central Philippine University (CPU) College...',
    date: 'December 8, 2021',
    image:
      'https://ccs.cpu.edu.ph/wp-content/uploads/2021/12/12072021-Outreach-MOA-300x225.jpg',
  },
  {
    title: 'Congratulations to our New Librarians!',
    description:
      'Congratulations to our New Librarians! 60% CPU passing percentage (1st...',
    date: 'November 23, 2021',
    image:
      'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-New-Librarians-300x300.jpg',
  },
  {
    title: 'Kation Technologies hires CCS graduates',
    description:
      'Kation Technologies Inc., a Microsoft Gold Partner company in the...',
    date: 'November 23, 2021',
    image:
      'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-Kation-300x225.jpg',
  },
]

const partners = [
  {
    name: 'Oracle Academy',
    image: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/Oracle_Academy_rgb.png',
  },
  {
    name: 'Cisco Networking Academy',
    image:
      'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/1024px-Cisco_academy_logo.svg_-300x300.png',
  },
  {
    name: 'Acer Academy',
    image: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/acer-300x300.jpg',
  },
  {
    name: 'Huawei ICT Academy',
    image:
      'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/huawei-academy-logo-300x300.jpg',
  },
]

function updateHeader() {
  scrolled.value = window.scrollY > 70
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', updateHeader))
</script>

<template>
  <div v-if="showHistory" class="history-route">
    <button class="history-connect-button history-back-button" type="button" @click="showHistory = false">
      ← Home
    </button>
    <HistoryPage />
  </div>
  <div v-else class="ccs-home">
    <button class="history-connect-button" type="button" @click="showHistory = true">
      College History
    </button>
    <header class="site-header" :class="{ 'is-scrolled': scrolled }">
      <div class="header-inner">
        <a class="brand" href="#home" aria-label="College of Computer Studies home" @click="closeMenu">
          <img
            class="brand-logo ccs-logo"
            src="/ccs-home/ccs-mark.jpg"
            alt="College of Computer Studies"
          />
          <img
            class="brand-logo warriors-logo"
            src="/ccs-home/warriors-mark.jpg"
            alt="CPU Warriors"
          />
        </a>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>

        <nav class="main-nav" :class="{ open: menuOpen }" aria-label="Main navigation">
          <a class="current" href="#home" @click="closeMenu">Home</a>
          <div class="nav-group">
            <a href="#history" @click="closeMenu">About Us <i></i></a>
            <div class="dropdown">
              <a href="#history" @click.prevent="showHistory = true; closeMenu()">History</a>
              <a href="#who-we-are" @click="closeMenu">Vision and Mission</a>
              <a href="#dean" @click="closeMenu">Message from the Dean</a>
              <a href="#partners" @click="closeMenu">Linkages</a>
              <a href="#news" @click="closeMenu">News and Updates</a>
            </div>
          </div>
          <div class="nav-group">
            <a href="#programs" @click="closeMenu">Academic Programs <i></i></a>
            <div class="dropdown">
              <a v-for="program in programs" :key="program.name" href="#programs" @click="closeMenu">
                {{ program.name }}
              </a>
              <a href="#programs" @click="closeMenu">Information Systems</a>
            </div>
          </div>
          <a href="#facilities" @click="closeMenu">Faculty and Staff</a>
          <a href="#news" @click="closeMenu">Event Calendar</a>
          <a href="#contact" @click="closeMenu">Contact Us</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero" aria-label="CCS core practices">
        <div class="hero-copy">
          <p class="hero-eyebrow">the CCS core practices that build bridges between gaps</p>
          <h1>REMEMBER<br />CONNECT<br />ENGAGE<br />BUILD<br />SHARE</h1>
          <p class="hero-tagline">different PEOPLE, ONE goal</p>
          <a class="gold-button hero-button" href="#programs">Your FUTURE begins HERE</a>
        </div>
        <img
          class="student-groups"
          src="/ccs-home/student-groups-strip.jpg"
          alt="Computer Science Society, ITSO, MIDAS, and LITSO student organizations"
        />
      </section>

      <section id="programs" class="programs-section" aria-label="Academic programs">
        <div class="program-grid">
          <article v-for="program in programs" :key="program.name" class="program-card">
            <h2>{{ program.name }}</h2>
            <p>{{ program.description }}</p>
          </article>
        </div>
      </section>

      <section id="history" class="history-section">
        <div class="history-inner">
          <img class="history-emblem" src="/ccs-home/ccs-emblem.png" alt="" />
          <p class="section-kicker">REMEMBER</p>
          <h2>HOW IT STARTED</h2>
          <div class="history-card">
            <p>
              The college began in 1995 with the birth of the Bachelor of Science in Computer
              Science (BSCS) program under the College of Commerce. The first batch of students was
              composed of two sections with about 100 students. Prof. Mary O’ T. Penetrante was
              appointed to be the faculty-in-charge of the new program.
            </p>
          </div>
          <a class="gold-button history-button" href="#history">READ MORE</a>
        </div>
      </section>

      <section id="dean" class="dean-section">
        <div class="dean-layout">
          <img
            class="dean-portrait"
            src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/quijano-e1637132499305.png"
            alt="Ma. Christina A. Quijano, MSCS"
          />
          <div class="dean-copy">
            <p class="section-kicker">ENGAGE</p>
            <h2>Message from the Dean</h2>
            <p class="dean-message">
              In every school year for the College of Computer Studies, we look forward with great
              anticipation to the contributions the new class will make to campus life. In both the
              aspect of academic and non academic, each students is unique enough to achieve
              whatever they want to reach for in our college.
            </p>
            <p class="dean-signature">Ma. Christina A. Quijano, MSCS<br /><span>Dean</span></p>
            <a class="gold-button" href="#dean">READ MORE</a>
          </div>
        </div>
      </section>

      <section id="news" class="news-section">
        <div class="news-heading">
          <h2>News and Updates</h2>
          <p>Be Updated with the College and Student Events</p>
        </div>
        <div class="news-grid">
          <article v-for="item in news" :key="item.title" class="news-card">
            <img :src="item.image" :alt="item.title" />
            <div class="news-card-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a href="#news">Read More</a>
              <time>{{ item.date }}</time>
            </div>
          </article>
        </div>
        <a class="gold-button more-news" href="#news">VIEW MORE</a>
      </section>

      <section id="who-we-are" class="who-section">
        <div class="who-copy">
          <p class="section-kicker">SHARE</p>
          <h2>WHO WE ARE</h2>
          <p>
            Seventeen years of building bridges and raising of flag in the College of Computer
            Studies. Different people united by one goal. For we are warriors and will never be
            broken, to infinity and beyond.
          </p>
        </div>
        <img
          class="video-preview"
          src="/ccs-home/video-reference.jpg"
          alt="CCS Warriors video preview"
        />
      </section>

      <section id="facilities" class="facilities-section">
        <div class="facilities-heading">
          <p class="section-kicker">BUILD</p>
          <h2>Our Facilities</h2>
        </div>
        <div class="facility-gallery">
          <img src="/ccs-home/facility-1.jpg" alt="CCS Warriors facility gallery image 1" />
          <img src="/ccs-home/facility-2.jpg" alt="CCS Warriors facility gallery image 2" />
          <img src="/ccs-home/facility-3.jpg" alt="CCS Warriors facility gallery image 3" />
          <img src="/ccs-home/facility-4.jpg" alt="CCS Warriors facility gallery image 4" />
        </div>
        <a class="gold-button facilities-more" href="#facilities">VIEW MORE</a>
      </section>

      <section id="partners" class="partners-section">
        <div class="partners-heading">
          <p class="section-kicker">CONNECT</p>
          <h2>Our Partners and Memberships</h2>
          <p>Driving technology for education</p>
        </div>
        <div class="partner-logos">
          <img v-for="partner in partners" :key="partner.name" :src="partner.image" :alt="partner.name" />
        </div>
        <a class="gold-button partners-more" href="#partners">VIEW MORE</a>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="section-kicker">CONTACT</p>
            <h2>For any inquiries<br />please email</h2>
            <a class="contact-email" href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
            <a class="gold-button contact-button" href="mailto:ccssec@cpu.edu.ph">VIEW MORE OPTIONS</a>
          </div>
          <iframe
            class="campus-map"
            title="Map to Mary Thomas Hall, Central Philippine University"
            src="https://www.google.com/maps?q=Mary%20Thomas%20Hall%20Central%20Philippine%20University%20Iloilo&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;600;700&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700;1,800&display=swap');

:root {
  font-family: 'Roboto', Arial, sans-serif;
  color: #173d3b;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --teal: #103b39;
  --teal-deep: #0d2928;
  --orange: #ffad1f;
  --soft-gray: #e7e7e7;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.history-connect-button {
  position: fixed;
  z-index: 50;
  top: 94px;
  right: 28px;
  min-height: 40px;
  padding: 0 18px;
  border: 0;
  border-radius: 4px;
  background: var(--orange);
  color: #143b39;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
}
.history-connect-button:hover { background: #ffc04c; }
.history-back-button { top: 18px; }

.site-header {
  position: absolute;
  z-index: 20;
  inset: 0 0 auto;
  height: 83px;
  color: #fff;
  transition: background .2s, color .2s, box-shadow .2s;
}
.site-header.is-scrolled {
  position: fixed;
  background: #fff;
  color: #282828;
  box-shadow: 0 2px 12px #0000000b;
}
.header-inner {
  width: min(1364px, calc(100% - 48px));
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.site-header:not(.is-scrolled) .brand-logo { opacity: 0; }
.site-header:not(.is-scrolled) .main-nav > a,
.site-header:not(.is-scrolled) .nav-group > a { color: transparent; }
.brand { width: 72px; height: 78px; display: flex; align-items: center; position: relative; flex: 0 0 auto; }
.brand-logo { display: block; object-fit: contain; }
.ccs-logo { width: 65px; height: 71px; }
.warriors-logo { display: none; width: 87px; height: 76px; }
.is-scrolled .ccs-logo { display: none; }
.is-scrolled .warriors-logo { display: block; }
.main-nav { display: flex; align-items: center; gap: 32px; height: 100%; font-size: 16px; font-weight: 600; letter-spacing: .01em; }
.main-nav > a, .nav-group > a { display: flex; align-items: center; height: 100%; white-space: nowrap; }
.main-nav .current { color: var(--orange); }
.nav-group { height: 100%; position: relative; }
.nav-group > a { gap: 8px; }
.nav-group i { width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid currentColor; }
.dropdown { display: none; position: absolute; left: -16px; top: 68px; min-width: 225px; padding: 7px 0; background: #fff; color: #253c3b; box-shadow: 0 8px 26px #0002; }
.dropdown a { display: block; padding: 11px 17px; font-size: 14px; }
.dropdown a:hover { background: #f3f3f3; color: #f6a313; }
.nav-group:hover .dropdown, .nav-group:focus-within .dropdown { display: block; }
.menu-toggle { display: none; }

.hero {
  height: min(851px, 44.4vw);
  min-height: 680px;
  position: relative;
  background: var(--teal-deep) url('/ccs-home/hero-desktop.jpg') center top / 100% 100% no-repeat;
}
.hero-copy {
  position: absolute;
  z-index: 2;
  top: 201px;
  left: max(24px, calc((100% - 1184px) / 2));
  width: 360px;
  color: #fff;
}
.hero-eyebrow { margin: 0 0 19px; color: #b3b8b7; font-size: 14px; font-weight: 700; white-space: nowrap; }
.hero h1 { margin: 0; font-size: 40px; line-height: .98; letter-spacing: -.035em; font-weight: 700; }
.hero-tagline { margin: 20px 0 0; color: var(--orange); font-size: 24px; line-height: 1.2; white-space: nowrap; }
.gold-button {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 29px;
  border: 0;
  border-radius: 4px;
  background: var(--orange);
  color: #103b39;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: filter .18s, transform .18s;
}
.gold-button:hover { filter: brightness(.96); transform: translateY(-1px); }
.hero-button { margin-top: 66px; width: 251px; }
.student-groups {
  position: absolute;
  z-index: 3;
  top: calc(100% - 71px);
  left: 0;
  width: 100%;
  height: auto;
  pointer-events: none;
}

.programs-section { background: #fff; padding: 88px 24px 145px; }
.program-grid {
  width: min(1164px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px;
  align-items: start;
}
.program-card {
  min-height: 332px;
  padding: 25px 31px 26px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 8px 22px #0000000c;
  text-align: center;
}
.program-card h2 {
  margin: 0 0 28px;
  color: #174542;
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.35;
}
.program-card p { margin: 0; color: #a2a2a2; font-size: 14px; line-height: 1.95; }

.history-section {
  position: relative;
  min-height: 650px;
  padding: 133px 24px 80px;
  overflow: hidden;
  background: #e7e7e7;
}
.history-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 54px solid transparent;
  border-right: 54px solid transparent;
  border-top: 30px solid #fff;
}
.history-inner { position: relative; z-index: 1; width: min(950px, 100%); margin: 0 auto; }
.history-emblem { position: absolute; z-index: -1; width: 440px; height: auto; left: 98px; top: -54px; opacity: .92; filter: drop-shadow(7px 8px 1px #161918); }
.section-kicker { margin: 0; color: #143e3b; font-size: 15px; line-height: 1.3; font-weight: 700; }
.history-inner h2, .dean-copy h2, .news-heading h2, .who-copy h2, .facilities-heading h2, .partners-heading h2 {
  font-size: 55px;
  line-height: 1.08;
  font-style: italic;
  font-weight: 700;
  letter-spacing: -.025em;
}
.history-inner h2 { margin: 21px 0 10px; color: var(--orange); }
.history-card {
  width: 464px;
  min-height: 224px;
  padding: 20px 21px;
  border: 1px solid #d3d3d3;
  border-radius: 11px;
  background: #ffffffa8;
  color: #777;
}
.history-card p { margin: 0; font-size: 14px; line-height: 1.95; text-align: justify; }
.history-button { display: flex; width: max-content; min-height: 34px; margin: 19px 0 0 auto; padding: 0 21px; font-size: 12px; }

.dean-section { background: #fff; padding: 118px 24px 110px; }
.dean-layout {
  width: min(960px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 385px minmax(0, 1fr);
  gap: 102px;
  align-items: center;
}
.dean-portrait { display: block; width: 385px; height: 447px; object-fit: cover; object-position: center; border-radius: 38px; }
.dean-copy .section-kicker { margin-bottom: 16px; }
.dean-copy h2 { margin: 0 0 22px; color: var(--orange); font-size: 50px; white-space: nowrap; }
.dean-message { margin: 0; padding-left: 19px; border-left: 4px solid var(--orange); color: #777; font-size: 15px; line-height: 1.9; }
.dean-signature { margin: 38px 0 27px; color: var(--orange); font-size: 19px; font-style: italic; text-align: right; }
.dean-signature span { display: inline-block; margin-right: 3px; }
.dean-copy .gold-button { min-height: 34px; margin-left: auto; display: flex; width: max-content; padding: 0 21px; font-size: 12px; }

.news-section { min-height: 855px; padding: 20px 24px 70px; background: #103c3a; color: #fff; }
.news-heading { text-align: center; }
.news-heading h2 { margin: 0; color: var(--orange); font-size: 56px; font-style: normal; }
.news-heading p { margin: 5px 0 77px; color: #bcbfbe; font-size: 15px; }
.news-grid { width: min(835px, 100%); margin: 0 auto 0 max(0px, calc((100% - 1124px) / 2)); display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: start; }
.news-card { background: #fff; color: #183f3d; }
.news-card > img { display: block; width: 100%; height: auto; }
.news-card-copy { padding: 18px 16px 16px; }
.news-card h3 { margin: 0 0 8px; font-size: 17px; line-height: 1.45; font-weight: 700; }
.news-card p { min-height: 53px; margin: 0 0 8px; color: #444; font-size: 14px; line-height: 1.75; }
.news-card a { display: block; margin-bottom: 5px; color: #f2a51b; font-size: 13px; }
.news-card time { display: block; color: #999; font-size: 12px; }
.more-news { display: flex; width: max-content; min-height: 34px; margin: 78px auto 0; padding: 0 21px; font-size: 12px; }

.who-section {
  min-height: 855px;
  padding: 60px 12px 70px 16px;
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(0, 2.09fr);
  gap: 28px;
  align-items: center;
  background: var(--orange);
}
.who-copy { align-self: start; padding-top: 60px; color: #164440; }
.who-copy .section-kicker { margin-bottom: 18px; }
.who-copy h2 { margin: 0 0 20px; color: #123e3b; font-size: 55px; }
.who-copy > p:last-child { max-width: 590px; margin: 0; color: #a06c0d; font-size: 15px; line-height: 1.8; }
.video-preview { display: block; width: 100%; height: auto; aspect-ratio: 1289 / 725; object-fit: cover; }

.facilities-section { padding: 83px 6px 78px; background: #fff; text-align: center; }
.facilities-heading { margin-bottom: 65px; }
.facilities-heading .section-kicker { margin-bottom: 17px; }
.facilities-heading h2 { margin: 0; color: var(--orange); font-size: 55px; }
.facility-gallery {
  height: 350px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  overflow: hidden;
  border-radius: 4px;
}
.facility-gallery img { display: block; width: 100%; height: 350px; object-fit: cover; }
.facilities-more { min-height: 34px; margin-top: 29px; padding: 0 21px; font-size: 12px; }

.partners-section { min-height: 625px; padding: 111px 24px 65px; background: #fff; text-align: center; }
.partners-heading .section-kicker { margin-bottom: 17px; }
.partners-heading h2 { margin: 0; color: var(--orange); font-size: 54px; font-style: normal; }
.partners-heading > p:last-child { margin: 6px 0 110px; color: #c6c6c6; font-size: 15px; }
.partner-logos { width: min(1080px, 100%); margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; }
.partner-logos img { justify-self: center; width: 180px; height: 145px; object-fit: contain; }
.partner-logos img:first-child { width: 210px; }
.partners-more { min-height: 34px; margin-top: 82px; padding: 0 21px; font-size: 12px; }

.contact-section { min-height: 600px; padding: 100px 24px; background: #eee; }
.contact-layout { width: min(1144px, 100%); min-height: 400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.contact-copy { padding-left: 0; }
.contact-copy .section-kicker { margin-bottom: 40px; color: var(--orange); letter-spacing: .65em; font-size: 12px; }
.contact-copy h2 { margin: 0 0 36px; color: #164440; font-size: 62px; line-height: 1.05; letter-spacing: -.025em; }
.contact-email { display: block; margin-bottom: 18px; color: var(--orange); font-size: 20px; }
.contact-button { min-height: 34px; padding: 0 21px; font-size: 12px; }
.campus-map { display: block; width: 100%; height: 400px; border: 0; background: #e3e3e3; }

@media (max-width: 1100px) {
  .main-nav { gap: 19px; font-size: 14px; }
  .program-grid { gap: 20px; }
  .dean-layout { grid-template-columns: minmax(300px, 385px) minmax(0, 1fr); gap: 52px; }
  .dean-portrait { width: 100%; }
  .dean-copy h2 { white-space: normal; }
  .who-section { grid-template-columns: minmax(280px, .8fr) 1.5fr; }
  .partner-logos { gap: 35px; }
}

@media (max-width: 760px) {
  .site-header, .site-header.is-scrolled { height: 72px; }
  .site-header:not(.is-scrolled) .brand-logo { opacity: 1; }
  .site-header:not(.is-scrolled) .main-nav > a,
  .site-header:not(.is-scrolled) .nav-group > a { color: #263a39; }
  .header-inner { width: calc(100% - 32px); }
  .brand, .ccs-logo, .warriors-logo { height: 64px; }
  .ccs-logo { width: 58px; }
  .warriors-logo { width: 74px; }
  .menu-toggle { width: 42px; height: 42px; padding: 10px 8px; display: flex; flex-direction: column; justify-content: space-between; border: 0; background: transparent; }
  .menu-toggle span { width: 25px; height: 2px; display: block; background: currentColor; }
  .main-nav { display: none; position: absolute; top: 72px; left: 0; right: 0; height: auto; padding: 12px 22px 22px; flex-direction: column; align-items: stretch; gap: 0; background: #fff; color: #263a39; box-shadow: 0 10px 18px #0002; }
  .main-nav.open { display: flex; }
  .main-nav > a, .nav-group > a { height: auto; padding: 13px 0; }
  .nav-group { height: auto; }
  .dropdown { display: block; position: static; min-width: 0; padding: 0 0 0 13px; box-shadow: none; }
  .dropdown a { padding: 8px 10px; }
  .hero { height: 700px; min-height: 0; background-image: url('/ccs-home/hero-mobile.jpg'); background-size: auto 700px; background-position: 57% top; }
  .hero-copy { top: 165px; left: 23px; width: calc(100% - 46px); }
  .hero-eyebrow { max-width: 330px; white-space: normal; font-size: 12px; }
  .hero h1 { font-size: 36px; }
  .hero-tagline { font-size: 20px; }
  .hero-button { margin-top: 45px; }
  .student-groups { top: auto; bottom: -44px; width: 100%; height: 88px; object-fit: cover; object-position: center; }
  .programs-section { padding: 95px 20px 85px; }
  .program-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .program-card { min-height: 285px; padding: 22px 16px; }
  .program-card h2 { margin-bottom: 20px; font-size: 18px; }
  .program-card p { font-size: 12px; line-height: 1.75; }
  .history-section { min-height: 630px; padding: 105px 24px 65px; }
  .history-inner h2 { font-size: 40px; }
  .history-emblem { width: 370px; left: 0; top: 50px; }
  .history-card { width: min(464px, 100%); min-height: 0; padding: 18px; }
  .history-card p { font-size: 13px; line-height: 1.75; }
  .dean-section { padding: 72px 24px; }
  .dean-layout { grid-template-columns: 1fr; gap: 34px; }
  .dean-portrait { width: 100%; height: min(112vw, 450px); border-radius: 28px; }
  .dean-copy h2 { font-size: 39px; }
  .dean-message { font-size: 14px; }
  .news-section { padding: 60px 18px; }
  .news-heading h2 { font-size: 39px; }
  .news-heading p { margin-bottom: 36px; font-size: 13px; }
  .news-grid { max-width: 390px; margin: 0 auto; grid-template-columns: 1fr; gap: 20px; }
  .news-card-copy { min-height: 0; }
  .more-news { margin-top: 36px; }
  .who-section { min-height: 0; padding: 48px 20px; grid-template-columns: 1fr; gap: 28px; }
  .who-copy { padding-top: 0; }
  .who-copy h2, .facilities-heading h2 { font-size: 40px; }
  .video-preview { width: 100%; }
  .facilities-section { padding: 62px 6px 55px; }
  .facilities-heading { margin-bottom: 35px; }
  .facility-gallery { height: 210px; grid-template-columns: 2fr 1fr 1fr 1fr; }
  .facility-gallery img { height: 210px; }
  .partners-section { min-height: 0; padding: 75px 20px 55px; }
  .partners-heading h2 { font-size: 38px; }
  .partners-heading > p:last-child { margin-bottom: 50px; }
  .partner-logos { grid-template-columns: 1fr 1fr; gap: 30px 16px; }
  .partner-logos img, .partner-logos img:first-child { width: 130px; height: 105px; }
  .partners-more { margin-top: 50px; }
  .contact-section { padding: 64px 22px; }
  .contact-layout { grid-template-columns: 1fr; gap: 35px; }
  .contact-copy h2 { font-size: 43px; }
  .campus-map { height: 330px; }
}
</style>
