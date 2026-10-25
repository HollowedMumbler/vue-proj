<script setup>
import PageHeader from './PageHeader.vue'

defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  activePage: { type: String, required: true },
})
defineEmits(['navigate'])
</script>

<template>
  <section class="page-banner">
    <PageHeader :active-page="activePage" @navigate="$emit('navigate', $event)" />
    <div class="page-banner-title">
      <p>{{ kicker }}</p>
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped>
.page-banner { position:relative; min-height:410px; overflow:visible; color:#fff; background:#173f3b; }
.page-banner-title { padding:215px 22px 70px; text-align:center; }
.page-banner-title p { margin:0 0 20px; color:#b6c1bf; font-size:16px; }
.page-banner-title h1 { margin:0; color:#ffa622; font-family:'Roboto Slab',Georgia,serif; font-size:clamp(42px,3vw,58px); font-weight:700; line-height:1.2; }
@media(max-width:850px) { .page-banner { min-height:350px; } .page-banner-title { padding-top:176px; } .page-banner-title p { font-size:14px; } .page-banner-title h1 { font-size:38px; } }
</style>
