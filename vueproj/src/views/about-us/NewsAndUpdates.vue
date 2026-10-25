<script setup>
import AboutDetail from './AboutDetail.vue'
const items=[
{title:'Community Engagement MOA Signing Ceremony',meta:'December 8, 2021',text:'Memorandum of Agreement signing between Central Philippine University (CPU) College of Computer Studies and Mandurriao Elementary School.',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/12/12072021-Outreach-MOA-300x225.jpg',alt:'Community engagement MOA signing ceremony',href:'https://ccs.cpu.edu.ph/2021/12/08/community-engagement-moa-signing-ceremony/'},
{title:'Congratulations to our New Librarians!',meta:'November 23, 2021',text:'CCS celebrates its community members who passed the librarian licensure examination.',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-New-Librarians-300x300.jpg',alt:'New librarians',href:'https://ccs.cpu.edu.ph/2021/11/23/congratulations-to-our-new-librarians/'},
{title:'Kation Technologies hires CCS graduates',meta:'November 23, 2021',text:'Kation Technologies Inc., a Microsoft Gold Partner company, hired CCS graduates.',image:'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-Kation-300x225.jpg',alt:'CCS graduates hired by Kation Technologies',href:'https://ccs.cpu.edu.ph/2021/11/23/kation-technologies-hires-ccs-graduates/'}]
</script>
<template><AboutDetail title="News and Updates" intro="Be updated with the College and student events." :items="items" /></template>
