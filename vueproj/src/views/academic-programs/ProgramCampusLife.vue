<script setup>
defineProps({
  organizationName: { type: String, required: true },
  logo: { type: String, required: true },
  logoAlt: { type: String, required: true },
  paragraphs: { type: Array, required: true },
})
</script>

<template>
  <section id="campus-life" class="program-campus-life" aria-labelledby="campus-life-title">
    <div class="campus-life-inner">
      <div class="campus-logo-card">
        <img :src="logo" :alt="logoAlt" />
      </div>
      <div class="campus-life-copy">
        <p class="campus-life-kicker"><span>05</span> Campus Life</p>
        <h2 id="campus-life-title">{{ organizationName }}</h2>
        <p class="campus-life-intro">Student organizations connect students through shared interests, campus activities, and service.</p>
        <div class="campus-life-description">
          <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.program-campus-life {
  position: relative;
  overflow: hidden;
  border-top: 5px solid #e99a00;
  background: #153f3d;
  scroll-margin-top: 110px;
}

.campus-life-inner {
  display: grid;
  width: min(1330px, calc(100% - 100px));
  min-height: 430px;
  margin: 0 auto;
  padding: 68px 0;
  grid-template-columns: minmax(230px, 360px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(42px, 7vw, 94px);
}

.campus-logo-card {
  display: grid;
  min-height: 300px;
  padding: 28px;
  place-items: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 16px 38px #092b291f;
}

.campus-logo-card img { display: block; width: 100%; max-width: 290px; height: auto; object-fit: contain; }
.campus-life-copy { max-width: 790px; }
.campus-life-kicker { display:flex; align-items:center; gap:12px; margin:0 0 17px; color:#f1b94f; font-size:13px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }
.campus-life-kicker span { display:grid; width:34px; height:28px; place-items:center; border:1px solid #f1b94f80; border-radius:16px; color:#fff; font-size:11px; letter-spacing:.04em; }
.campus-life-copy h2 { margin:0 0 14px; color:#fff; font-size:clamp(25px,3vw,36px); font-weight:500; line-height:1.25; }
.campus-life-intro { margin:0 0 22px; color:#d6e1de; font-size:17px; line-height:1.65; }
.campus-life-description { padding-left:20px; border-left:2px solid #e99a00; }
.campus-life-description p { margin:0 0 15px; color:#fff; font-size:16px; line-height:1.8; }
.campus-life-description p:last-child { margin-bottom:0; }

@media(max-width:800px) {
  .campus-life-inner { width:calc(100% - 60px); grid-template-columns:minmax(180px,260px) minmax(0,1fr); gap:32px; }
  .campus-logo-card { min-height:230px; padding:20px; }
  .campus-life-description p { font-size:15px; }
}

@media(max-width:600px) {
  .campus-life-inner { width:calc(100% - 38px); min-height:0; padding:44px 0 50px; grid-template-columns:1fr; gap:28px; }
  .campus-logo-card { width:min(230px,100%); min-height:200px; margin:0 auto; padding:18px; }
  .campus-life-copy h2 { font-size:25px; }
  .campus-life-intro { font-size:15px; }
  .campus-life-description { padding-left:15px; }
  .campus-life-description p { font-size:14px; line-height:1.75; }
}
</style>
