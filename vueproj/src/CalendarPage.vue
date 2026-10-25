<script setup>
import { computed, ref } from 'vue'
import PageBanner from './PageBanner.vue'

defineEmits(['navigate'])

const visibleMonth = ref(new Date(2026, 9, 1))
const activeView = ref('Month')
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date(2026, 9, 22)

const monthLabel = computed(() => visibleMonth.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
const weeks = computed(() => {
  const year = visibleMonth.value.getFullYear()
  const month = visibleMonth.value.getMonth()
  const startDay = new Date(year, month, 1).getDay()
  const count = new Date(year, month + 1, 0).getDate()
  const cells = [...Array(startDay).fill(null), ...Array.from({ length: count }, (_, i) => i + 1)]
  while (cells.length % 7) cells.push(null)
  return Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7))
})

function moveMonth(amount) {
  visibleMonth.value = new Date(visibleMonth.value.getFullYear(), visibleMonth.value.getMonth() + amount, 1)
}

function goToday() {
  visibleMonth.value = new Date(today.getFullYear(), today.getMonth(), 1)
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="calendar-page">
    <PageBanner kicker="Be Updated With Every college Events" title="Upcoming College Events" active-page="calendar" @navigate="$emit('navigate', $event)" />
    <section class="calendar-content">
      <h2>Event Calendar</h2>
      <div class="calendar-toolbar">
        <div class="calendar-move">
          <button aria-label="Previous month" @click="moveMonth(-1)">‹</button>
          <button aria-label="Next month" @click="moveMonth(1)">›</button>
          <button class="today-button" @click="goToday">Today</button>
        </div>
        <h3>{{ monthLabel }}</h3>
        <div class="calendar-views" aria-label="Calendar view">
          <button v-for="view in ['Day', 'Week', 'Month', 'List']" :key="view" :class="{ selected: activeView === view }" @click="activeView = view">
            <span class="view-icon" aria-hidden="true">{{ view === 'Day' ? '☰' : view === 'Week' ? '☷' : view === 'Month' ? '▦' : '▤' }}</span>{{ view }}
          </button>
        </div>
      </div>

      <div v-if="activeView === 'Month'" class="calendar-grid" role="grid" :aria-label="monthLabel">
        <div v-for="day in weekdays" :key="day" class="weekday" role="columnheader">{{ day }}</div>
        <template v-for="(week, weekIndex) in weeks" :key="weekIndex">
          <div v-for="(day, dayIndex) in week" :key="`${weekIndex}-${dayIndex}`" class="calendar-cell" role="gridcell">
            <span v-if="day" :class="{ 'is-today': day === today.getDate() && visibleMonth.getMonth() === today.getMonth() && visibleMonth.getFullYear() === today.getFullYear() }">{{ day }}</span>
          </div>
        </template>
      </div>
      <div v-else class="calendar-empty">No events to display.</div>
      <p class="event-details">Event Details</p>
    </section>
    <button class="back-to-top" type="button" aria-label="Back to top" @click="scrollToTop">⌃</button>
  </main>
</template>

<style scoped>
.calendar-page { min-height:100vh; color:#333; background:#fff; font-family:Roboto,Arial,sans-serif; }
.calendar-content { width:min(1520px,calc(100% - 80px)); margin:0 auto; padding:168px 0 95px; }
.calendar-content > h2 { margin:0 0 54px; color:#ffa622; font-size:28px; font-weight:500; }
.calendar-toolbar { min-height:59px; display:grid; grid-template-columns:1fr 1fr 1fr; align-items:center; gap:15px; margin-bottom:17px; }
.calendar-toolbar h3 { margin:0; color:#111; font-size:28px; text-align:center; }
.calendar-move,.calendar-views { display:flex; align-items:center; gap:7px; }
.calendar-views { justify-content:flex-end; }
.calendar-move button,.calendar-views button { min-width:50px; height:48px; padding:0 15px; border:0; border-radius:4px; background:#f7f7fa; color:#555; font-size:16px; cursor:pointer; }
.calendar-move button { font-size:25px; }
.calendar-move .today-button { min-width:77px; margin-left:7px; font-size:15px; }
.calendar-views button { display:flex; align-items:center; gap:8px; font-family:Georgia,serif; }
.calendar-views button.selected { color:#173d3b; background:#ffa622; }
.view-icon { color:#666; font-family:Arial,sans-serif; font-size:18px; font-weight:700; }
.calendar-views button.selected .view-icon { color:#173d3b; }
.calendar-grid { display:grid; grid-template-columns:repeat(7,minmax(0,1fr)); border-top:1px solid #d0d1d8; border-left:1px solid #d0d1d8; }
.weekday { min-height:73px; display:grid; place-items:center; border-right:1px solid #d0d1d8; border-bottom:1px solid #d0d1d8; color:#555; font:700 21px Georgia,serif; }
.calendar-cell { min-height:138px; padding:9px 10px; border-right:1px solid #d0d1d8; border-bottom:1px solid #d0d1d8; background:#fff; }
.calendar-cell span { display:block; margin:-9px -10px 0; padding:7px 10px 9px; border-bottom:1px solid #e7e7e7; color:#444; font:16px Georgia,serif; text-align:center; }
.calendar-cell span.is-today { color:#ffa622; font-weight:700; }
.calendar-empty { min-height:380px; display:grid; place-items:center; border:1px solid #d0d1d8; color:#999; }
.event-details { margin:48px 0 0; color:#666; font-size:16px; }
.back-to-top { position:fixed; z-index:30; right:27px; bottom:25px; width:55px;height:55px;border:1px solid #e8e8e8;border-radius:50%;background:white;box-shadow:0 3px 12px #0002;color:#111;font-size:30px;line-height:1;cursor:pointer; }
@media(max-width:850px) {
  .calendar-content { width:calc(100% - 36px); padding:105px 0 70px; }
  .calendar-content > h2 { margin-bottom:28px; font-size:24px; }
  .calendar-toolbar { grid-template-columns:1fr auto; row-gap:10px; }
  .calendar-toolbar h3 { grid-row:1; grid-column:1 / -1; font-size:23px; }
  .calendar-views { grid-column:1 / -1; justify-content:flex-start; }
  .calendar-views button { min-width:0; height:40px; padding:0 10px; font-size:14px; }
  .calendar-cell { min-height:75px; padding:6px; }
  .calendar-cell span { margin:-6px -6px 0; padding:5px; font-size:14px; }
  .weekday { min-height:45px; font-size:15px; }
  .back-to-top { right:16px;bottom:16px;width:48px;height:48px; }
}
@media(max-width:480px) {
  .calendar-content { width:calc(100% - 22px); }
  .calendar-move button { min-width:38px; height:40px; padding:0 9px; }
  .calendar-move .today-button { min-width:61px; }
  .calendar-cell { min-height:56px; padding:3px; }
  .calendar-cell span { margin:-3px -3px 0; padding:4px 1px; font-size:12px; }
  .weekday { min-height:38px; font-size:13px; }
}
</style>
