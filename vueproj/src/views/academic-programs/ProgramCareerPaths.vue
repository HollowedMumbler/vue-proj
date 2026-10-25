<script setup>
defineProps({
  title: { type: String, default: 'Career Opportunities' },
  paths: { type: Array, required: true },
  note: { type: String, required: true },
  sourceUrl: { type: String, default: '' },
})
</script>

<template>
  <section id="career-opportunities" class="career-paths" aria-labelledby="career-paths-title">
    <p class="career-kicker">AFTER GRADUATION</p>
    <h2 id="career-paths-title">{{ title }}</h2>
    <div class="career-grid">
      <article v-for="(path, index) in paths" :key="path" class="career-card">
        <span class="career-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3>{{ path }}</h3>
      </article>
    </div>
    <p class="career-note">{{ note }}</p>
    <p v-if="sourceUrl" class="career-source"><a :href="sourceUrl" target="_blank" rel="noopener noreferrer">View career source ↗</a></p>
  </section>
</template>

<style scoped>
.career-paths { padding:76px max(24px,calc((100% - 1200px)/2)); color:#194641; background:#fff; }
.career-kicker { margin:0 0 10px; color:#a36b08; font-size:12px; font-weight:700; letter-spacing:.16em; text-align:center; }
.career-paths h2 { margin:0 0 32px; color:#194641; font:500 clamp(28px,3vw,38px)/1.2 'Roboto Slab',Georgia,serif; text-align:center; }
.career-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; }
.career-card { min-height:130px; padding:20px; border:1px solid #e1e7e2; border-radius:10px; background:#f7f8f5; }
.career-number { display:inline-block; margin-bottom:15px; color:#b57912; font-size:12px; font-weight:700; letter-spacing:.12em; }
.career-card h3 { margin:0; color:#194641; font-size:17px; font-weight:600; line-height:1.45; }
.career-note { max-width:840px; margin:24px auto 0; color:#687572; font-size:13px; line-height:1.65; text-align:center; }
.career-source { margin:10px 0 0; text-align:center; }
.career-source a { color:#194641; font-size:13px; font-weight:700; text-decoration-color:#e99a00; text-underline-offset:3px; }
@media(max-width:600px) { .career-paths { padding:54px 20px; } .career-card { min-height:0; } }
</style>
