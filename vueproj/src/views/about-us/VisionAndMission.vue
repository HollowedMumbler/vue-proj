<script setup>
import AboutDetail from './AboutDetail.vue'
const sections=[
{heading:'Vision',paragraphs:['The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.']},
{heading:'Mission',paragraphs:['A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.']},
{heading:'Quality Policy',paragraphs:['To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.','We maintain a quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.']}]
</script>
<template><AboutDetail title="Vision and Mission" intro="The College’s vision, mission, and quality policy guide its computer studies programs and services." :sections="sections" image="/ccs-home/ccs-emblem.png" image-alt="College of Computer Studies emblem" /></template>
