<script setup>
import ProgramReferencePage from './ProgramReferencePage.vue'

const program = {
  title: 'Digital Media and Interactive Arts',
  summary: 'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
  primaryLabel: 'Curriculum',
  primaryHref: '#curriculum-description',
  logo: '/images/academic-programs/digital-media-and-interactive-arts/midas.png',
  organizationName: 'Modern Interactive Digital Artists Society (MIDAS)',
  rationale: [
    'The Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) program is offered based on CMO 19 s 2016 article III section 11, which states that an autonomous institution has the privilege to offer new courses or programs in the undergraduate and graduate levels. Technology has also affected the field of arts and related careers. Careers in information technology education have expanded into the area of art.',
    'This has long been integrated in information technology education programs, when multimedia was considered one of its free elective courses.',
    'As defined by the animation career review site, the interactive arts and media discipline combines the elements of arts, design and technology. Artists in the field typically have advanced skills in visual design, digital storytelling, time-based media, and shaping interactive experiences. These skills are applied in animation, mobile communications, and video games.',
    'In the program, students are introduced to industry-standard tools and applications in video editing, animation, 3D modeling, photography, graphic design, video game design and virtual reality.',
    'Graduates can pursue careers in advertising agencies, game design companies, pre- and post-production houses, graphic design firms, art studios, mobile communication companies, magazines, publishers, and web design companies. Career paths include animator, graphic designer, game designer, web designer, multimedia artist, advertising executive, art director, digital artist, and freelance artist.',
  ],
  curriculumParagraphs: [
    'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies. It is designed to develop creative talents for a variety of applied arts industries, including entertainment, education, advertising and commercials, films and corporate communications.',
    'The structure of the course enables students from different disciplines to collaborate and work together to produce artworks that meet industry standards. Students undergo training and education to enhance their skills with a talent-centric curriculum for the high-end digital media industry.',
  ],
  organizationText: [
    'The Modern Interactive Digital Artists Society mission is to help BSDMIA students develop a sense of artistic self-identity and to support and conduct exhibits and outreach activities to increase public awareness of technology and its impact on society. It is the official organization of the Bachelor of Science in Digital Media and Interactive Arts, representing all students enrolled in the course under the College of Computer Studies.',
  ],
  degreeTitle: 'Bachelor of Science in Digital Media and Interactive Arts',
  graduateOutcomes: [
    ['DMIA01', 'Apply knowledge of mathematics, digital media arts exhibit and management, and digital media creation, delivery and consumption appropriate to the field of practice in compliance with established standards and best practices.'],
    ['DMIA02', 'Identify user requirements leading to design selection, digital media art creation, evaluation and delivery of digital media- and interactive arts-based solutions.'],
    ['DMIA03', 'Design, merge and bridge traditional arts with digital media.'],
    ['DMIA04', 'Deliver and implement creations, and evaluate digital media consumption in entertainment and corporate environments effectively.'],
    ['DMIA05', 'Demonstrate the use of current techniques, skills, tools and practices.'],
    ['DMIA06', 'Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.'],
    ['DMIA07', 'Recognize professional, ethical, legal, security, and social issues and responsibility.'],
    ['DMIA08', 'Socially communicate effectively with a diverse audience.'],
    ['DMIA09', 'Identify contemporary practices and issues.'],
    ['DMIA10', 'Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.'],
  ],
  quote: 'An academic program for an era of rapidly changing technology.',
}
</script>

<template><ProgramReferencePage :program="program" /></template>
