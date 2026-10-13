# nexorbit-website

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>NexOrbit | Digital Solutions & IT Services</title>
  <meta name="description" content="NexOrbit delivers web development, graphic design, software solutions, AI automation, cybersecurity and IT support.">
  <meta name="theme-color" content="#080d19">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 85px;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #080d19;
      color: #f4f7ff;
      line-height: 1.7;
    }

    a {
      transition: 0.2s ease;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 18px 8%;
      background: rgba(8, 13, 25, 0.94);
      border-bottom: 1px solid #1e293b;
      backdrop-filter: blur(12px);
    }

    .logo {
      font-size: 27px;
      font-weight: 800;
      letter-spacing: -1px;
      white-space: nowrap;
    }

    .logo span,
    h1 span {
      color: #38bdf8;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
    }

    nav a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 14px;
    }

    nav a:hover {
      color: #38bdf8;
    }

    .hero {
      text-align: center;
      padding: 110px 20px 100px;
      background:
        radial-gradient(ellipse at 50% 0%, #12304c 0%, #080d19 68%);
    }

    .tag {
      display: inline-block;
      color: #38bdf8;
      letter-spacing: 2px;
      font-size: 12px;
      font-weight: bold;
    }

    h1 {
      max-width: 900px;
      margin: 24px auto;
      font-size: clamp(42px, 7vw, 76px);
      line-height: 1.1;
      letter-spacing: -2px;
    }

    .hero p {
      max-width: 660px;
      margin: 0 auto 32px;
      color: #aab8cc;
      font-size: 17px;
    }

    .actions {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 14px;
    }

    .button {
      display: inline-block;
      padding: 13px 23px;
      border: 1px solid #38bdf8;
      border-radius: 8px;
      background: #38bdf8;
      color: #07111e;
      text-decoration: none;
      font-weight: 700;
    }

    .button:hover {
      transform: translateY(-2px);
      background: #7dd3fc;
    }

    .button.secondary {
      background: transparent;
      color: #e2e8f0;
    }

    .button.secondary:hover {
      background: #14243a;
    }

    section {
      padding: 78px 8%;
    }

    .section-title {
      margin-bottom: 10px;
      text-align: center;
      font-size: clamp(28px, 4vw, 38px);
    }

    .section-desc {
      max-width: 650px;
      margin: 0 auto 38px;
      text-align: center;
      color: #aab8cc;
    }

    .services {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }

    .service {
      padding: 27px;
      background: #111a2b;
      border: 1px solid #263449;
      border-radius: 14px;
      transition: transform 0.2s, border-color 0.2s;
    }

    .service:hover {
      transform: translateY(-4px);
      border-color: #38bdf8;
    }

    .service .icon {
      font-size: 32px;
    }

    .service h3 {
      margin: 13px 0 8px;
      font-size: 19px;
    }

    .service p {
      color: #aab8cc;
      font-size: 14px;
    }

    .about {
      text-align: center;
      background: #0d1524;
    }

    .about p {
      max-width: 760px;
      margin: 0 auto;
      color: #aab8cc;
    }

    .contact {
      text-align: center;
      background:
        radial-gradient(ellipse at bottom, #12304c, #080d19 70%);
    }

    .contact p {
      margin: 12px auto 25px;
      color: #aab8cc;
    }

    .contact-details {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 24px;
    }

    footer {
      padding: 26px 20px;
      text-align: center;
      color: #94a3b8;
      border-top: 1px solid #1e293b;
      font-size: 13px;
    }

    footer a {
      color: #38bdf8;
      text-decoration: none;
    }

    :focus-visible {
      outline: 2px solid #38bdf8;
      outline-offset: 4px;
    }

    @media (max-width: 850px) {
      header {
        padding: 16px 5%;
      }

      .services {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 560px) {
      header {
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
      }

      nav {
        gap: 16px;
      }

      nav a {
        font-size: 13px;
      }

      .hero {
        padding: 75px 20px;
      }

      h1 {
        letter-spacing: -1px;
      }

      .hero p {
        font-size: 15px;
      }

      section {
        padding: 58px 6%;
      }

      .services {
        grid-template-columns: 1fr;
      }

      .service {
        padding: 23px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *, *::before, *::after {
        transition: none !important;
      }
    }
  </style>
</head>

<body>
  <header>
    <a class="logo" href="#home" aria-label="NexOrbit home"
       style="text-decoration:none;color:#f4f7ff">
      Nex<span>Orbit</span>
    </a>

    <nav aria-label="Main navigation">
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="tag">YOUR DIGITAL GROWTH PARTNER</div>

      <h1>Ideas into <span>Digital Reality.</span></h1>

      <p>
        We help businesses move forward with modern websites,
        creative design, intelligent automation and practical IT solutions.
      </p>

      <div class="actions">
        <a class="button" href="#contact">Let's Work Together</a>
        <a class="button secondary" href="#services">Explore Services</a>
      </div>
    </section>

    <section id="services">
      <h2 class="section-title">Our Services</h2>
      <p class="section-desc">
        Practical digital solutions designed around your business needs.
      </p>

      <div class="services">
        <article class="service">
          <div class="icon" aria-hidden="true">🌐</div>
          <h3>Web Development</h3>
          <p>Responsive websites with clean layouts and user-friendly experiences.</p>
        </article>

        <article class="service">
          <div class="icon" aria-hidden="true">🎨</div>
          <h3>Graphic Design</h3>
          <p>Brand identities, social media creatives and marketing materials.</p>
        </article>

        <article class="service">
          <div class="icon" aria-hidden="true">💻</div>
          <h3>Software Development</h3>
          <p>Custom applications, useful tools and business-focused digital solutions.</p>
        </article>

        <article class="service">
          <div class="icon" aria-hidden="true">🤖</div>
          <h3>AI Automation</h3>
          <p>Intelligent workflows to help reduce repetitive tasks and save time.</p>
        </article>

        <article class="service">
          <div class="icon" aria-hidden="true">🛡️</div>
          <h3>Cybersecurity</h3>
          <p>Security guidance and authorized assessments to help identify risks.</p>
        </article>

        <article class="service">
          <div class="icon" aria-hidden="true">⚙️</div>
          <h3>IT Support</h3>
          <p>Practical technology assistance, troubleshooting and setup guidance.</p>
        </article>
      </div>
    </section>

    <section class="about" id="about">
      <h2 class="section-title">About NexOrbit</h2>
      <p>
        NexOrbit helps individuals and businesses turn ideas into useful
        digital experiences. Our focus is on thoughtful design, dependable
        technology and practical solutions that support business growth.
      </p>
    </section>

    <section class="contact" id="contact">
      <h2 class="section-title">Let's Build Something Great</h2>
      <p>
        Have a project in mind? Contact NexOrbit to discuss your requirements.
      </p>

      <div class="actions">
        <a class="button"
           href="mailto:nexorbit.business@gmail.com?subject=NexOrbit%20Project%20Inquiry">
          Email Us
        </a>

        <a class="button secondary"
           href="https://wa.me/923287894595?text=Hello%20NexOrbit%2C%20I%20would%20like%20to%20discuss%20a%20project."
           target="_blank"
           rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </div>

      <div class="contact-details">
        <p>
          Email:
          <a href="mailto:nexorbit.business@gmail.com"
             style="color:#38bdf8;text-decoration:none">
            nexorbit.business@gmail.com
          </a>
        </p>
      </div>
    </section>
  </main>

  <footer>
    © <span id="year">2026</span> NexOrbit. All rights reserved.
    <br>Design. Develop. Automate. Secure.
  </footer>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
```
