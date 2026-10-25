<script setup>
import AboutPageBanner from './AboutPageBanner.vue'
</script>

<template>
  <main class="dean-message-page">
    <AboutPageBanner title="Message from the Dean" />

    <section class="dean-message-card" aria-labelledby="dean-message-heading">
      <div class="dean-message-copy">
        <p class="dean-eyebrow">A MESSAGE FOR THE CCS COMMUNITY</p>
        <h2 id="dean-message-heading">Welcome to the College of Computer Studies</h2>
        <div class="dean-letter">
          <p>
            In every school year for the College of Computer Studies, we look forward with great
            anticipation to the contributions the new class will make to campus life. In both the
            aspect of academic and non academic, each students is unique enough to achieve whatever
            they want to reach for in our college.
          </p>
          <p>
            The primary focus of CCS is teaching and learning. Our undergraduates are encouraged to
            think about their education as a whole, rather than just a term taken one thing at a
            time, and the different faculty members work with them not only during the start of the
            school year, but throughout the whole as well.
          </p>
          <p>
            Learning and growth with us does not always come in classroom and academic experiences.
            Other kinds of opportunities abound, not the least of them the daily occasions for
            friendship and fellowship with people from many different backgrounds and with a wide
            variety of interests. In addition, students participate in rich and varied
            extracurricular activities that the College and University has got to offer.
          </p>
          <p>
            As another year starts, a new challenge comes for each and everyone with us. Take this
            into your mind and hearts and be able to reach the dream that you have ever dreamt to
            succeed. Welcome dear students and have a great school year ahead of you.
          </p>
        </div>
        <p class="dean-signature">Ma. Christina A. Quijano, MSCS <span>Dean</span></p>
      </div>

      <figure class="dean-portrait">
        <img src="/ccs-home/faculty/dean.png" alt="Ma. Christina A. Quijano, MSCS, Dean" />
        <figcaption>Ma. Christina A. Quijano, MSCS<br />Dean</figcaption>
      </figure>
    </section>

    <footer class="dean-message-source">
      <p>Message adapted from the College of Computer Studies.</p>
      <a href="https://ccs.cpu.edu.ph/dean-message/" target="_blank" rel="noopener noreferrer">
        View the official message ↗
      </a>
    </footer>
  </main>
</template>

<style scoped>
.dean-message-page {
  color: #34423b;
  font-family: Arial, Helvetica, sans-serif;
}

.dean-message-card {
  width: min(1200px, calc(100% - 44px));
  margin: -75px auto 0;
  padding: 34px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 290px;
  align-items: center;
  gap: clamp(28px, 5vw, 64px);
  position: relative;
  z-index: 2;
  border: 1px solid #d6d6d1;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 15px 34px #18251e24;
}

.dean-eyebrow {
  margin: 0 0 10px;
  color: #74887a;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.dean-message-copy h2 {
  margin: 0 0 22px;
  color: #143e3b;
  font-family: 'Roboto Slab', Georgia, serif;
  font-size: clamp(27px, 3vw, 36px);
  line-height: 1.25;
}

.dean-letter {
  padding-left: 20px;
  border-left: 3px solid #ffad1f;
}

.dean-letter p {
  margin: 0;
  color: #65716c;
  font-size: 15px;
  line-height: 1.85;
  text-align: left;
}

.dean-letter p + p {
  margin-top: 15px;
}

.dean-signature {
  margin: 22px 0 0;
  color: #143e3b;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
}

.dean-signature span {
  margin-top: 4px;
  display: block;
  color: #f5a018;
  font-size: 13px;
  font-weight: 500;
}

.dean-portrait {
  margin: 0;
  padding: 12px;
  border: 1px solid #e1e1dc;
  border-radius: 12px;
  background: #fafaf8;
  text-align: center;
}

.dean-portrait img {
  width: 100%;
  max-height: 390px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center top;
}

.dean-portrait figcaption {
  padding: 13px 5px 3px;
  color: #143e3b;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.6;
}

.dean-message-source {
  padding: 26px 22px 34px;
  text-align: center;
}

.dean-message-source p {
  margin: 0 0 8px;
  color: #78827f;
  font-size: 12px;
}

.dean-message-source a {
  color: #143e3b;
  font-size: 13px;
  font-weight: 700;
  text-decoration-color: #ffad1f;
  text-underline-offset: 3px;
}

@media (max-width: 800px) {
  .dean-message-card {
    grid-template-columns: minmax(0, 1fr) 230px;
    gap: 24px;
    padding: 26px;
  }
}

@media (max-width: 650px) {
  .dean-message-card {
    width: min(540px, calc(100% - 36px));
    margin-top: -56px;
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .dean-portrait {
    width: min(100%, 300px);
    margin: 0 auto;
  }
}
</style>
