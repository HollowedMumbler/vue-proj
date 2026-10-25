<script setup>
defineProps({
  programName: { type: String, required: true },
  people: { type: Array, required: true },
  assignmentNote: { type: String, default: '' },
  roleSource: { type: String, default: 'https://cpu.edu.ph/news/cpu-ccs-kicks-off-the-school-year-with-soiree-the-2025-acquaintance-party/' },
})
</script>

<template>
  <section class="program-faculty" :aria-label="`${programName} faculty and coordinator`">
    <div class="program-faculty-heading">
      <p>PEOPLE BEHIND THE PROGRAM</p>
      <h2>Faculty and Program Leadership</h2>
      <p class="program-faculty-note">Names and program roles follow published CCS and CPU information.</p>
    </div>
    <div class="program-faculty-grid">
      <article v-for="person in people" :key="person.name" class="program-person">
        <img v-if="person.image" :src="`/ccs-home/faculty/${person.image}`" :alt="person.name" loading="lazy" />
        <div class="program-person-copy">
          <h3>{{ person.name }}</h3>
          <p>{{ person.role }}</p>
        </div>
      </article>
    </div>
    <p v-if="assignmentNote" class="program-faculty-note assignment-note">{{ assignmentNote }}</p>
    <p class="program-faculty-sources">
      <a href="https://ccs.cpu.edu.ph/faculty-and-staff/" target="_blank" rel="noopener noreferrer">CCS faculty listing</a>
      <a v-if="roleSource" :href="roleSource" target="_blank" rel="noopener noreferrer">CPU program role source</a>
    </p>
  </section>
</template>

<style scoped>
.program-faculty { padding:72px max(24px,calc((100% - 1200px)/2)); background:#f4f6f2; color:#194641; }
.program-faculty-heading { margin:0 auto 32px; text-align:center; }
.program-faculty-heading > p:first-child { margin:0 0 10px; color:#a36b08; font-size:12px; font-weight:700; letter-spacing:.16em; }
.program-faculty h2 { margin:0; font:500 clamp(26px,3vw,36px)/1.2 'Roboto Slab',Georgia,serif; }
.program-faculty-note { max-width:680px; margin:12px auto 0; color:#65716d; font-size:14px; line-height:1.65; text-align:center; }
.program-faculty-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; }
.program-person { display:flex; min-height:112px; align-items:center; gap:16px; padding:16px; border:1px solid #e1e7e2; border-radius:10px; background:#fff; box-shadow:0 8px 24px #1837270b; }
.program-person img { width:72px; height:72px; flex:none; border-radius:50%; object-fit:cover; object-position:center top; }
.program-person h3 { margin:0 0 5px; color:#194641; font-size:16px; line-height:1.35; }
.program-person p { margin:0; color:#687572; font-size:13px; line-height:1.45; }
.assignment-note { margin-top:22px; }
.program-faculty-sources { display:flex; justify-content:center; flex-wrap:wrap; gap:18px; margin:18px auto 0; }
.program-faculty-sources a { color:#194641; font-size:13px; font-weight:700; text-decoration-color:#e99a00; text-underline-offset:3px; }
@media(max-width:600px) { .program-faculty { padding:54px 20px; } .program-person { min-height:96px; } }
</style>
