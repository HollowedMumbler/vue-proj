<script setup>
import PageHeader from '../../PageHeader.vue'
import ProgramCampusLife from './ProgramCampusLife.vue'

const objectives = [
  'Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.',
  'Exhibit high standard of professionalism who are effective members of multi-discipline development teams.',
  'Be involved in scholarly activities, research and outreach that contribute to the improvement and transformation of society.',
  'Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.',
  'Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.',
]

const programOutcomes = [
  'articulate and discuss the latest developments in the specific field of practice. (Philippine Qualifications Framework (PQF) level 6 descriptor) (Graduate Outcomes: CS 10, IS 10, IT13).',
  'effectively communicate orally and in writing using both English and Filipino (Graduate Outcomes: CS08, IS08, IT10).',
  'work effectively and independently in multi-disciplinary and multi-cultural teams. (PQF level 6 descriptor) (Graduate Outcomes: CS07, IS07, IT08).',
  'act in recognition of professional, social and ethical responsibility (Graduate Outcomes: CS09, IS09, IT12).',
  'preserve and promote “Filipino historical and cultural heritage” (based on RA 7722).',
]

const commonOutcomes = [
  'analyze complex problems, and identify and define the computing requirements needed to design an appropriate solution (Graduate Outcomes: CS02, IS02-03, IT03).',
  'apply computing and other knowledge domains to address real-world problems (Graduate Outcomes: CS01, IS01, IT01).',
  'design and develop computing solutions using a system-level perspective (Graduate Outcomes: CS03-05, IS04-05, IT05).',
  'utilize modern computing tools (Graduate Outcomes: CS06, IS06, IT07).',
]

const graduateOutcomes = [
  ['CS01', 'Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.'],
  ['CS02', 'Identify, analyze, formulate, research literature, and solve complex computing problems and requirements reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.'],
  ['CS03', 'An ability to apply mathematical foundations, algorithmic principles and computer science theory in the modeling and design of computer-based systems in a way that demonstrates comprehension of the tradeoffs involved in decision choices.'],
  ['CS04', 'Knowledge and understanding of information security issues in relation to the design, development and use of information systems.'],
  ['CS05', 'Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.'],
  ['CS06', 'Create, select, adapt and apply appropriate techniques, resources and modern computing tools to complex computing activities, with an understanding of the limitations to accomplish a common goal.'],
  ['CS07', 'Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.'],
  ['CS08', 'Communicate effectively with the computing community and with society at large about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.'],
  ['CS09', 'An ability to recognize the legal, social, ethical and professional issues involved in the utilization of computer technology and be guided by the adoption of appropriate professional, ethical and legal practices.'],
  ['CS10', 'Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional.'],
]

