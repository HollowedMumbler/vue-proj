<script setup>
import ProgramReferencePage from './ProgramReferencePage.vue'

const program = {
  title: 'Information Systems',
  summary: 'The Bachelor of Science in Information System integrates strong business background with advanced training in applying information technology to business processes.',
  primaryLabel: 'Objectives',
  primaryHref: '#objectives',
  logo: '/images/academic-programs/information-systems/information-systems-society.png',
  organizationName: 'Information Systems Analysts Club (ISAC)',
  hasSharedOutcomes: true,
  rationale: [
    'The computing field has grown enormously and is described as dynamic. It encompasses computer engineering, software engineering, computer science, information systems, and information technology. Based on the guidelines for the implementation of CMO 46 s 2012 which implements the shift to learning competency-based standards/outcomes-based education, the Commission released CMO 25 s 2015 last August 2015 that integrates outcomes-based education.',
    'It specifies the “core competencies” expected of graduates of Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS) and Bachelor of Science in Information Technology (BSIT). The Commission recognizes the need to be responsive to the current needs of the country and in order to face the challenges of advancement. It is essential and important that the country’s computing capability be continually developed and strengthened.',
    'In this PSG, it clearly defines the area of focus for each field, common outcomes for each discipline and new GE for the K-12 program. In the PSG, it defines the BSIS program as the study of application and effect of information technology to organizations. Graduates of the program should be able to implement an information system, which considers complex technological and organizational factors affecting it. These include components, tools, techniques, strategies, methodologies, and more.',
    'The program prepares graduates to help an organization determine how information and technology-enabled business processes can be used as strategic tools to achieve a competitive advantage. IS professionals require a sound understanding of organizational principles and practices so they can serve as an effective bridge between technical and management or user communities. This enables them to ensure that the organization has the information and systems it needs to support its operations. In general, IS education prepares students to work on the relationship between information systems and organizations.',
  ],
  curriculumItems: [
    { text: 'The BSIS curriculum encompasses introductory and professional courses to cover the various information systems functional areas.' },
    { text: 'In addition, the curriculum shall include business enterprise domain courses.' },
    { text: 'Defines seven (7) functional areas:', children: ['Fundamentals of IS', 'Professional issues in information systems', 'IT infrastructure and network technologies', 'Systems analysis, design and development', 'Enterprise architectures', 'IS project management', 'IS strategy, management and acquisition'] },
  ],
  organizationText: [
    'The Information System Analysts Club (ISAC) is the new duly recognized student organization of the BSIS and BSIM students. Founded the first semester of school year 2009-2010, the last remnants of the now defunct SISM (Society of Information Scientists and Managers, the former student organization of BISM students) decided to change the latter to ISAC, since BISM, the course under SISM has since been remodeled to the current course, BSIS or Bachelor of Science in Information Systems.',
    'The first president of the newly christened organization is John Louie Juarez. ISAC is organized exclusively for charitable, scientific and education purposes, being active in University and Community sanctioned events, as well as assisting its parent; the College of Computer Studies.',
  ],
  degreeTitle: 'Bachelor of Science in Information Systems (BSIS)',
  graduateOutcomes: [
    ['IS01', 'Apply knowledge of business processes, computing, mathematics and social sciences appropriate to Information Systems.'],
    ['IS02', 'Analyze a problem, identify and define the computing requirements with respect to organizational factors appropriate to its solution and plan strategies for their solution.'],
    ['IS03', 'Evaluate information systems in terms of general quality attributes and possible trade-offs presented within the given requirement.'],
    ['IS04', 'Design, implement, and evaluate information systems, processes, components, or programs and source cost-benefit efficient alternatives to meet desired needs, goals and constraints.'],
    ['IS05', 'Use knowledge and understanding of enterprises in modelling and design of information systems.'],
    ['IS06', 'Deploy and use effectively skills, tools and techniques necessary for information systems practice.'],
    ['IS07', 'Function effectively on teams, recognizing the different roles within a team and different ways of organizing teams, to accomplish a common goal.'],
    ['IS08', 'Communicate effectively with a range of audiences. Communication skills include technical writing, presentation and negotiation, and numeracy.'],
    ['IS09', 'Recognize the legal, social, ethical and professional issues involved in the exploitation of computer technology and be guided by the adoption of appropriate professional, ethical and legal practices both in the local and global community.'],
    ['IS10', 'Recognize the need for and engage in independent and lifelong learning, planning self-learning and improving performance as the foundation for ongoing professional development.'],
  ],
  quote: 'An academic program that involves the development of hands-on skills where students must actually use information technology in designing business solution.',
}
</script>

<template><ProgramReferencePage :program="program" /></template>
