<script setup>
import PageBanner from './PageBanner.vue'

defineEmits(['navigate'])

const coordinators = [
  { name: 'Rea P. Balontong, MBA', role: 'Department Head (IT & IS)', image: 'rea-balontong.jpg' },
  { name: 'Marjee Rose B. Parreño, MSCS, MBA', role: 'Program Coordinator (BSCS, BSDMIA, and MSCS)', image: 'marjee-parreno.jpg' },
  { name: 'Ana Mae B. Cantel, MLIS', role: 'Program Coordinator (BLIS and MLIS)', image: 'ana-cantel.jpg' },
  { name: 'Lennon D. Pajar', role: 'Computer Laboratory Coordinator', image: 'lennon-pajar.jpg' },
]

const faculty = [
  { name: 'Leo Paulo B. Beldia', role: 'BSIT and BSIS Program', image: 'leo-beldia.jpg' },
  { name: 'Pedro Peter Rhys B. Cambronero, MSCS', role: 'BSCS Program', image: 'pedro-cambronero.jpg' },
  { name: 'Lesley Joy L. Dignadice, MBA', role: 'BSIT and BSIS Program', image: 'lesley-dignadice.jpg' },
  { name: 'Rodolfo C. Eregia, Jr.', role: 'BSIT and BSIS Program', image: 'rodolfo-eregia.jpg' },
  { name: 'Donie S. Jardeleza, MSCS', role: 'BSIT and BSIS Program', image: 'donie-jardeleza.jpg' },
  { name: 'Antonio M. Montaño, Jr.', role: 'BSIT and BSIS Program', image: 'antonio-montano.jpg' },
  { name: 'Rose Leah Joy A. Ojacastro, MSCS', role: 'BSIT and BSIS Program', image: 'rose-ojacastro.jpg' },
  { name: 'Ma. Sheila C. Sapul, Ph. D.', role: 'BSCS Program', image: 'sheila-sapul.jpg' },
]

