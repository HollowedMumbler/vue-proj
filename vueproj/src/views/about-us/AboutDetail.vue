<script setup>
import PageBanner from '../../PageBanner.vue'
defineProps({ title:String, intro:String, sections:Array, image:String, imageAlt:String, items:Array })
</script>
<template>
  <main class="about-detail">
    <PageBanner kicker="College of Computer Studies · Central Philippine University" :title="title" active-page="about" />
    <section class="detail-intro"><p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p><h2>{{ title }}</h2><p>{{ intro }}</p></section>
    <section v-if="sections?.length" class="detail-sections"><article v-for="section in sections" :key="section.heading"><p class="eyebrow">{{ section.label || 'CCS' }}</p><h2>{{ section.heading }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p></article></section>
    <section v-if="image" class="detail-image"><img :src="image" :alt="imageAlt || title" /></section>
    <section v-if="items?.length" class="detail-items"><article v-for="item in items" :key="item.title"><img v-if="item.image" :src="item.image" :alt="item.alt || ''" /><p class="eyebrow">{{ item.meta }}</p><h2>{{ item.title }}</h2><p>{{ item.text }}</p><a v-if="item.href" :href="item.href">Read more ↗</a></article></section>
  </main>
</template>
<style scoped>
.about-detail{font-family:Arial,Helvetica,sans-serif;color:#24372b}.detail-intro{width:min(1120px,calc(100% - 44px));margin:auto;padding:86px 0 80px}.eyebrow{margin:0 0 14px;color:#718071;font-size:12px;font-weight:700;letter-spacing:.13em}.detail-intro h2,.detail-sections h2,.detail-items h2{margin:0 0 18px;color:#183727;font-size:clamp(31px,4vw,47px);line-height:1.15}.detail-intro>p:last-child{max-width:920px;margin:0;color:#59645b;font-size:18px;line-height:1.85}.detail-sections{padding:70px max(22px,calc((100% - 1120px)/2));display:grid;gap:48px;background:#f5f6f3}.detail-sections article{max-width:900px}.detail-sections article p:not(.eyebrow){color:#59645b;line-height:1.85}.detail-image{padding:60px 22px;text-align:center}.detail-image img{max-width:min(700px,100%);max-height:500px;object-fit:contain}.detail-items{width:min(1120px,calc(100% - 44px));margin:auto;padding:55px 0 90px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.detail-items article{padding:0 0 22px;background:#fff;border:1px solid #e3e8e1}.detail-items img{width:100%;height:210px;object-fit:cover}.detail-items h2,.detail-items p,.detail-items a{margin-left:18px;margin-right:18px}.detail-items h2{font-size:21px}.detail-items article>p:not(.eyebrow){color:#626b63;font-size:14px;line-height:1.7}.detail-items a{color:#294d38;font-weight:700;font-size:13px}@media(max-width:750px){.detail-intro{padding:58px 0}.detail-sections{padding:52px 22px}.detail-items{grid-template-columns:1fr}.detail-items img{height:230px}}
</style>
