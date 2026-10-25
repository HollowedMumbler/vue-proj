<script setup>
import PageBanner from '../../PageBanner.vue'
</script>

<template>
  <main class="vision-mission-page">
    <PageBanner
      kicker="College of Computer Studies · Central Philippine University"
      title="Vision and Mission"
      active-page="about"
    />

    <section class="vision-intro">
      <div class="vision-intro-copy">
        <p class="vision-eyebrow">OUR DIRECTION</p>
        <h2>Guided by purpose.<br />Ready for the future.</h2>
        <p>
          The College’s vision and mission guide its approach to computer studies, education, and
          service.
        </p>
        <div class="vision-focus-list" aria-label="College focus">
          <span>Academic Excellence</span>
          <span>Information Technology Education</span>
        </div>
      </div>
      <div class="vision-mark-panel">
        <span class="vision-mark-ring" aria-hidden="true"></span>
        <img src="/ccs-home/history-ccs-mark.png" alt="College of Computer Studies emblem" />
        <p>Central Philippine University</p>
      </div>
    </section>

    <section class="vision-statements" aria-label="College statements">
      <article class="statement-card">
        <div class="statement-card-heading">
          <span class="statement-number">01</span>
          <p class="vision-eyebrow">OUR VISION</p>
        </div>
        <h2>Vision</h2>
        <p>
          The College of Computer Studies is founded on the vision of academic excellence in
          Information Technology Education and responsiveness to the needs of the total person and
          the world.
        </p>
        <div class="statement-tags" aria-label="Vision themes">
          <span>The Total Person</span>
          <span>The World</span>
        </div>
      </article>

      <article class="statement-card">
        <div class="statement-card-heading">
          <span class="statement-number">02</span>
          <p class="vision-eyebrow">OUR MISSION</p>
        </div>
        <h2>Mission</h2>
        <p>
          A college of the future that educates students through the Christian principles and
          practices of computer studies and prepares them for advanced study, careers in software
          development, computing systems technology, and information management, and lifelong
          learning.
        </p>
        <div class="statement-tags" aria-label="Fields named in the mission">
          <span>Software Development</span>
          <span>Computing Systems Technology</span>
          <span>Information Management</span>
          <span>Lifelong Learning</span>
        </div>
      </article>

      <article class="quality-card">
        <div class="quality-heading">
          <span class="statement-number">03</span>
          <div>
            <p class="vision-eyebrow">OUR COMMITMENT</p>
            <h2>Quality Policy</h2>
          </div>
        </div>
        <div class="quality-layout">
          <div class="quality-copy">
            <p>
              To fulfill the mission and realize the vision of Central Philippine University, CCS
              commits to providing superior quality services by integrating Christian values,
              academic excellence, the highest level of professionalism, and quality considerations
              in every aspect of its operations.
            </p>
            <p>
              The college maintains a quality management system that complies with international
              quality standards. It continually improves to meet the expectations of the university
              community, partner institutions, and the general public.
            </p>
          </div>
          <ul class="quality-pillars" aria-label="Quality policy principles">
            <li>Christian Values</li>
            <li>Academic Excellence</li>
            <li>Professionalism</li>
            <li>International Standards</li>
            <li>Continual Improvement</li>
          </ul>
        </div>
      </article>
    </section>

    <footer class="vision-source">
      <p>Statement wording is adapted from the College of Computer Studies.</p>
      <a href="https://ccs.cpu.edu.ph/vision-and-mission/" target="_blank" rel="noopener noreferrer">
        View the official Vision and Mission ↗
      </a>
    </footer>
  </main>
</template>

