<script setup>
import PageBanner from '../../PageBanner.vue'

const milestones = [
  {
    year: '1995',
    title: 'The first computer science program',
    text: 'The BSCS program began under the College of Commerce. Its first batch had two sections and about 100 students, led by Prof. Mary O’ T. Penetrante.',
  },
  {
    year: 'AY 2001–2002',
    title: 'Computing programs expand',
    text: 'The Computer Science Department moved to the College of Engineering alongside the newly offered BS Software Engineering program. The College of Commerce also offered the Bachelor in Information Science and Management.',
  },
  {
    year: 'AY 2002–2003',
    title: 'The College of Computer Studies begins',
    text: 'The university approved a proposal to bring BSCS, BSISM, and the new BSIT program together under one college: CCS.',
  },
  {
    year: 'AY 2003–2004',
    title: 'A home at Mary Thomas Building',
    text: 'CCS opened with Engr. Cirilo C. Calibjo as its first Dean. The new college was housed in the Mary Thomas Building.',
  },
  {
    year: 'April 2004',
    title: 'Graduate studies are approved',
    text: 'The Master in Computer Science and Master of Science in Computer Science programs were approved for offering.',
  },
  {
    year: 'AY 2006–2007',
    title: 'A new officer-in-charge',
    text: 'While Engr. Calibjo pursued doctoral studies at UP Diliman, Prof. Rodney A. Gicana served as Officer-in-Charge.',
  },
  {
    year: '2011',
    title: 'Preparing for accreditation',
    text: 'CCS applied for PAASCU accreditation and underwent a preliminary visit, beginning improvements to its facilities and academic standards.',
  },
  {
    year: '2014–2015',
    title: 'A new program and Level 1 status',
    text: 'BSDMIA was established in 2014. In 2015, BSCS, BSIT, and BSIS received PAASCU Level 1 status after a formal visit.',
  },
  {
    year: 'June 2016',
    title: 'A new officer-in-charge',
    text: 'Prof. Rea P. Balontong was appointed Officer-in-Charge of the College of Computer Studies.',
  },
  {
    year: '2018–2019',
    title: 'The college welcomes BLIS',
    text: 'The Bachelor of Library and Information Science migrated to CCS in June 2018. Prof. Ma. Christina A. Quijano was appointed Officer-in-Charge as the 2018–2019 academic year began.',
  },
  {
    year: '2019',
    title: 'Reaccreditation and continued growth',
    text: 'Following a PAASCU re-survey in September, BSCS, BSIT, and BSIS received five-year Level 1 reaccredited status. BLIS began its PACUCOA accreditation process with an orientation in October.',
  },
]
</script>

<template>
  <main class="history-page">
    <PageBanner
      kicker="Remember · Connect · Engage · Build · Share"
      title="College History"
      active-page="about"
    />

    <section class="history-story">
      <div class="history-story-copy">
        <p class="history-eyebrow">HOW IT STARTED</p>
        <h2>From one computer science program to a college of studies.</h2>
        <p>
          CCS began in 1995 with the Bachelor of Science in Computer Science program. As new
          computing and information programs joined, CPU brought them together to form the College
          of Computer Studies.
        </p>
      </div>
      <figure class="history-mark-panel">
        <img src="/ccs-home/history-ccs-mark.png" alt="College of Computer Studies emblem" />
        <figcaption>College of Computer Studies<br />Central Philippine University</figcaption>
      </figure>
    </section>

    <section class="history-milestones" aria-labelledby="history-milestones-title">
      <div class="history-timeline-heading">
        <p class="history-eyebrow">THE CCS STORY</p>
        <h2 id="history-milestones-title">Milestones and growth</h2>
        <p>A timeline of the programs, people, and achievements that shaped the college.</p>
      </div>

      <ol class="history-timeline">
        <li
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          :class="{ 'timeline-item-right': index % 2 === 1 }"
        >
          <article class="history-event-card">
            <p class="history-event-year">{{ milestone.year }}</p>
            <h3>{{ milestone.title }}</h3>
            <p class="history-event-text">{{ milestone.text }}</p>
          </article>
          <span class="history-timeline-dot" aria-hidden="true"></span>
        </li>
      </ol>
    </section>

    <footer class="history-source">
      <p>History details are based on the College of Computer Studies’ published account.</p>
      <a href="https://ccs.cpu.edu.ph/history/" target="_blank" rel="noopener noreferrer">
        View the official CCS history ↗
      </a>
    </footer>
  </main>
