<script setup>
import AboutDetail from './AboutDetail.vue'
const items=[
{title:'Oracle Academy',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/Oracle_Academy_rgb.png',alt:'Oracle Academy'},
{title:'Cisco Networking Academy',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/1024px-Cisco_academy_logo.svg_-300x300.png',alt:'Cisco Networking Academy'},
{title:'Acer',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/acer-300x300.jpg',alt:'Acer'},
{title:'Huawei ICT Academy',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/huawei-academy-logo-300x300.jpg',alt:'Huawei ICT Academy'}]
</script>
<template><AboutDetail title="Linkages" intro="CCS presents its partner organizations and memberships as connections supporting technology for education." :items="items" /></template>
