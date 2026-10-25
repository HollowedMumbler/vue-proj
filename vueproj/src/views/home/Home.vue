<template>
  <div class="ccs-home" id="home">
    <!-- Main navigation -->
    <header class="ccs-header">
      <a class="ccs-brand" href="#home" aria-label="College of Computer Studies home">
        <img class="brand-top" src="/images/ccs/cropped-CCS-Logov-new.png" alt="CCS" />
        <img class="brand-scrolled" src="/images/ccs/Warriors-Logo-2.png" alt="CPU Warriors" />
      </a>

      <details class="ccs-mobile-menu">
        <summary aria-label="Open navigation">
          <span></span>
          <span></span>
          <span></span>
        </summary>
        <nav>
          <a href="#home">Home</a>
          <details>
            <summary>About Us</summary>
            <a href="/history">History</a>
            <a href="/vision-and-mission">Vision and Mission</a>
            <a href="/dean-message">Message of the Dean</a>
            <a href="/linkages">Linkages</a>
            <a href="/news-and-updates">News and Updates</a>
          </details>
          <details>
            <summary>Academic Programs</summary>
            <a href="/computer-science">Computer Science</a>
            <a href="/information-technology">Information Technology</a>
            <a href="/information-systems">Information Systems</a>
            <a href="/digital-media-and-interactive-arts">Digital Media and Interactive Arts</a>
            <a href="/library-information-science">Library Information Science</a>
          </details>
          <a href="/faculty-and-staff">Faculty and Staff</a>
          <a href="/event-calendar">Event Calendar</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
      </details>

      <nav class="ccs-nav" aria-label="Primary navigation">
        <a class="active" href="#home">Home</a>
        <div class="nav-group">
          <a href="#about">About Us <span>⌄</span></a>
          <div class="nav-dropdown">
            <a href="/history">History</a>
            <a href="/vision-and-mission">Vision and Mission</a>
            <a href="/dean-message">Message of the Dean</a>
            <a href="/linkages">Linkages</a>
            <a href="/news-and-updates">News and Updates</a>
          </div>
        </div>
        <div class="nav-group">
          <a href="#programs">Academic Programs <span>⌄</span></a>
          <div class="nav-dropdown">
            <a href="/computer-science">Computer Science</a>
            <a href="/information-technology">Information Technology</a>
            <a href="/information-systems">Information Systems</a>
            <a href="/digital-media-and-interactive-arts">Digital Media and Interactive Arts</a>
            <a href="/library-information-science">Library Information Science</a>
          </div>
        </div>
        <a href="/faculty-and-staff">Faculty and Staff</a>
        <a href="/event-calendar">Event Calendar</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
    </header>

    <main>
      <!-- Hero and core practices -->
      <section class="ccs-hero" aria-label="College of Computer Studies">
        <div class="hero-copy">
          <p>the CCS core practices that build bridges between gaps</p>
          <h1>
            REMEMBER<br />
            CONNECT<br />
            ENGAGE<br />
            BUILD<br />
            SHARE
          </h1>
          <h2>different PEOPLE, ONE goal</h2>
          <a class="gold-button" href="#programs">Your FUTURE begins HERE</a>
        </div>

      </section>

      <!-- Program overview -->
      <section class="ccs-programs" id="programs" aria-label="Academic programs">
        <div class="programs-heading">
          <p>ACADEMIC PROGRAMS</p>
          <h2>Programs and Student Organizations</h2>
        </div>
        <div class="student-organizations" aria-label="Student organizations">
          <a class="organization-tile" href="#program-cs">
            <img src="/images/ccs/CSS_PNG-150x150.png" alt="" />
          </a>
          <a class="organization-tile" href="#program-it">
            <img src="/images/ccs/1-150x150.png" alt="" />
          </a>
          <a class="organization-tile" href="#program-dmia">
            <img src="/images/ccs/MIDAS_PNG-150x150.png" alt="" />
          </a>
          <a class="organization-tile" href="#program-blis">
            <img src="/images/ccs/LISSO-150x150.png" alt="" />
          </a>
        </div>
        <div class="program-card-grid">
          <a class="program-card" id="program-cs" href="/computer-science">
            <h2>Computer<br />Science</h2>
            <p>The Computer Science (CS) program is designed for students who want to study computing in depth, including software and hardware.</p>
          </a>
          <a class="program-card" id="program-it" href="/information-technology">
            <h2>Information<br />Technology</h2>
            <p>The Information Technology (IT) program bridges computer science and management information systems.</p>
          </a>
          <a class="program-card" id="program-dmia" href="/digital-media-and-interactive-arts">
            <h2>Digital Media and<br />Interactive Arts</h2>
            <p>The degree focuses on creativity, applied arts, and digital media technologies.</p>
          </a>
          <a class="program-card" id="program-blis" href="/library-information-science">
            <h2>Library Information<br />Science</h2>
            <p>The Bachelor of Library and Information Science (BLIS) is a four-year program.</p>
          </a>
        </div>
      </section>

      <!-- College history preview -->
      <section class="ccs-history" id="about">
        <div class="history-copy">
          <p class="section-label">REMEMBER</p>
          <h2>HOW IT STARTED</h2>
          <div class="history-text">
            <p>The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students. Prof. Mary O’ T. Penetrante was appointed to be the faculty-in-charge of the new program.</p>
          </div>
          <a class="gold-button" href="/history">READ MORE</a>
        </div>
        <figure class="history-visual">
          <div class="history-photo-placeholder" role="img" aria-label="Generic profile photo placeholder for Prof. Mary O’ T. Penetrante">
            <span class="placeholder-head"></span>
            <span class="placeholder-shoulders"></span>
            <small>Photo placeholder</small>
          </div>
          <img class="history-mark" src="/images/ccs/cropped-CCS-Logov-new.png" alt="CCS logo" />
          <figcaption>Prof. Mary O’ T. Penetrante</figcaption>
        </figure>
      </section>

      <!-- Dean's message preview -->
      <section class="ccs-dean" id="dean">
        <div class="dean-photo">
          <img src="/images/ccs/quijano-e1637132499305.png" alt="Ma. Christina A. Quijano, MSCS" />
        </div>
        <div class="dean-copy">
          <p class="section-label">ENGAGE</p>
          <h2>Message from the Dean</h2>
          <p class="dean-message">Each academic year brings a new class and new contributions to college life. The Dean welcomes students and recognizes the unique strengths they bring to the CCS community.</p>
          <p class="dean-name">Ma. Christina A. Quijano, MSCS<br /><span>Dean</span></p>
          <a class="gold-button" href="/dean-message">READ MORE</a>
        </div>
      </section>

      <!-- Recent news -->
      <section class="ccs-news" id="news">
        <div class="news-heading">
          <h2>News and Updates</h2>
          <p>Be Updated with the College and Student Events</p>
        </div>
        <div class="news-card-grid">
          <article class="news-card" tabindex="0">
            <div class="news-card-media">
              <img src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/12/12072021-Outreach-MOA-300x225.jpg" alt="Community Engagement MOA signing ceremony" />
              <div class="news-card-hover">
                <p>The planned Adopt a School program paired CCS faculty with Mandurriao Elementary School staff for a virtual session on Canvas, Google Classroom, and Facebook Groups.</p>
                <span class="news-read-more">Read more <b aria-hidden="true">↗</b></span>
              </div>
            </div>
            <div class="news-card-copy">
              <time datetime="2021-12-08">December 8, 2021</time>
              <h3>Community Engagement MOA Signing Ceremony</h3>
              <p>CCS and Mandurriao Elementary School formalized a partnership through a Memorandum of Agreement.</p>
            </div>
          </article>
          <article class="news-card" tabindex="0">
            <div class="news-card-media">
              <img src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-New-Librarians-300x300.jpg" alt="Congratulations to our new librarians" />
              <div class="news-card-hover">
                <p>CCS celebrated its new librarians after CPU first-time takers posted a 60% pass rate, above the 47.7% national rate, in the September 2021 exam.</p>
                <span class="news-read-more">Read more <b aria-hidden="true">↗</b></span>
              </div>
            </div>
            <div class="news-card-copy">
              <time datetime="2021-11-23">November 23, 2021</time>
              <h3>Congratulations to our New Librarians!</h3>
              <p>The college congratulated its new librarians after the September 2021 licensure examination.</p>
            </div>
          </article>
          <article class="news-card" tabindex="0">
            <div class="news-card-media">
              <img src="https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/11232021-Kation-300x225.jpg" alt="CCS graduates hired by Kation Technologies" />
              <div class="news-card-hover">
                <p>Kation Technologies hired CCS graduates. The company is a Microsoft Gold Partner in the Philippines.</p>
                <span class="news-read-more">Read more <b aria-hidden="true">↗</b></span>
              </div>
            </div>
            <div class="news-card-copy">
              <time datetime="2021-11-23">November 23, 2021</time>
              <h3>Kation Technologies hires CCS graduates</h3>
              <p>A career milestone for CCS alumni at a Microsoft Gold Partner company.</p>
            </div>
          </article>
        </div>
        <a class="gold-button" href="/news-and-updates">VIEW MORE</a>
      </section>

      <!-- About the CCS community -->
      <section class="ccs-who-we-are">
        <div class="who-copy">
          <p class="section-label">SHARE</p>
          <h2>WHO WE ARE</h2>
          <p>Different people united by one goal: building bridges, taking part in college life, and moving forward together.</p>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/UVUk2i0fm50"
            title="CCS Warriors Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Facilities gallery -->
      <section class="ccs-facilities">
        <p class="section-label">BUILD</p>
        <h2>Our Facilities</h2>
        <div class="facility-gallery">
          <div class="facility-tile"><img src="/images/ccs/Warriors-Logo-2.png" alt="CCS Warriors" /></div>
          <div class="facility-tile"><img src="/images/ccs/Warriors-Logo-2.png" alt="CCS Warriors" /></div>
          <div class="facility-tile featured">
            <img src="/images/ccs/Warriors-Logo-2.png" alt="CCS Warriors" />
            <div><b>Image 1</b><span>image description here</span></div>
          </div>
          <div class="facility-tile"><img src="/images/ccs/Warriors-Logo-2.png" alt="CCS Warriors" /></div>
        </div>
        <a class="gold-button" href="/about-us">VIEW MORE</a>
      </section>

      <!-- Partners and memberships -->
      <section class="ccs-partners">
        <p class="section-label">CONNECT</p>
        <h2>Our Partners and Memberships</h2>
        <p>Driving technology for education</p>
        <div class="partner-logos">
          <img src="/images/ccs/Oracle_Academy_rgb.png" alt="Oracle Academy" />
          <img src="/images/ccs/1024px-Cisco_academy_logo.svg_-300x300.png" alt="Cisco Networking Academy" />
          <img src="/images/ccs/acer-300x300.jpg" alt="Acer Academy" />
          <img src="/images/ccs/huawei-academy-logo-300x300.jpg" alt="Huawei ICT Academy" />
        </div>
        <a class="gold-button" href="/linkages">VIEW MORE</a>
      </section>

      <!-- Contact information and map -->
      <section class="ccs-contact" id="contact">
        <div class="contact-copy">
          <p class="section-label">CONTACT</p>
          <h2>For any inquiries<br />please email</h2>
          <a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
          <a class="gold-button" href="/contact-us">VIEW MORE OPTIONS</a>
        </div>
        <iframe
          title="Map to Mary Thomas Hall, Central Philippine University"
          src="https://www.google.com/maps?q=Mary+Thomas+Hall,+Central+Philippine+University,+Iloilo&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  </div>
</template>

<script src="../../scripts/home-header.js"></script>
<style src="../../styles/home.css"></style>
