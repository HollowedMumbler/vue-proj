<script setup>
const history = [
  'The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students headed by Prof. Mary O’ T. Penetrante.',
  'During the first semester of AY 2001–2002, the Computer Science Department was transferred to the College of Engineering together with the newly offered Bachelor of Science in Software Engineering (BSSE) course. It was then called the Software Engineering and Computer Science (SE & CS) Department and was headed by Engr. Cirilo C. Calibjo, PEE. At the same time of the transfer, the Bachelor in Information Science and Management (BISM) which was the brainchild of Prof. Aquiles Sansing, was offered in the College of Commerce.',
  'At the end of school year AY 2002–2003, it was proposed that the BSCS program under the College of Engineering and the BSISM program under the College of Commerce, along with another new course, Bachelor of Science in Information Technology (BSIT) would be combined under one college. The university then approved the proposal and the College of Computer Studies began.',
  'In the first semester of AY 2003–2004, Engr. Cirilo C. Calibjo, Department Chair of the Department of SE & CS in the College of Engineering, became its first Dean. The new college was housed in the Mary Thomas Building.',
  'In April 2004, two new degree courses, Master in Computer Science (MCS) and Master of Science in Computer Science(MSCS), were approved to be offered.',
  'During the First Semester of AY 2006-2007, Engr. Calibjo went to Manila to pursue his doctoral studies in Electrical Engineering at the University of the Philippines, Diliman, upon which, Prof. Rodney A. Gicana was appointed as the Officer-in-Charge during his absence. Prof. Gicana was previously the Department Head of the Software Engineering Department.',
  'As time progressed, a lot of changes were upheld in the College with the programs it offers, as well as its facilities. As Dr. Calibjo completed his Doctoral degree, he then came back to the College of Computer Studies as the Dean and allowed more exciting things to happen.',
  'In the year 2011, the College applied for PAASCU Accreditation and had its preliminary visit in this year. A lot of improvements were made to enhance the facilities and increase the standards of education for the college itself.',
  'In 2014, a highlight for the CCS, a consultancy visit made by the PAASCU was made possible to assure that all the requirements are met before a formal visit is to commence. At this time, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) was established.',
  'By March 2015, a formal visit was conducted by the PAASCU and by June of the same year, the College of Computer Studies was granted a Level 1 Status for the BSCS, BSIT and BSIS programs of the college.',
  'In June 2016, Prof. Rea P. Balontong was appointed as the Office-in-Charge for the College of Computer Studies.',
  'In June 2018, the Bachelor of Science in Library and Information Science migrated to the College of Computer Studies.',
  'As the academic year of 2018-2019 has begun, Prof. Ma. Christina A. Quijano was appointed as the Officer-in-Charge for the College and is at present (AY 2021-2022), Acting Dean.',
  'On September 16-18, 2019, a re-survey visit for Level 1 status for the BSCS, BSIT and BSIS programs was made by the PAASCU Accreditation Team. After the visit, the College is then granted a 5 year Level 1 re-accredited status.',
  'The BLIS program underwent an orientation from the PACUCOA Accrediting body last October 2019 and is to have its preliminary survey early this year 2020.',
  'This indeed is another milestone achieved by the college. With the vast changes and improvements, there is more to it than what the eyes can see.',
  'More achievements and goals are yet to come, as CCS will make its mark in the history of Central Philippine University.',
]
</script>

<template>
  <main class="history-page">
    <section class="history-hero" aria-labelledby="history-title">
      <header class="history-header">
        <a class="history-brand" href="/" aria-label="College of Computer Studies home">
          <img src="/ccs-home/ccs-emblem.png" alt="CCS logo" />
        </a>
        <nav class="history-nav" aria-label="Main navigation">
          <a class="active" href="/">Home</a>
          <a href="#about">About Us <span>⌄</span></a>
          <a href="#programs">Academic Programs <span>⌄</span></a>
          <a href="#faculty">Faculty and Staff</a>
          <a href="#events">Event Calendar</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>
      <div class="hero-title">
        <h1 id="history-title">College History</h1>
        <span class="title-rule" aria-hidden="true"></span>
      </div>
      <div class="hero-wave hero-wave-light" aria-hidden="true"></div>
      <div class="hero-wave hero-wave-white" aria-hidden="true"></div>
    </section>

    <section class="history-content" aria-label="College history">
      <article class="history-card">
        <p v-for="(paragraph, index) in history" :key="index">{{ paragraph }}</p>
      </article>
    </section>
    <footer class="history-footer">Gutener Education Theme by Keon Themes</footer>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@400;500&display=swap');

