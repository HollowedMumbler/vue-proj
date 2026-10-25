<script setup>
import AboutDetail from './AboutDetail.vue'

const items = [
  {
    title: 'Community Engagement MOA Signing Ceremony',
    meta: 'December 8, 2021 · College Updates',
    text: 'CCS and Mandurriao Elementary School formalized a partnership through a Memorandum of Agreement.',
    hoverText:
      'The partnership began with a virtual Adopt a School session. CCS faculty introduced Mandurriao Elementary School faculty to Canvas, Google Classroom, and Facebook Groups.',
    image: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/12/12072021-Outreach-MOA-300x225.jpg',
    alt: 'CCS and Mandurriao Elementary School representatives at the MOA signing',
    href: 'https://ccs.cpu.edu.ph/2021/12/08/community-engagement-moa-signing-ceremony/',
    kind: 'news',
  },
  {
    title: 'Congratulations to our New Librarians!',
    meta: 'November 23, 2021 · College Updates',
    text: 'The CCS community celebrated its new librarians after the September 2021 licensure examination.',
    hoverText:
      'CPU first-time takers recorded a 60% passing rate, compared with the 47.7% national rate. The reported overall passing rate for first-time takers and retakers was 50%.',
    image: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-New-Librarians-300x300.jpg',
    alt: 'Congratulations graphic for the new librarians',
    href: 'https://ccs.cpu.edu.ph/2021/11/23/congratulations-to-our-new-librarians/',
    kind: 'news',
  },
  {
    title: 'Kation Technologies hires CCS graduates',
    meta: 'November 23, 2021 · College Updates',
    text: 'Kation Technologies Inc., a Microsoft Gold Partner company in the Philippines, hired CCS graduates.',
    hoverText:
      'The CCS update recognized graduates hired by Kation Technologies, a Microsoft Gold Partner company in the Philippines.',
    image: 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-Kation-300x225.jpg',
    alt: 'CCS graduates featured in the Kation Technologies update',
    href: 'https://ccs.cpu.edu.ph/2021/11/23/kation-technologies-hires-ccs-graduates/',
    kind: 'news',
  },
]
</script>

<template>
  <AboutDetail
    title="News and Updates"
    intro="Updates and stories from the College of Computer Studies community. Hover over a story to preview more details."
    :items="items"
  />
</template>
