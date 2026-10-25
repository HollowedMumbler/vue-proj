<script setup>
import PageBanner from './PageBanner.vue'

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
    <PageBanner kicker="Academically Knowledgeable and Here For You" title="About Us" active-page="about" @navigate="$emit('navigate', $event)" />

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
        <article>
          <h3>Vision</h3>
          <p>The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.</p>
        </article>
        <article>
          <h3>Mission</h3>
          <p>A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.</p>
        </article>
        <article>
          <h3>Quality Policy</h3>
          <p>To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.</p>
          <p>We maintain a quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.</p>
        </article>
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
.about-page { min-height:100vh; color:#194641; background:#fff; font-family:Roboto,Arial,sans-serif; }
.about-intro { width:min(1528px,calc(100% - 80px)); min-height:390px; margin:0 auto; padding:124px 0; display:grid; grid-template-columns:1fr 1fr; gap:100px; align-items:center; }
.about-kicker { margin:0 0 17px; color:#888; font-size:15px; font-weight:600; letter-spacing:.1em; }
.about-intro h2,.vision-copy h2,.about-history h2,.dean-message h2,.linkages-section h2 { margin:0; color:#194641; font:400 clamp(42px,4vw,68px)/1.08 'Roboto Slab',Georgia,serif; }
.about-intro > div h2 { color:#194641; }
.about-lead { margin:0; padding-left:27px; border-left:4px solid #ffa622; color:#858585; font-size:21px; line-height:1.8; }
.vision-section { position:relative; min-height:650px; padding:95px max(40px,calc((100% - 1300px)/2)); overflow:hidden; background:#f5f6f3; }
.vision-copy { position:relative; z-index:1; max-width:850px; }
.vision-copy h2 { margin-bottom:38px; }
.vision-copy article { margin:0 0 26px; }
.vision-copy h3 { margin:0 0 8px; color:#ffa622; font-size:22px; }
.vision-copy article p { margin:0 0 10px; color:#777; font-size:16px; line-height:1.8; }
.vision-section > img { position:absolute; right:max(4%,calc((100% - 1660px)/2)); top:50%; width:min(360px,28vw); transform:translateY(-50%); opacity:.08; }
.about-history { padding:88px 24px; color:#fff; background:#143d39; }
.about-history-inner { width:min(1270px,100%); margin:0 auto; display:grid; grid-template-columns:.8fr 1.4fr auto; gap:45px; align-items:center; }
.about-history h2 { color:#ffa622; }
.about-history-inner > p { margin:0; color:#d0d7d4; font-size:17px; line-height:1.8; }
.about-link { border:0; padding:13px 18px; color:#163e3b; background:#ffa622; font-size:14px; font-weight:700; white-space:nowrap; cursor:pointer; }
.about-link span { margin-left:8px; }
.dean-message { width:min(1200px,calc(100% - 60px)); margin:0 auto; padding:110px 0; display:grid; grid-template-columns:390px 1fr; gap:85px; align-items:center; }
.dean-message > img { width:100%; height:450px; object-fit:cover; object-position:center top; border-bottom:7px solid #ffa622; }
.dean-message h2 { margin-bottom:22px; color:#ffa622; }
.dean-message > div > p:not(.about-kicker):not(.dean-name) { margin:0; padding-left:20px; border-left:4px solid #ffa622; color:#777; font-size:16px; line-height:1.9; }
.dean-name { margin:28px 0 0; color:#ffa622; font-size:18px; font-style:italic; text-align:right; }
.dean-name span { font-size:15px; }
.linkages-section { padding:92px 24px 110px; text-align:center; background:#f8f8f7; }
.linkages-section h2 { font-size:clamp(34px,3vw,52px); }
.linkages-section > div:first-child > p:last-child { margin:10px 0 60px; color:#aaa; }
.partner-grid { width:min(1050px,100%); margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:45px; align-items:center; }
.partner-grid img { width:100%; height:145px; object-fit:contain; }
.back-to-top { position:fixed; z-index:30; right:27px; bottom:25px; width:55px;height:55px;border:1px solid #e8e8e8;border-radius:50%;background:white;box-shadow:0 3px 12px #0002;color:#111;font-size:30px;line-height:1;cursor:pointer; }
@media(max-width:850px) {
  .about-intro { width:calc(100% - 40px); min-height:0; padding:78px 0; grid-template-columns:1fr; gap:28px; }
  .about-lead { font-size:17px; }
  .vision-section { padding:70px 25px; }
  .vision-section > img { right:-80px; top:20%; width:300px; }
  .about-history-inner { grid-template-columns:1fr; gap:22px; }
  .about-link { width:max-content; }
  .dean-message { width:calc(100% - 40px); padding:75px 0; grid-template-columns:1fr; gap:35px; }
  .dean-message > img { max-width:420px; height:440px; margin:0 auto; }
  .partner-grid { grid-template-columns:repeat(2,1fr); gap:28px; }
}
</style>
