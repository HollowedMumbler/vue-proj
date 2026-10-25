<script setup>
import PageBanner from '../../PageBanner.vue'

defineProps({ title: String, acronym: String, summary: String, rationale: String, focus: Array, outcomes: Array })
</script>

<template>
  <main class="program-page">
    <PageBanner kicker="Academically Knowledgeable and Here For You" :title="title" active-page="programs" />
    <section class="program-intro"><p class="eyebrow">COLLEGE OF COMPUTER STUDIES · {{ acronym }}</p><h2>{{ title }}</h2><p>{{ summary }}</p></section>
    <section class="program-details">
      <article><p class="eyebrow">PROGRAM OVERVIEW</p><h2>About the program</h2><p>{{ rationale }}</p></article>
      <article><p class="eyebrow">AREAS OF STUDY</p><h2>Program focus</h2><ul><li v-for="item in focus" :key="item">{{ item }}</li></ul></article>
    </section>
    <section class="outcomes"><p class="eyebrow">GRADUATE OUTCOMES</p><h2>What graduates are prepared to do</h2><ol><li v-for="item in outcomes" :key="item">{{ item }}</li></ol><p class="source-note">Program information is from the College of Computer Studies, Central Philippine University. The reference lists CHED Memo Order No. 25, s. 2015 and an effective year of AY 2018–2019.</p></section>
  </main>
</template>

<style scoped>
.program-page{font-family:Arial,Helvetica,sans-serif;color:#24372b}.program-intro{width:min(1120px,calc(100% - 44px));margin:auto;padding:90px 0 82px}.eyebrow{margin:0 0 16px;color:#718071;font-size:12px;font-weight:700;letter-spacing:.14em}.program-intro h2,.program-details h2,.outcomes h2{margin:0 0 20px;color:#183727;font-size:clamp(32px,4vw,48px);line-height:1.12}.program-intro>p:last-child{max-width:850px;margin:0;color:#59645b;font-size:19px;line-height:1.8}.program-details{padding:75px max(22px,calc((100% - 1120px)/2));display:grid;grid-template-columns:1fr 1fr;gap:60px;background:#f4f6f2}.program-details article>p:last-child,.program-details li{color:#59645b;font-size:16px;line-height:1.8}.program-details ul{padding-left:20px}.outcomes{width:min(1120px,calc(100% - 44px));margin:auto;padding:80px 0}.outcomes ol{padding-left:22px;display:grid;gap:15px}.outcomes li{padding-left:8px;color:#59645b;line-height:1.7}.source-note{margin-top:36px;color:#7b857c;font-size:12px}@media(max-width:700px){.program-intro{padding:58px 0}.program-details{grid-template-columns:1fr;gap:32px;padding:55px 22px}.outcomes{padding:58px 0}}
</style>