const staff = [
  { name: 'Chrislyn C. Castaño', role: 'Secretary', image: 'chrislyn-castano.jpg' },
  { name: 'A.M.P. Latter P. Taasan', role: 'Computer Laboratory Technician', image: 'latter-taasan.jpg' },
  { name: 'Chriselda Elaine Ador', role: 'Guidance Counselor', image: 'chriselda-ador.jpg' },
  { name: 'Donna May Rivera', role: 'Library Liaison Officer', image: 'donna-rivera.png' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="faculty-page">
    <PageBanner kicker="Academically Knowledgeable and Here For You" title="Faculty and Staff Members" active-page="faculty" @navigate="$emit('navigate', $event)" />

    <section class="people-intro">
      <div class="people-intro-title">
        <p>Teaching With A Smile</p>
        <h2>Meet Our<br />People</h2>
      </div>
      <div class="people-intro-copy">
        <p>Lorem ipsum dolor sit amet, conetur adiping elit Lorem ipsum dolor sit amet, cons ectetur adipiscing elit Lorem ipsum dolor sit altmet, conse ctetur adipiscing elit aloma lomiur off</p>
        <p>silder tolos. Lorem ipsum dolor sitlor amet, conetur adiping elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>

    <section id="dean" class="dean-profile">
      <h2>Dean</h2>
      <article class="dean-card">
        <img src="/ccs-home/faculty/dean.png" alt="Ma. Christina A. Quijano, MSCS" />
        <div class="profile-caption">
          <h3>Ma. Christina A. Quijano, MSCS</h3>
          <p>Dean</p>
        </div>
      </article>
    </section>

    <section class="people-section coordinators-section">
      <div class="people-section-title">
        <p>Teaching as a Way of Life</p>
        <h2>Department Head and Coordinators</h2>
      </div>
      <div class="people-grid">
        <article v-for="person in coordinators" :key="person.name" class="person-card">
          <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
          <div class="profile-caption"><h3>{{ person.name }}</h3><p>{{ person.role }}</p></div>
        </article>
      </div>
    </section>

    <section class="people-section faculty-members-section">
      <div class="people-section-title">
        <p>Teaching as a Way of Life</p>
        <h2>Faculty</h2>
      </div>
      <div class="people-grid">
        <article v-for="person in faculty" :key="person.name" class="person-card">
          <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
          <div class="profile-caption"><h3>{{ person.name }}</h3><p>{{ person.role }}</p></div>
        </article>
      </div>
    </section>

    <section class="people-section staff-section">
      <div class="people-section-title">
        <p>Service and Teaching</p>
        <h2>Staff</h2>
      </div>
      <div class="people-grid">
        <article v-for="person in staff" :key="person.name" class="person-card">
          <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
          <div class="profile-caption"><h3>{{ person.name }}</h3><p>{{ person.role }}</p></div>
        </article>
      </div>
    </section>
    <button class="back-to-top" type="button" aria-label="Back to top" @click="scrollToTop">⌃</button>
  </main>
</template>

<style scoped>
.faculty-page { min-height:100vh; color:#194641; background:#fff; font-family:Roboto,Arial,sans-serif; }
.people-intro { width:min(1532px,calc(100% - 80px)); min-height:465px; margin:0 auto; padding:174px 0 125px; display:grid; grid-template-columns:.92fr 1.65fr; gap:100px; align-items:center; }
.people-intro-title { position:relative; padding-left:38px; }
.people-intro-title::before { content:''; position:absolute; top:25px; bottom:-25px; left:0; width:4px; background:#ffa622; }
.people-intro-title p,.people-section-title p { margin:0 0 18px; color:#858585; font-size:19px; }
.people-intro-title h2 { margin:0; color:#194641; font:400 clamp(52px,4vw,78px)/1.04 'Roboto Slab',Georgia,serif; }
.people-intro-copy { display:grid; grid-template-columns:1fr 1fr; gap:54px; color:#858585; font-size:18px; line-height:1.8; }
.people-intro-copy p { margin:0; }
.dean-profile { padding:6px 24px 110px; text-align:center; }
.dean-profile > h2,.people-section-title h2 { margin:0; color:#194641; font:400 50px/1.2 'Roboto Slab',Georgia,serif; }
.dean-card { width:min(450px,100%); margin:45px auto 0; }
.dean-card > img { display:block; width:100%; height:530px; object-fit:cover; object-position:center top; border-bottom:7px solid #ffa622; }
.people-section { padding:50px 24px 120px; }
.people-section-title { margin:0 auto 48px; text-align:center; }
.people-section-title p { margin-bottom:16px; }
.people-section-title h2 { font-size:50px; }
.people-grid { width:min(1532px,100%); margin:0 auto; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:27px; align-items:start; }
.person-card { min-width:0; background:#fff; }
.person-card > img { display:block; width:100%; height:498px; object-fit:cover; object-position:center top; border-bottom:7px solid #ffa622; }
.profile-caption { padding:16px 9px 0; text-align:center; }
.profile-caption h3 { margin:0 0 6px; color:#194641; font:500 19px 'Roboto Slab',Georgia,serif; }
.profile-caption p { margin:0; color:#888; font-size:14px; line-height:1.5; }
.faculty-members-section { padding-top:4px; }
.staff-section { padding-top:48px; background:#fafafa; }
.back-to-top { position:fixed; z-index:30; right:27px; bottom:25px; width:55px;height:55px;border:1px solid #e8e8e8;border-radius:50%;background:white;box-shadow:0 3px 12px #0002;color:#111;font-size:30px;line-height:1;cursor:pointer; }
@media(max-width:1050px) {
  .people-intro { width:calc(100% - 52px); grid-template-columns:.8fr 1.4fr; gap:50px; }
  .people-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
  .person-card > img { height:clamp(360px,60vw,520px); }
}
@media(max-width:650px) {
  .people-intro { width:calc(100% - 40px); min-height:0; padding:82px 0 75px; grid-template-columns:1fr; gap:34px; }
  .people-intro-title { padding-left:24px; }
  .people-intro-title h2 { font-size:53px; }
  .people-intro-copy { grid-template-columns:1fr; gap:15px; font-size:16px; }
  .dean-profile { padding-bottom:75px; }
  .dean-profile > h2,.people-section-title h2 { font-size:38px; }
  .dean-card { margin-top:28px; }
  .dean-card > img { height:440px; }
  .people-section { padding:55px 17px 78px; }
  .people-section-title { margin-bottom:32px; }
  .people-section-title h2 { font-size:34px; }
  .people-section-title p { font-size:16px; }
  .people-grid { gap:20px 12px; }
  .person-card > img { height:clamp(225px,67vw,370px); border-bottom-width:5px; }
  .profile-caption { padding:10px 4px 0; }
  .profile-caption h3 { font-size:15px; }
  .profile-caption p { font-size:12px; }
  .back-to-top { right:16px; bottom:16px; width:48px;height:48px; }
}
</style>
