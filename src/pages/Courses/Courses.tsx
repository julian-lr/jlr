import styles from './Courses.module.scss'

function Courses() {
  return (
    <section className={styles.courses}>
      <h2>Courses</h2>
      <div className={styles.timeline}>
        {/* Skillsoft */}
        <div className={styles.group}>
          <strong>Skillsoft</strong>
          <ul>
            <li>Comparing Manual & Automated Testing <span className={styles.date}>— May 2025</span></li>
            <li>Exploring CI: Continuous Integration & CI Tools <span className={styles.date}>— May 2025</span></li>
            <li>Software Quality Assurance <span className={styles.date}>— May 2025</span></li>
            <li>Test Automation: Automated Software Testing <span className={styles.date}>— May 2025</span></li>
            <li>Web Design Basics <span className={styles.date}>— Jan 2023</span></li>
          </ul>
        </div>
        {/* Acámica */}
        <div className={styles.group}>
          <strong>Acámica</strong>
          <ul>
            <li>Test Planning <span className={styles.date}>— Nov 2021</span></li>
            <li>Testing Basics <span className={styles.date}>— Nov 2021</span></li>
          </ul>
        </div>
        {/* LinkedIn Learning */}
        <div className={styles.group}>
          <strong>LinkedIn Learning</strong>
          <ul>
            <li>Programming Foundations: Software Testing/QA <span className={styles.date}>— Mar 2021</span></li>
            <li>UX Foundations: Accessibility <span className={styles.date}>— Apr 2020</span></li>
            <li>Fundamentos del desarrollo web: Front-end <span className={styles.date}>— Jul 2020</span></li>
          </ul>
        </div>
        {/* Google Activate */}
        <div className={styles.group}>
          <strong>Google Activate</strong>
          <ul>
            <li>Introducción al Desarrollo Web I <span className={styles.date}>— May 2020</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Courses