const knowledgeAreas = [
  'Algorithms and Complexity',
  'Architecture and Organization',
  'Discrete Structures',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Networks and Communications',
  'Operating Systems',
  'Programming Languages (Design and Implementation)',
  'Software Development Fundamentals',
  'Software Engineering',
  'Social Issues and Professional Practice',
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="cs-program">
    <section class="cs-hero">
      <PageHeader active-page="programs" />
      <div class="cs-hero-inner">
        <div class="cs-hero-copy">
          <h1>Computer Science</h1>
          <p>The Computer Science (CS) Program is designed for students who wants to study computing in depth.</p>
          <div class="cs-hero-actions">
            <a class="objectives-button" href="#objectives"><span aria-hidden="true">☰</span>Objectives</a>
            <a class="campus-button" href="#campus-life"><span aria-hidden="true">♣</span>Campus Life</a>
          </div>
        </div>
        <img class="society-logo hero-society-logo" src="/images/academic-programs/computer-science/computer-science-society.png" alt="Computer Science Society" />
      </div>
    </section>

    <section id="objectives" class="cs-section objectives-section">
      <p class="section-kicker"><span class="section-index">01</span> Program Design</p>
      <h2>Program Educational Objectives</h2>
      <p class="section-subtext">These objectives describe the professional qualities and contributions the Computer Science program aims to develop.</p>
      <ol class="objectives-list">
        <li v-for="objective in objectives" :key="objective">{{ objective }}</li>
      </ol>
      <ul class="section-links" aria-label="Computer Science page sections">
        <li><a href="#program-outcomes">Program Outcomes</a></li>
        <li><a href="#curriculum-rationale">Curriculum Rationale</a></li>
        <li><a href="#curriculum-description">Curriculum Description</a></li>
        <li><a href="#campus-life">Student Organization</a></li>
        <li><a href="#graduate-outcomes">Graduate Outcomes</a></li>
      </ul>
    </section>

    <section id="program-outcomes" class="cs-section program-outcomes-section">
      <p class="section-kicker"><span class="section-index">02</span> Graduate Preparation</p>
      <h2>Program Outcomes</h2>
      <p class="section-subtext">These outcomes turn the program’s learning goals into practical knowledge, skills, and professional abilities.</p>
      <div class="outcome-copy">
        <h3>Professional and General Outcomes</h3>
        <p class="subsection-subtext">Graduates are prepared to communicate, collaborate, act responsibly, and contribute to their communities.</p>
        <ol class="lettered-list">
          <li v-for="outcome in programOutcomes" :key="outcome">{{ outcome }}</li>
        </ol>
        <h3>Applied Computing Outcomes</h3>
        <p class="subsection-subtext">These shared outcomes connect computing knowledge with real-world problems and solutions.</p>
        <ol class="lettered-list">
          <li v-for="outcome in commonOutcomes" :key="outcome">{{ outcome }}</li>
        </ol>
      </div>
    </section>

    <section id="curriculum-rationale" class="cs-section rationale-section">
      <p class="section-kicker"><span class="section-index">03</span> Curriculum Foundations</p>
      <h2 class="ched-heading">Curriculum Rationale</h2>
      <p class="section-subtext rationale-subtext">Based on CHED Memo Order No. 25, s. 2015 · Effective Academic Year 2018–2019</p>
      <div class="rationale-copy">
        <p>The computing field has grown enormously and is described as dynamic. It encompasses computer engineering, software engineering, computer science, information systems, and information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012 which implements the shift to learning competency-based standards/outcomes-based education, the Commission released CMO 25 s 2015 last August 2015 that integrates outcomes-based education. It specifies the “core competencies” expected of graduates of Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS) and Bachelor of Science in Information Technology (BSIT). The Commission recognizes the need to be responsive to the current needs of the country and to face the challenges of advancement. It is essential and important that the country’s computing capability be continually developed and strengthened. In this PSG it clearly defines the area of focus for each field, common outcomes for each discipline and new GE for the K-12 program. The PSG defines the BSCS program as the study of computing concepts and theories, algorithmic foundations and new developments in computing. The program prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving computing problems.</p>
      </div>
    </section>

    <section id="curriculum-description" class="cs-section curriculum-section">
      <p class="section-kicker"><span class="section-index">04</span> What You Will Study</p>
      <h2>Curriculum Description:</h2>
      <p class="section-subtext">The curriculum brings together core computer science foundations, professional practice, and current areas of computing.</p>
      <div class="curriculum-panel">
        <ul class="curriculum-list">
          <li>The BSCS curriculum includes foundation and professional courses that cover theory, algorithms, software design and development, and new developments in computing.</li>
          <li>The curriculum should include courses to cover Knowledge Areas recommended in ACM Computer Science Curricula 2013 (enumerated in PSG).</li>
          <li>Defines eleven (11) Knowledge Areas:
            <ul class="knowledge-list">
              <li v-for="area in knowledgeAreas" :key="area">{{ area }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <ProgramCampusLife
      organization-name="Computer Science Society"
      logo="/images/academic-programs/computer-science/computer-science-society.png"
      logo-alt="Computer Science Society"
      :paragraphs="['The Computer Science Society embraces its Mission to promote the Computer Science Course, to guide and prepare the students, to grow and strengthen the bonds of each member as one family, and to utilize the resources of the program to provide service to society and emphasize to students the need of lifelong learning, ethical conduct and an understanding of the diverse social context in which Computer Science is practiced. We furthermore seek to provide excellence in activities and outreaches to develop the community of all Computer Science Students to help and support its members to reach their goals in the ever advance, 21st century.']"
    />

    <section id="graduate-outcomes" class="cs-section graduate-section">
      <p class="section-kicker"><span class="section-index">06</span> Degree Competencies</p>
      <h2>Bachelor of Science in Computer Science (BSCS)</h2>
      <p class="section-subtext">The outcomes below describe the knowledge and capabilities expected of Computer Science graduates.</p>
      <table class="graduate-table">
        <thead>
          <tr><th scope="col">Graduate Outcomes Code</th><th scope="col">Graduate Outcomes</th></tr>
        </thead>
        <tbody>
          <tr v-for="outcome in graduateOutcomes" :key="outcome[0]">
            <th scope="row">{{ outcome[0] }}</th>
            <td>{{ outcome[1] }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="program-quote">
      <div class="quote-shapes" aria-hidden="true"></div>
      <div class="quote-content">
        <div class="quote-stars" aria-label="Five stars">★★★★★</div>
        <blockquote>“An academic program for<br />designing interfaces like never<br />before.”</blockquote>
      </div>
    </section>

    <button class="back-to-top" type="button" aria-label="Back to top" @click="scrollToTop">⌃</button>
  </main>
</template>

<style scoped>
.cs-program {
  --deep-green: #153f3d;
  --orange: #e99a00;
  min-height: 100vh;
  color: #303330;
  background: #fff;
  font-family: Roboto, Arial, sans-serif;
  scroll-behavior: smooth;
}

.cs-program :deep(.page-brand) { width: 104px; height: 104px; }
.cs-program :deep(.page-brand-name) {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('/images/ccs/Warriors-Logo-2.png') center / contain no-repeat;
  font-size: 0;
}

.cs-hero {
  position: relative;
  min-height: 760px;
  overflow: hidden;
  padding: 185px 7.5% 155px;
  background-color: #153f3d;
  background-image: linear-gradient(180deg, rgba(12, 52, 48, .82) 0%, rgba(15, 57, 52, .57) 48%, rgba(231, 144, 0, .88) 100%), url('/images/academic-programs/computer-science/drone-shot.jpg');
  background-position: center, center 48%;
  background-size: cover;
}

.cs-hero::after {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 300px;
  background: #fff;
  clip-path: polygon(0 24%, 24% 100%, 63% 28%, 73% 0, 100% 26%, 100% 100%, 0 100%);
  content: '';
}

.cs-hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  width: min(1340px, 100%);
  margin: 0 auto;
  grid-template-columns: 1.25fr .75fr;
  align-items: center;
  gap: 60px;
}

.cs-hero-copy { max-width: 740px; color: #fff; }
.cs-hero-copy h1 { margin: 0 0 22px; font-size: clamp(48px, 5vw, 70px); font-weight: 300; letter-spacing: -1.8px; }
.cs-hero-copy > p { max-width: 710px; margin: 0; color: rgba(255,255,255,.75); font-size: 22px; line-height: 1.8; }
.society-logo { display: block; width: 100%; height: auto; object-fit: contain; }
.hero-society-logo { width: min(360px, 100%); justify-self: center; }
.cs-hero-actions { display: flex; flex-wrap: wrap; gap: 28px; margin-top: 54px; }
.cs-hero-actions a { min-width: 235px; min-height: 70px; display: inline-flex; align-items: center; justify-content: center; gap: 18px; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 19px; transition: filter .2s ease, transform .2s ease; }
.cs-hero-actions a:hover { filter: brightness(1.12); transform: translateY(-2px); }
.objectives-button { color: #f3ad34; background: #073e3a; }
.campus-button { color: #fff; background: #0fc52f; }
.cs-hero-actions span { font-size: 25px; }

.cs-section { width: min(1330px, calc(100% - 100px)); margin: 0 auto; scroll-margin-top: 110px; }
.section-kicker { display:flex; align-items:center; justify-content:center; gap:12px; margin:0 0 12px; color:#bd8318; font-size:13px; font-weight:700; letter-spacing:.14em; text-align:center; text-transform:uppercase; }
.section-kicker::before,.section-kicker::after { width:28px; height:1px; background:#e5a32a; content:''; }
.section-index { display:inline-grid; width:32px; height:25px; place-items:center; border:1px solid #e5a32a80; border-radius:14px; color:#8c681d; font-size:10px; letter-spacing:.04em; }
.program-outcomes-section,.rationale-section,.curriculum-section,.graduate-section { position:relative; border-top:1px solid #e6ebe8; }
.program-outcomes-section::before,.rationale-section::before,.curriculum-section::before,.graduate-section::before { position:absolute; top:-1px; left:50%; width:54px; height:2px; background:#e99a00; content:''; transform:translateX(-50%); }
.cs-section h2 { margin: 0 0 16px; color: #123f3b; font-size: 30px; font-weight: 500; text-align: center; text-transform: uppercase; }
.cs-section .section-subtext { max-width:800px; margin:0 auto 46px; color:#687572; font-size:17px; line-height:1.65; text-align:center; }
.objectives-section { position: relative; z-index: 2; padding: 80px 0 34px; }
.objectives-list { max-width: 1280px; margin: 0 auto; padding-left: 34px; font-size: 16px; letter-spacing: .04em; line-height: 1.9; }
.objectives-list li { padding-left: 5px; margin-bottom: 7px; }
.section-links { margin: 36px 0 0; padding-left: 27px; color: #276f9e; font-size: 16px; line-height: 1.75; }
.section-links a { color: #397d9f; text-decoration: none; }
.section-links a:hover { text-decoration: underline; }

.program-outcomes-section { padding: 48px 0 68px; }
.program-outcomes-section h2 { margin-bottom: 16px; }
.outcome-copy { max-width: 1250px; margin: 0 auto; font-size: 17px; line-height: 1.8; letter-spacing: .025em; }
.outcome-copy h3 { margin: 0 0 20px; font-size: 19px; font-weight: 400; }
.outcome-copy h3:not(:first-child) { margin-top: 48px; }
.subsection-subtext { margin:-8px 0 23px; color:#71807c; font-size:15px; line-height:1.65; letter-spacing:0; }
.lettered-list { padding-left: 28px; list-style-type: lower-alpha; }
.lettered-list li { padding-left: 8px; margin: 0 0 14px; }

.rationale-section { padding: 72px 0 45px; }
.cs-section .ched-heading { margin: 0 0 10px; font-size: 29px; line-height: 1.25; }
.cs-section .rationale-subtext { margin-bottom:82px; }
.rationale-copy { max-width: 1040px; margin: 0 auto; }
.rationale-copy h3,.curriculum-section h2 { margin: 0 0 28px; color: #333; font-size: 29px; font-weight: 400; }
.rationale-copy p { margin: 0; font-size: 17px; letter-spacing: .045em; line-height: 1.85; }

.curriculum-section { padding: 45px 0 80px; }
.curriculum-section h2 { margin-bottom: 16px; }
.curriculum-section .section-subtext { margin-bottom:36px; }
.curriculum-panel { max-width:1050px; margin:0 auto; padding:30px 36px; border-left:4px solid #e99a00; border-radius:8px; background:#f5f8f6; }
.curriculum-list { margin: 0 auto; padding-left: 25px; font-size: 17px; letter-spacing: .04em; line-height: 1.8; }
.curriculum-list > li { margin-bottom: 8px; padding-left: 5px; }
.knowledge-list { margin-top: 12px; padding-left: 46px; list-style-type: '–  '; }
.knowledge-list li { padding-left: 6px; }

.society-section { position: relative; min-height: 520px; overflow: hidden; scroll-margin-top: 110px; }
.society-shapes { position: absolute; inset: 0; background: linear-gradient(153deg, transparent 0 28%, #e99a00 28.1% 71%, #153f3d 71.1% 100%); }
.society-shapes::before { position: absolute; inset: 0; background: #e99a00; clip-path: polygon(0 36%, 31% 48%, 64% 22%, 78% 15%, 60% 70%, 33% 100%, 0 79%); content: ''; }
.society-shapes::after { position: absolute; inset: 0; background: #153f3d; clip-path: polygon(68% 25%, 100% 0, 100% 100%, 69% 100%, 52% 78%, 73% 57%); content: ''; }
.society-inner { position: relative; z-index: 1; display: grid; width: min(1350px, calc(100% - 100px)); min-height: 520px; margin: 0 auto; grid-template-columns: .8fr 1.2fr; align-items: center; gap: 80px; }
.society-section-logo { width: min(450px, 100%); }
.society-inner p { margin: 0; color: #fff; font: 500 18px/1.95 Georgia,serif; letter-spacing: .035em; text-align: justify; }

.graduate-section { padding: 84px 0 100px; }
.graduate-section .section-kicker,.graduate-section h2,.graduate-section .section-subtext { text-align:left; }
.graduate-section .section-kicker { justify-content:flex-start; }
.graduate-section h2 { margin-bottom: 12px; font-size: 27px; font-weight: 400; text-transform: none; }
.graduate-section .section-subtext { margin:0 0 34px; }
.graduate-table { width: 100%; border-collapse: collapse; color: #333; font-size: 17px; line-height: 1.75; }
.graduate-table th,.graduate-table td { padding: 20px 16px; border-bottom: 1px solid #777; text-align: left; vertical-align: top; }
.graduate-table thead th { height: 74px; font-size: 20px; font-weight: 400; vertical-align: bottom; }
.graduate-table thead th:first-child { width: 35%; }
.graduate-table tbody th { width: 35%; font-size: 21px; font-weight: 400; }
.graduate-table tbody td { padding-left: 20px; }

.program-quote { position: relative; min-height: 620px; display: grid; place-items: center; overflow: hidden; }
.quote-shapes { position: absolute; inset: 0; background: #fff; }
.quote-shapes::before { position: absolute; inset: 0; background: #e99a00; clip-path: polygon(0 20%, 24% 0, 50% 20%, 100% 58%, 100% 92%, 75% 100%, 47% 76%, 0 80%); content: ''; }
.quote-content { position: relative; z-index: 1; width: min(1040px, calc(100% - 48px)); padding: 75px 0 55px; text-align: center; }
.quote-stars { margin-bottom: 78px; color: #e99a00; font-size: 43px; letter-spacing: 17px; }
.quote-content blockquote { margin: 0; color: #26312f; font-size: clamp(36px, 5vw, 62px); font-weight: 300; line-height: 1.2; }

.back-to-top { position: fixed; z-index: 30; right: 26px; bottom: 24px; width: 52px; height: 52px; border: 1px solid #e8e8e8; border-radius: 50%; background: #fff; box-shadow: 0 3px 12px #0002; color: #111; font-size: 28px; line-height: 1; cursor: pointer; }

@media(max-width: 900px) {
  .cs-hero { min-height: 690px; padding: 150px 6% 120px; }
  .cs-hero-inner { gap: 30px; }
  .cs-hero-copy h1 { font-size: clamp(42px, 6vw, 58px); }
  .cs-hero-copy > p { font-size: 18px; }
  .cs-hero-actions { gap: 14px; margin-top: 36px; }
  .cs-hero-actions a { min-width: 175px; min-height: 58px; font-size: 16px; }
  .cs-section { width: calc(100% - 60px); }
  .society-inner { width: calc(100% - 60px); gap: 35px; }
  .society-inner p { font-size: 16px; }
}

@media(max-width: 650px) {
  .cs-program :deep(.page-brand) { width: 70px; height: 70px; }
  .cs-hero { min-height: 850px; padding: 130px 24px 180px; background-position:center, 58% center; }
  .cs-hero::after { height: 220px; clip-path: polygon(0 20%, 27% 100%, 67% 20%, 100% 36%, 100% 100%, 0 100%); }
  .cs-hero-inner { grid-template-columns: 1fr; gap: 12px; text-align: center; }
  .cs-hero-copy { margin: 0 auto; }
  .cs-hero-copy h1 { font-size: 44px; letter-spacing: -1px; }
  .cs-hero-copy > p { font-size: 17px; line-height: 1.65; }
  .cs-hero-actions { justify-content: center; margin-top: 28px; }
  .cs-hero-actions a { min-width: 145px; min-height: 52px; gap: 10px; padding: 8px 12px; font-size: 15px; }
  .hero-society-logo { width: 210px; margin: 5px auto 0; }
  .cs-section { width: calc(100% - 38px); }
  .cs-section h2 { margin-bottom: 14px; font-size: 23px; }
  .cs-section .section-subtext { margin-bottom:32px; font-size:15px; }
  .section-kicker { font-size:11px; }
  .objectives-section { padding-top: 55px; }
  .objectives-list,.outcome-copy,.curriculum-list { font-size: 15px; }
  .program-outcomes-section { padding-top: 38px; }
  .outcome-copy h3 { font-size: 17px; }
  .subsection-subtext { font-size:14px; }
  .rationale-section { padding-top: 50px; }
  .cs-section .ched-heading { margin-bottom: 10px; font-size: 21px; }
  .cs-section .rationale-subtext { margin-bottom:52px; }
  .rationale-copy h3,.curriculum-section h2 { font-size: 23px; }
  .rationale-copy p { font-size: 15px; line-height: 1.75; }
  .curriculum-panel { padding:22px 20px; }
  .society-section { min-height: 730px; }
  .society-shapes { background: linear-gradient(165deg, transparent 0 30%, #e99a00 30.1% 72%, #153f3d 72.1% 100%); }
  .society-shapes::before { clip-path: polygon(0 29%, 56% 41%, 100% 20%, 100% 58%, 52% 75%, 0 63%); }
  .society-shapes::after { clip-path: polygon(0 72%, 45% 67%, 100% 48%, 100% 100%, 0 100%); }
  .society-inner { width: calc(100% - 42px); min-height: 730px; padding: 70px 0; grid-template-columns: 1fr; gap: 20px; text-align: center; }
  .society-section-logo { width: min(280px, 78%); margin: 0 auto; }
  .society-inner p { font-size: 15px; line-height: 1.8; text-align: left; }
  .graduate-section { padding: 60px 0 75px; }
  .graduate-section h2 { margin-bottom: 12px; font-size: 21px; }
  .graduate-section .section-subtext { margin-bottom:24px; }
  .graduate-table { font-size: 14px; line-height: 1.55; }
  .graduate-table th,.graduate-table td { padding: 13px 9px; }
  .graduate-table thead th { height: auto; font-size: 15px; }
  .graduate-table thead th:first-child,.graduate-table tbody th { width: 26%; }
  .graduate-table tbody th { font-size: 16px; }
  .graduate-table tbody td { padding-left: 10px; }
  .program-quote { min-height: 480px; }
  .quote-stars { margin-bottom: 45px; font-size: 31px; letter-spacing: 9px; }
  .quote-content blockquote { font-size: 36px; }
}
</style>