<style scoped>
.vision-mission-page {
  --vision-green: #143e3b;
  --vision-gold: #ffad1f;
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.vision-intro {
  padding: 72px max(22px, calc((100% - 1140px) / 2));
  display: grid;
  grid-template-columns: minmax(0, 1fr) 270px;
  align-items: center;
  gap: clamp(36px, 8vw, 100px);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 90% 10%, #ffad1f1c, transparent 35%),
    #f3f6f1;
}

.vision-eyebrow {
  margin: 0 0 12px;
  color: #74887a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.vision-intro h2 {
  margin: 0;
  color: var(--vision-green);
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.18;
}

.vision-intro-copy > p:not(.vision-eyebrow) {
  max-width: 650px;
  margin: 18px 0 0;
  color: #65716c;
  font-size: 16px;
  line-height: 1.8;
}

.vision-focus-list {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.vision-focus-list span,
.statement-tags span {
  padding: 8px 12px;
  border: 1px solid #dfe6df;
  border-radius: 4px;
  color: var(--vision-green);
  background: #fff;
  font-size: 11px;
  font-weight: 700;
}

.statement-tags {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.vision-mark-panel {
  width: 250px;
  height: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #dfe6df;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 16px 34px #173e3a12;
}

.vision-mark-ring {
  position: absolute;
  inset: 12px;
  border: 1px dashed #ffad1f99;
  border-radius: 50%;
}

.vision-mark-panel img {
  width: 116px;
  height: 116px;
  z-index: 1;
  object-fit: contain;
}

.vision-mark-panel p {
  margin: 8px 0 0;
  z-index: 1;
  color: #74887a;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.vision-statements {
  padding: 68px max(22px, calc((100% - 1140px) / 2)) 80px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  background: #f3f6f1;
}

.statement-card,
.quality-card {
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 8px 22px #061a1a12;
}

.statement-card {
  min-height: 315px;
  border-top: 3px solid var(--vision-gold);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.statement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px #061a1a1a;
}

.statement-card-heading,
.quality-heading {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 13px;
}

.statement-number {
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid #f0dba9;
  border-radius: 5px;
  color: #b67509;
  background: #fff9ea;
  font-size: 13px;
  font-weight: 700;
}

.statement-card-heading .vision-eyebrow {
  margin: 0;
}

.statement-card h2,
.quality-card h2 {
  margin: 0 0 16px;
  color: var(--vision-green);
  font-size: 27px;
  line-height: 1.25;
}

.statement-card > p:not(.vision-eyebrow),
.quality-card > p:not(.vision-eyebrow) {
  margin: 0;
  color: #65716c;
  font-size: 15px;
  line-height: 1.85;
}

.quality-card {
  grid-column: 1 / -1;
  padding: 32px;
  border-radius: 5px;
  border-left: 4px solid var(--vision-gold);
  color: #fff;
  background: var(--vision-green);
  box-shadow: 0 12px 28px #061a1a20;
}

.quality-heading {
  margin-bottom: 22px;
}

.quality-heading .statement-number {
  border-color: #ffad1f99;
  color: var(--vision-gold);
  background: #ffffff0b;
}

.quality-heading .vision-eyebrow {
  margin-bottom: 5px;
  color: #d0d9d5;
}

.quality-heading h2 {
  margin: 0;
  color: var(--vision-gold);
  font-size: 28px;
}

.quality-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 1fr);
  align-items: start;
  gap: 40px;
}

.quality-copy p {
  margin: 0;
  color: #e1e8e5;
  font-size: 14px;
  line-height: 1.8;
}

.quality-copy p + p {
  margin-top: 12px;
}

.quality-pillars {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
  list-style: none;
}

.quality-pillars li {
  padding: 10px 11px;
  border: 1px solid #ffffff2e;
  border-radius: 4px;
  color: #e1e8e5;
  font-size: 11px;
  line-height: 1.5;
}

.quality-pillars li::before {
  margin-right: 6px;
  color: var(--vision-gold);
  content: '✓';
  font-weight: 700;
}

.vision-source {
  padding: 30px 22px 36px;
  text-align: center;
}

.vision-source p {
  margin: 0 0 8px;
  color: #78827f;
  font-size: 12px;
}

.vision-source a {
  color: var(--vision-green);
  font-size: 13px;
  font-weight: 700;
  text-decoration-color: var(--vision-gold);
  text-underline-offset: 3px;
}

@media (max-width: 760px) {
  .vision-intro {
    padding: 56px 22px;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .vision-mark-panel {
    width: 210px;
    height: 210px;
    justify-self: center;
  }

  .vision-mark-panel img {
    width: 98px;
    height: 98px;
  }

  .vision-statements {
    padding: 48px 18px 58px;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .statement-card {
    min-height: 0;
  }

  .quality-card {
    grid-column: auto;
    padding: 25px 22px;
  }

  .quality-layout {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .quality-pillars {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
