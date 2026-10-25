<script setup>
import ProgramReferencePage from './ProgramReferencePage.vue'

const program = {
  title: 'Bachelor of Library and Information Science (BLIS)',
  curriculumStandard: 'CHED policies and standards for Library and Information Science, within the outcomes-based education framework',
  objectives: [
    'Select, evaluate, organize, and share information resources in print, multimedia, electronic, and digital formats.',
    'Respond to changing information needs through effective library and information services.',
    'Use library technologies and research methods to improve access to information and support learning.',
    'Practice professional, ethical service and continue developing information science skills.',
  ],
  programOutcomes: [
    'Select, evaluate, organize, and disseminate information resources in a range of formats.',
    'Identify user needs and assess the effectiveness of information services.',
    'Use library automation systems and related technologies to support library operations.',
    'Conduct research, communicate effectively, and participate in continuing professional education.',
  ],
  faculty: [
    { name: 'Ana Mae B. Cantel, MLIS', role: 'Program Coordinator (BLIS and MLIS)', image: 'ana-cantel.jpg' },
  ],
  summary: 'The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats.',
  primaryLabel: 'Curriculum',
  primaryHref: '#curriculum-description',
  logo: '/images/academic-programs/library-information-science/lisso.png',
  organizationName: 'Library and Information Science Students Organization (LISSO)',
  rationale: [
    'Based on the Guidelines for the Implementation of CMO 46 s. 2012, this PSG implements the “shift to learning competency-based standards/outcomes-based education”. It specifies the core competencies expected of Bachelor of Library and Information Science (BLIS) graduates regardless of the type of higher education institution they graduate from.',
    'In recognition of outcomes-based education, which puts a premium on the achievement of learning outcomes through different strategies, and the typology of higher education institutions, this PSG also provides space for institutions to innovate in the curriculum in line with their contexts and missions.',
    'Policies and standards in the Library and Information Science program are necessary for high-quality education and training of library and information science professionals. They institutionalize the profession’s central function of providing quality information service to library and information center users.',
    'The program responds to society’s changing information needs brought about by rapid technological changes and to the need to make information professionals globally competitive.',
  ],
  curriculumParagraphs: [
    'The LIS curriculum is designed to equip professionals with the composite knowledge, skills, attitudes, and tools to respond to the changing information needs of society.',
  ],
  organizationText: [
    'The College of Computer Studies identifies the Library and Information Science Students Organization (LISSO) with the BLIS program. The public program page does not provide a separate organization mission statement.',
  ],
  degreeTitle: 'Bachelor of Library and Information Science (BLIS)',
  graduateOutcomes: [
    ['LIS01', 'Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources.'],
    ['LIS02', 'Effectively communicate orally and in writing, and use a variety of communication methods in a manner that best enables the message to be understood.'],
    ['LIS03', 'Demonstrate logical and systematic approaches to the accomplishment of tasks.'],
    ['LIS04', 'Formulate objectives, policies and processes as well as design and manage resources in anticipation of future educational or organizational changes.'],
    ['LIS05', 'Recognize, analyze and constructively solve problems, provide appropriate direction and assistance, and overcome barriers when necessary.'],
    ['LIS06', 'Identify users’ needs and wants through reference interviews, customer surveys, complaint logs and other means to evaluate the effectiveness of current services and improve these and other practices.'],
    ['LIS07', 'Work well in groups and seek ways to build team efforts to solve problems and achieve common goals.'],
    ['LIS08', 'Understand library automation systems and the use of computer hardware, software and peripherals, including online collaboration tools such as the internet, the worldwide web, and social networking sites.'],
    ['LIS09', 'Develop information technology solutions such as library automation systems, websites, and email systems.'],
    ['LIS10', 'Conduct significant research projects that will benefit the library and the organization.'],
    ['LIS11', 'Evaluate and debate information policy, such as copyright law, plagiarism and cybercrimes, and ethical issues applicable in local, national or global contexts.'],
    ['LIS12', 'Participate in continuing education activities organized by library associations and other entities.'],
  ],
  quote: 'The program trains students to apply information technology to basic library operations and functions.',
}
</script>

<template><ProgramReferencePage :program="program" /></template>