.history-page {
  min-height: 100vh;
  color: #777;
  background: #fff;
  font-family: Lato, Arial, sans-serif;
}

.history-hero {
  position: relative;
  height: 465px;
  overflow: hidden;
  background:
    linear-gradient(112deg, rgba(255, 174, 32, .75) 0%, rgba(151, 132, 37, .77) 49%, rgba(14, 73, 62, .73) 100%),
    url('/ccs-home/hero-desktop.jpg') center 43% / cover no-repeat;
}

.history-header {
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1360px, calc(100% - 64px));
  height: 96px;
  margin: 0 auto;
}

.history-brand { display: block; width: 65px; height: 74px; }
.history-brand img { width: 100%; height: 100%; object-fit: contain; }
.history-nav { display: flex; align-items: center; gap: 31px; }
.history-nav a {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .2px;
  text-decoration: none;
  white-space: nowrap;
}
.history-nav a.active { color: #fff; }
.history-nav span { padding-left: 4px; font-size: 14px; }

.hero-title {
  position: relative;
  z-index: 3;
  padding-top: 27px;
  color: #fff;
  text-align: center;
}
.hero-title h1 {
  margin: 0;
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: clamp(42px, 3.3vw, 64px);
  font-weight: 400;
  line-height: 1.2;
}
.title-rule { display: block; width: 56px; height: 3px; margin: 34px auto 0; background: #fff; }

.hero-wave { position: absolute; pointer-events: none; }
.hero-wave-light {
  z-index: 1;
  left: -5%;
  bottom: -4px;
  width: 111%;
  height: 168px;
  background: rgba(255, 255, 255, .48);
  clip-path: polygon(0 0, 17% 37%, 29% 65%, 43% 48%, 59% 15%, 75% 0, 88% 14%, 100% 48%, 100% 100%, 0 100%);
}
.hero-wave-white {
  z-index: 2;
  left: -3%;
  bottom: -110px;
  width: 108%;
  height: 290px;
  border-radius: 50% 46% 0 0 / 38% 45% 0 0;
  background: #fff;
  transform: rotate(-5deg);
}

.history-content { position: relative; z-index: 5; min-height: 580px; padding: 0 24px 70px; }
.history-card {
  position: relative;
  width: min(700px, 100%);
  margin: -116px auto 0;
  padding: 34px 34px 40px;
  border: 1px solid #343434;
  border-radius: 15px;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, .28);
}
.history-card p {
  margin: 0 0 22px;
  color: #777;
  font-size: 15px;
  font-style: italic;
  line-height: 1.8;
  text-align: justify;
}
.history-card p:last-child { margin-bottom: 0; }
.history-footer { padding: 20px; color: #999; font-size: 12px; text-align: center; }

@media (max-width: 900px) {
  .history-header { width: calc(100% - 36px); height: 80px; }
  .history-brand { width: 54px; height: 62px; }
  .history-nav { gap: 15px; }
  .history-nav a { font-size: 13px; }
}
@media (max-width: 680px) {
  .history-hero { height: 390px; background-position: 50% center; }
  .history-header { align-items: flex-start; height: auto; padding-top: 12px; }
  .history-nav { justify-content: flex-end; flex-wrap: wrap; gap: 10px 14px; max-width: calc(100% - 68px); padding-top: 12px; }
  .history-nav a { font-size: 11px; }
  .hero-title { padding: 82px 14px 0; }
  .title-rule { margin-top: 22px; }
  .hero-wave-light { height: 130px; }
  .hero-wave-white { bottom: -150px; }
  .history-content { padding: 0 16px 48px; }
  .history-card { margin-top: -92px; padding: 26px 22px 30px; border-radius: 12px; }
  .history-card p { font-size: 14px; line-height: 1.75; }
}
</style>
