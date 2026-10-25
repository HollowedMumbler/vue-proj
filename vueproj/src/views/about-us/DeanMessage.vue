<script setup>
import AboutDetail from './AboutDetail.vue'
const sections=[{heading:'A welcome from the Dean',paragraphs:['In every school year for the College of Computer Studies, we look forward with great anticipation to the contributions the new class will make to campus life. In both the aspect of academic and non academic, each students is unique enough to achieve whatever they want to reach for in our college.','Ma. Christina A. Quijano, MSCS · Dean']}]
</script>
<template><AboutDetail title="Message of the Dean" intro="Welcome to the College of Computer Studies." :sections="sections" image="/ccs-home/faculty/dean.png" image-alt="Ma. Christina A. Quijano, MSCS, Dean" /></template>
