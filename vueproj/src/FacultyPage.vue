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

const facultyGroups = [
  { program: 'Bachelor of Science in Information Technology (BSIT)', people: faculty.filter((person) => person.role.includes('BSIT')) },
  { program: 'Bachelor of Science in Computer Science (BSCS)', people: [...faculty.filter((person) => person.role.includes('BSCS')), coordinators[1]] },
  { program: 'Bachelor of Science in Digital Media and Interactive Arts (BSDMIA)', people: [coordinators[1]], coordinatorOnly: true },
  { program: 'Bachelor of Library and Information Science (BLIS)', people: [coordinators[2]], coordinatorOnly: true },
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
        <p>Meet the faculty, program coordinators, and staff who support learning and student life at the College of Computer Studies.</p>
        <p>Program assignments and designations shown here follow the information published by CCS.</p>
      </div>
    </section>

    <section id="dean" class="dean-profile">
      <h2>Dean</h2>
      <article class="dean-card" tabindex="0">
        <div class="person-photo">
          <img src="/ccs-home/faculty/dean.png" alt="Ma. Christina A. Quijano, MSCS" />
          <div class="profile-caption">
            <h3>Ma. Christina A. Quijano, MSCS</h3>
            <p>Dean</p>
            <div class="profile-socials" aria-label="Social media">
              <span aria-label="Facebook">f</span><span class="twitter-icon" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.64 3.162a4.916 4.916 0 0 0 1.523 6.557 4.9 4.9 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.817 4.936 4.936 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.42A9.876 9.876 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.59z" /></svg></span><span class="google-icon" aria-label="Google Plus">G+</span><span class="linkedin-icon" aria-label="LinkedIn">in</span>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="people-section coordinators-section">
      <div class="people-section-title">
        <p>Teaching as a Way of Life</p>
        <h2>Department Head and Coordinators</h2>
      </div>
      <div class="people-grid">
        <article v-for="person in coordinators" :key="person.name" class="person-card" tabindex="0">
          <div class="person-photo">
            <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
            <div class="profile-caption">
              <h3>{{ person.name }}</h3><p>{{ person.role }}</p>
              <div class="profile-socials" aria-label="Social media">
                <span aria-label="Facebook">f</span><span class="twitter-icon" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.64 3.162a4.916 4.916 0 0 0 1.523 6.557 4.9 4.9 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.817 4.936 4.936 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.42A9.876 9.876 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.59z" /></svg></span><span class="google-icon" aria-label="Google Plus">G+</span><span class="linkedin-icon" aria-label="LinkedIn">in</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="people-section faculty-members-section">
      <div class="people-section-title">
        <p>Teaching as a Way of Life</p>
        <h2>Faculty by Program</h2>
      </div>
      <p class="faculty-assignment-note">These groupings use the program affiliations published by CCS. For BSDMIA and BLIS, the public listing identifies a coordinator but does not list additional faculty assignments.</p>
      <div v-for="group in facultyGroups" :key="group.program" class="faculty-program-group">
        <h3>{{ group.program }}</h3>
        <div class="people-grid">
          <article v-for="person in group.people" :key="person.name" class="person-card" tabindex="0">
            <div class="person-photo">
              <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
              <div class="profile-caption">
                <h3>{{ person.name }}</h3><p>{{ person.role }}</p>
                <div class="profile-socials" aria-label="Social media">
                  <span aria-label="Facebook">f</span><span class="twitter-icon" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.64 3.162a4.916 4.916 0 0 0 1.523 6.557 4.9 4.9 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.817 4.936 4.936 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.42A9.876 9.876 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.59z" /></svg></span><span class="google-icon" aria-label="Google Plus">G+</span><span class="linkedin-icon" aria-label="LinkedIn">in</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <p v-if="group.coordinatorOnly" class="faculty-assignment-note group-assignment-note">Only the program coordinator is identified for this program in the public CCS faculty listing.</p>
      </div>
    </section>

    <section class="people-section staff-section">
      <div class="people-section-title">
        <p>Service and Teaching</p>
        <h2>Staff</h2>
      </div>
      <div class="people-grid">
        <article v-for="person in staff" :key="person.name" class="person-card" tabindex="0">
          <div class="person-photo">
            <img :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
            <div class="profile-caption">
              <h3>{{ person.name }}</h3><p>{{ person.role }}</p>
              <div class="profile-socials" aria-label="Social media">
                <span aria-label="Facebook">f</span><span class="twitter-icon" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.64 3.162a4.916 4.916 0 0 0 1.523 6.557 4.9 4.9 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.817 4.936 4.936 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.42A9.876 9.876 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.59z" /></svg></span><span class="google-icon" aria-label="Google Plus">G+</span><span class="linkedin-icon" aria-label="LinkedIn">in</span>
              </div>
            </div>
          </div>
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
.dean-card .person-photo > img { height:530px; object-position:center top; }
.dean-card:focus-visible { outline:2px solid #194641; outline-offset:4px; }
.people-section { padding:50px 24px 120px; }
.people-section-title { margin:0 auto 48px; text-align:center; }
.people-section-title p { margin-bottom:16px; }
.people-section-title h2 { font-size:50px; }
.people-grid { width:min(1532px,100%); margin:0 auto; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:27px; align-items:start; }
.faculty-program-group { width:min(1532px,100%); margin:0 auto 52px; }
.faculty-program-group > h3 { margin:0 0 22px; color:#194641; font:500 clamp(23px,2.5vw,32px)/1.25 'Roboto Slab',Georgia,serif; text-align:center; }
.faculty-program-group .people-grid { grid-template-columns:repeat(auto-fit,minmax(220px,320px)); justify-content:center; }
.faculty-assignment-note { max-width:880px; margin:-24px auto 40px; color:#687572; font-size:15px; line-height:1.65; text-align:center; }
.group-assignment-note { margin:20px auto 0; }
.person-card { min-width:0; background:#fff; outline:none; }
.person-photo { position:relative; overflow:hidden; border-bottom:7px solid #ffa622; }
.person-photo > img { display:block; width:100%; height:498px; object-fit:cover; object-position:center top; }
.profile-caption { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-start; align-items:flex-start; padding:68px 22px; background:rgba(13,66,62,.84); text-align:left; opacity:0; transition:opacity .25s ease; }
.person-card:hover .profile-caption,.person-card:focus-visible .profile-caption,.dean-card:hover .profile-caption,.dean-card:focus-visible .profile-caption { opacity:1; }
.profile-caption h3 { margin:0 0 10px; color:#ffad22; font:700 22px/1.35 Roboto,Arial,sans-serif; text-transform:uppercase; }
.profile-caption p { margin:0; color:#fff; font-size:16px; line-height:1.5; text-transform:uppercase; }
.profile-socials { display:flex; align-items:center; gap:14px; margin-top:24px; color:#ffad22; }
.profile-socials span { display:inline-flex; width:38px; height:38px; align-items:center; justify-content:center; border-radius:50%; background:#ffad22; color:#164d47; font:bold 25px/1 Arial,sans-serif; }
.profile-socials .twitter-icon { font-size:20px; }
.profile-socials .twitter-icon svg { width:22px; height:22px; fill:currentColor; }
.profile-socials .google-icon { font-size:20px; }
.profile-socials .linkedin-icon { width:34px; height:34px; border-radius:4px; font-size:19px; }
@media(hover:none) { .profile-caption { opacity:1; } }
.faculty-members-section { padding-top:4px; }
.staff-section { padding-top:48px; background:#fafafa; }
.back-to-top { position:fixed; z-index:30; right:27px; bottom:25px; width:55px;height:55px;border:1px solid #e8e8e8;border-radius:50%;background:white;box-shadow:0 3px 12px #0002;color:#111;font-size:30px;line-height:1;cursor:pointer; }
@media(max-width:1050px) {
  .people-intro { width:calc(100% - 52px); grid-template-columns:.8fr 1.4fr; gap:50px; }
  .people-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
  .person-photo > img { height:clamp(360px,60vw,520px); }
}
@media(max-width:650px) {
  .people-intro { width:calc(100% - 40px); min-height:0; padding:82px 0 75px; grid-template-columns:1fr; gap:34px; }
  .people-intro-title { padding-left:24px; }
  .people-intro-title h2 { font-size:53px; }
  .people-intro-copy { grid-template-columns:1fr; gap:15px; font-size:16px; }
  .dean-profile { padding-bottom:75px; }
  .dean-profile > h2,.people-section-title h2 { font-size:38px; }
  .dean-card { margin-top:28px; }
  .dean-card .person-photo > img { height:440px; }
  .people-section { padding:55px 17px 78px; }
  .people-section-title { margin-bottom:32px; }
  .people-section-title h2 { font-size:34px; }
  .people-section-title p { font-size:16px; }
  .people-grid { gap:20px 12px; }
  .person-photo { border-bottom-width:5px; }
  .person-photo > img { height:clamp(225px,67vw,370px); }
  .profile-caption { padding:14px; }
  .profile-caption h3 { font-size:16px; }
  .profile-caption p { font-size:12px; }
  .profile-socials { gap:8px; margin-top:16px; }
  .profile-socials span { width:30px; height:30px; font-size:20px; }
  .profile-socials .linkedin-icon { width:28px; height:28px; font-size:16px; }
  .back-to-top { right:16px; bottom:16px; width:48px;height:48px; }
}
</style>
