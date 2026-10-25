<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ activePage: { type: String, default: '' } })
const emit = defineEmits(['navigate'])
const router = useRouter()
const menuOpen = ref(false)
const scrolled = ref(false)

function updateScroll() {
  scrolled.value = window.scrollY > 70
}

function navigate(page) {
  menuOpen.value = false
  emit('navigate', page)
  const paths = {
    home: '/', about: '/about-us', history: '/history',
    'about#vision': '/vision-and-mission', 'about#dean': '/dean-message',
    'about#linkages': '/linkages', 'home#news': '/news-and-updates',
    'home#programs': '/#programs', faculty: '/faculty-and-staff',
    calendar: '/event-calendar', 'home#contact': '/contact-us',
  }
  router.push(paths[page] || '/')
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', updateScroll))
</script>

<template>
  <header class="page-site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="page-header-inner">
      <button class="page-brand" type="button" aria-label="Home" @click="navigate('home')">
        <span class="page-brand-name">CCS<br />CPU</span>
      </button>
      <button
        class="page-menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <nav class="page-nav" :class="{ open: menuOpen }" aria-label="Main navigation">
        <button :class="{ active: activePage === 'home' }" @click="navigate('home')">Home</button>
        <div class="page-nav-group">
          <button :class="{ active: activePage === 'about' || activePage === 'history' }" @click="navigate('about')">
            About Us <i></i>
          </button>
          <div class="page-dropdown">
            <button @click="navigate('history')">History</button>
            <button @click="navigate('about#vision')">Vision and Mission</button>
            <button @click="navigate('about#dean')">Message of the Dean</button>
            <button @click="navigate('about#linkages')">Linkages</button>
            <button @click="navigate('home#news')">News and Updates</button>
          </div>
        </div>
        <div class="page-nav-group">
          <button @click="navigate('home#programs')">Academic Programs <i></i></button>
          <div class="page-dropdown">
            <button @click="navigate('home#programs')">Computer Science</button>
            <button @click="navigate('home#programs')">Information Technology</button>
            <button @click="navigate('home#programs')">Information Systems</button>
            <button @click="navigate('home#programs')">Digital Media and Interactive Arts</button>
            <button @click="navigate('home#programs')">Library Information Science</button>
          </div>
        </div>
        <button :class="{ active: activePage === 'faculty' }" @click="navigate('faculty')">Faculty and Staff</button>
        <button :class="{ active: activePage === 'calendar' }" @click="navigate('calendar')">Event Calendar</button>
        <button @click="navigate('home#contact')">Contact Us</button>
      </nav>
    </div>
  </header>
</template>

<style>
.page-site-header { position:absolute; z-index:50; inset:0 0 auto; height:124px; color:#fff; transition:background .2s,color .2s,box-shadow .2s; }
.page-site-header.is-scrolled { position:fixed; background:#fff; color:#333; box-shadow:0 5px 22px #0000000b; }
.page-header-inner { width:min(1860px,calc(100% - 9.2%)); height:100%; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:30px; }
.page-brand { position:relative; display:grid; place-items:center; flex:none; width:118px; height:100px; padding:0; border:0; background:transparent; cursor:pointer; }
.page-brand-name { font:700 25px/1 Arial,sans-serif; letter-spacing:.08em; color:inherit; text-align:center; }
.page-brand img { position:absolute; inset:0; width:100%; height:100%; object-fit:contain; }
.page-nav { display:flex; align-items:center; justify-content:flex-end; gap:clamp(20px,2.1vw,44px); height:100%; }
.page-nav button { padding:0; border:0; color:inherit; background:transparent; font:600 clamp(15px,1.13vw,23px) Roboto,Arial,sans-serif; white-space:nowrap; cursor:pointer; }
.page-nav > button,.page-nav-group > button { height:100%; }
.page-nav button:hover,.page-nav button.active { color:#ffa622; }
.page-nav-group { position:relative; height:100%; }
.page-nav-group > button { display:flex; align-items:center; gap:8px; }
.page-nav-group i { width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid currentColor; }
.page-dropdown { display:none; position:absolute; top:95px; left:-18px; min-width:230px; padding:7px 0; background:#fff; color:#303836; box-shadow:0 8px 22px #0002; }
.page-dropdown button { display:block; width:100%; padding:12px 18px; color:#303836; font-size:15px; font-weight:500; text-align:left; }
.page-dropdown button:hover { color:#e99a10; background:#f6f6f6; }
.page-nav-group:hover .page-dropdown,.page-nav-group:focus-within .page-dropdown { display:block; }
.page-menu-toggle { display:none; }
@media(max-width:1200px) {
  .page-header-inner { width:calc(100% - 52px); }
  .page-nav { gap:17px; }
  .page-nav button { font-size:15px; }
  .page-brand { width:88px; height:82px; }
}
@media(max-width:850px) {
  .page-site-header,.page-site-header.is-scrolled { height:84px; }
  .page-header-inner { width:calc(100% - 36px); gap:12px; }
  .page-brand { width:70px; height:70px; }
  .page-menu-toggle { display:flex; width:42px;height:42px;margin-left:auto;padding:9px;flex-direction:column;justify-content:space-around;border:0;background:transparent;color:inherit; }
  .page-menu-toggle span { display:block;width:24px;height:2px;background:currentColor; }
  .page-nav { display:none; position:absolute; top:84px; left:0; right:0; height:auto; padding:8px 22px 20px; flex-direction:column; align-items:stretch; gap:0; background:#fff; color:#333; box-shadow:0 10px 20px #0002; }
  .page-nav.open { display:flex; }
  .page-nav > button,.page-nav-group > button { width:100%; height:auto; padding:12px 0; font-size:15px; text-align:left; }
  .page-nav-group { height:auto; }
  .page-nav-group > button { justify-content:space-between; }
  .page-dropdown { display:block; position:static; min-width:0; padding:0 0 5px 14px; box-shadow:none; }
  .page-dropdown button { padding:9px 12px; }
}
</style>
