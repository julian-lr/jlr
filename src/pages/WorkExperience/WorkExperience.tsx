import styles from './WorkExperience.module.scss'

function WorkExperience() {
  return (
    <section className={styles.workExperience}>
      <h2>Work Experience</h2>
      <div className={styles.timeline}>
        {/* Accenture Song */}
        <div className={styles.company}>
          <h3>Accenture Song</h3>
          <span className={styles.duration}>3 years 7 months</span>
          <div className={styles.role}>
            <h4>User Experience Arch Analyst</h4>
            <span className={styles.dates}>Nov 2022 – Present (2 years 9 months)</span>
            <div>
              <p>At Accenture Song, I lead a four-person email development team for a major international bank, working within Salesforce Marketing Cloud. My main focus is on building accessible, high-impact email campaigns — translating complex designs into bulletproof code and guiding my team through best practices and technical challenges.<br /><br />During the first year in this role, I was also responsible for manual QA across emails, content, and design assets for a global e-commerce platform. That experience sharpened my attention to detail and strengthened my understanding of how accessibility, consistency, and rendering quirks impact communication at scale.<br /><br />In addition to my development and leadership work, I contribute to testing support capabilities tied to Salesforce workflows, and I manage the data extensions used in our staging environment — making sure segmentation logic and audience data are solid before anything goes live. It’s a role that blends technical depth with cross-functional collaboration, and I’ve enjoyed evolving it beyond code.</p>
            </div>
          </div>
          <div className={styles.role}>
            <h4>Digital Content Creation Associate</h4>
            <span className={styles.dates}>Jan 2022 – Nov 2022 (11 months) · Argentina</span>
            <div>
              <p>In my first year, I worked as an email developer for a national cable provider, gaining hands-on experience with Salesforce Marketing Cloud — particularly Email Studio and Journey Builder. I built and deployed campaigns, managed segmentation and automations, and ensured clean, responsive code under tight delivery schedules.<br /><br />Beyond development, I was also responsible for QA during this time, testing each campaign to catch rendering, logic, and accessibility issues before deployment. I additionally took charge of extracting and cleaning monthly campaign performance data to feed into our client’s Power BI dashboards — a task that required both analytical thinking and attention to detail.<br /><br />My proactive approach and consistent performance across development, QA, and reporting were quickly recognized, leading to my promotion to a more senior role within the same project less than a year after joining.</p>
            </div>
          </div>
        </div>
        {/* Globant */}
        <div className={styles.company}>
          <h3>Globant</h3>
          <span className={styles.duration}>May 2021 – Dec 2021 (8 months) · Buenos Aires, Argentina</span>
          <div className={styles.role}>
            <h4>QC Analyst Jr</h4>
            <div>
              <p>At Globant, I joined a project for a global travel agency focused on testing its e-commerce platform and Adobe Experience Manager-based content. I worked across a range of testing types — regression, integration, unit, A/B, and responsive design — crafting test cases and validating performance across browsers and devices.<br /><br />The work demanded both technical thoroughness and creative thinking, especially when navigating complex user flows and uncovering edge cases. It also helped me develop a keener eye for platform consistency and user experience under real-world conditions.</p>
            </div>
          </div>
        </div>
        {/* Wunderman Thompson */}
        <div className={styles.company}>
          <h3>Wunderman Thompson</h3>
          <span className={styles.duration}>Nov 2019 – May 2021 (1 year 7 months) · Argentina</span>
          <div className={styles.role}>
            <h4>QA Analyst</h4>
            <div>
              <p>Wunderman Thompson was one of the most fun and dynamic stages of my career. I worked across a wide variety of short-term projects for different clients, which meant constantly adapting to new technologies, tools, and workflows. From one week to the next, I could be testing a website, a mobile app, a dynamic email, or an interactive banner — and no two days felt the same.<br /><br />I performed manual QA across all those formats, validating functionality, rendering, accessibility, and performance. I regularly used tools like BrowserStack, Litmus, NVDA, Email on Acid, Postman, GitHub, and Adobe Experience Manager to support my work. That constant change kept me on my toes and helped me build a flexible mindset — something that still defines how I approach new challenges today.</p>
            </div>
          </div>
        </div>
        {/* MRM//McCann */}
        <div className={styles.company}>
          <h3>MRM//McCann</h3>
          <span className={styles.duration}>Jun 2019 – Aug 2019 (3 months) · Argentina</span>
          <div className={styles.role}>
            <h4>Content Analyst</h4>
            <div>
              <p>At MRM//McCann, I joined as a temporary team member to support content operations for an e-commerce platform. During those three months, I worked on building and maintaining the site’s structure — implementing interactive elements, updating content, and ensuring layout consistency across pages.<br /><br />Even in that short time, I gained valuable experience collaborating with designers and developers in a fast-paced agency setting, and learned how small content changes can make a big impact on user experience. It was a brief but meaningful opportunity that helped me solidify my interest in digital production.</p>
            </div>
          </div>
        </div>
        {/* Voolkia Software & Services */}
        <div className={styles.company}>
          <h3>Voolkia Software & Services</h3>
          <span className={styles.duration}>10 months</span>
          <div className={styles.role}>
            <h4>Productization Analyst</h4>
            <span className={styles.dates}>Mar 2019 – Jun 2019 (4 months) · Argentina</span>
            <div>
              <p>At Voolkia, I transitioned into a newly created role — one that I helped define based on a recurring challenge we faced. As part of the catalog team for a large-scale marketplace platform, we kept receiving product data with serious issues: miscategorized items, broken attributes, or inconsistent logic that slowed down the entire production chain.<br /><br />To address this, I proposed stepping away from day-to-day catalog creation to focus on quality control at the source. I started pre-screening incoming catalogs, identifying structural problems, and flagging those unfit for processing — which allowed our team to prioritize clean data and escalate issues more efficiently. That shift not only improved our team’s output but also laid the groundwork for a more scalable process.</p>
            </div>
          </div>
          <div className={styles.role}>
            <h4>Functional Analyst</h4>
            <span className={styles.dates}>Sep 2018 – Feb 2019 (6 months) · Argentina</span>
            <div>
              <p>Before that, I worked as a Catalog Creator, building and reviewing product listings for the same marketplace. I was responsible for checking each product’s structure, category placement, and visual presentation — all while keeping detailed daily reports on catalog status and performance. It was my first hands-on experience working with digital products at scale and where I first saw the impact of system-level thinking.</p>
            </div>
          </div>
        </div>
        {/* ACTIVO CONTACT CENTER */}
        <div className={styles.company}>
          <h3>Activo Contact Center</h3>
          <span className={styles.duration}>7 months</span>
          <div className={styles.role}>
            <h4>Inbound Telemarketer</h4>
            <span className={styles.dates}>May 2018 – Jul 2018 (3 months) · Argentina</span>
            <div>
              <p>In May 2018, the company acquired a major telecom provider — and with that, my role shifted dramatically. I became part of the first team assigned exclusively to inbound sales, helping launch a new operation focused on converting support calls into service purchases. It was a fast-paced and high-pressure environment, where I had to think quickly, handle objections, and still provide a smooth experience for callers who hadn’t initially contacted us to buy anything.<br /><br />This experience marked a turning point: I moved away from juggling multiple campaign types to becoming fully immersed in a more focused, performance-driven sales process.</p>
            </div>
          </div>
          <div className={styles.role}>
            <h4>Telemarketer</h4>
            <span className={styles.dates}>Jan 2018 – Apr 2018 (4 months) · Argentina</span>
            <div>
              <p>I started at Activo handling both sales and customer service campaigns for a well-known cable and internet provider. The work was polyfunctional — on any given day, I could be pitching new packages to potential clients in regions like AMBA, Córdoba, Salta, or Neuquén, and then switching gears to troubleshoot billing issues or technical problems for existing customers.<br /><br />It was a crash course in communication, patience, and adaptability. That early experience gave me a strong foundation in handling pressure, reading people quickly, and adjusting my approach to match the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