</template>

<style scoped>
.history-page {
  --history-green: #143e3b;
  --history-deep: #0b2022;
  --history-gold: #ffad1f;
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.history-story {
  width: min(1140px, calc(100% - 44px));
  margin: 0 auto;
  padding: 82px 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  align-items: center;
  gap: clamp(40px, 8vw, 110px);
}

.history-eyebrow {
  margin: 0 0 12px;
  color: #74887a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.history-story-copy h2,
.history-timeline-heading h2 {
  margin: 0;
  color: var(--history-green);
  font-size: clamp(32px, 4vw, 47px);
  line-height: 1.17;
}

.history-story-copy > p:last-child {
  max-width: 700px;
  margin: 20px 0 0;
  color: #65716c;
  font-size: 16px;
  line-height: 1.85;
}

.history-mark-panel {
  min-height: 270px;
  margin: 0;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8e2;
  border-radius: 6px;
  background: #f5f7f3;
  text-align: center;
}

.history-mark-panel img {
  width: 126px;
  height: 126px;
  object-fit: contain;
}

.history-mark-panel figcaption {
  margin-top: 15px;
  color: #65716c;
  font-size: 13px;
  line-height: 1.6;
}

.history-milestones {
  padding: 76px 22px 88px;
  background: #f3f6f1;
}

.history-timeline-heading {
  margin: 0 auto 52px;
  text-align: center;
}

.history-timeline-heading h2 {
  font-size: clamp(30px, 3.5vw, 42px);
}

.history-timeline-heading > p:last-child {
  margin: 12px 0 0;
  color: #78827f;
  font-size: 15px;
}

.history-timeline {
  width: min(1060px, 100%);
  margin: 0 auto;
  padding: 0;
  position: relative;
  list-style: none;
}

.history-timeline::before {
  width: 2px;
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 50%;
  background: #d8e2d9;
  content: '';
  transform: translateX(-50%);
}

.history-timeline li {
  min-height: 1px;
  margin: 0 0 22px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr);
  align-items: start;
  position: relative;
}

.history-timeline li:last-child {
  margin-bottom: 0;
}

.history-event-card {
  grid-column: 1;
  padding: 20px 22px;
  border-left: 4px solid var(--history-gold);
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 8px 22px #061a1a12;
}

.timeline-item-right .history-event-card {
  grid-column: 3;
}

.history-event-year {
  margin: 0 0 7px;
  color: #b67509;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.history-event-card h3 {
  margin: 0 0 9px;
  color: var(--history-green);
  font-size: 19px;
  line-height: 1.35;
}

.history-event-text {
  margin: 0;
  color: #65716c;
  font-size: 14px;
  line-height: 1.75;
}

.history-timeline-dot {
  width: 16px;
  height: 16px;
  margin: 20px auto 0;
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
  border: 3px solid #f3f6f1;
  border-radius: 50%;
  background: var(--history-gold);
  box-shadow: 0 0 0 1px #d8e2d9;
}

.history-source {
  padding: 30px 22px 36px;
  text-align: center;
}

.history-source p {
  margin: 0 0 8px;
  color: #78827f;
  font-size: 12px;
}

.history-source a {
  color: var(--history-green);
  font-size: 13px;
  font-weight: 700;
  text-decoration-color: var(--history-gold);
  text-underline-offset: 3px;
}

@media (max-width: 760px) {
  .history-story {
    padding: 58px 0;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .history-mark-panel {
    width: min(100%, 340px);
    min-height: 220px;
    justify-self: center;
  }

  .history-mark-panel img {
    width: 100px;
    height: 100px;
  }

  .history-milestones {
    padding: 58px 18px 64px;
  }

  .history-timeline-heading {
    margin-bottom: 34px;
  }

  .history-timeline::before {
    left: 8px;
  }

  .history-timeline li {
    margin-bottom: 17px;
    grid-template-columns: 26px minmax(0, 1fr);
    gap: 12px;
  }

  .history-event-card,
  .timeline-item-right .history-event-card {
    grid-column: 2;
  }

  .history-timeline-dot {
    margin: 20px 0 0;
    grid-column: 1;
  }
}
</style>
