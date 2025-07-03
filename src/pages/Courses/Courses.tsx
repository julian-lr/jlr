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
            <li className={styles.courseRow}><span className={styles.courseName}>Comparing Manual & Automated Testing</span><span className={styles.date}>May 2025</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Exploring CI: Continuous Integration & CI Tools</span><span className={styles.date}>May 2025</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Software Quality Assurance</span><span className={styles.date}>May 2025</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Test Automation: Automated Software Testing</span><span className={styles.date}>May 2025</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Web Design Basics</span><span className={styles.date}>Jan 2023</span></li>
          </ul>
        </div>
        {/* Acámica */}
        <div className={styles.group}>
          <strong>Acámica</strong>
          <ul>
            <li className={styles.courseRow}><span className={styles.courseName}>Test Planning</span><span className={styles.date}>Nov 2021</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Testing Basics</span><span className={styles.date}>Nov 2021</span></li>
          </ul>
        </div>
        {/* LinkedIn Learning */}
        <div className={styles.group}>
          <strong>LinkedIn Learning</strong>
          <ul>
            <li className={styles.courseRow}><span className={styles.courseName}>Programming Foundations: Software Testing/QA</span><span className={styles.date}>Mar 2021</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>UX Foundations: Accessibility</span><span className={styles.date}>Apr 2020</span></li>
            <li className={styles.courseRow}><span className={styles.courseName}>Fundamentos del desarrollo web: Front-end</span><span className={styles.date}>Jul 2020</span></li>
          </ul>
        </div>
        {/* Google Activate */}
        <div className={styles.group}>
          <strong>Google Activate</strong>
          <ul>
            <li className={styles.courseRow}><span className={styles.courseName}>Introducción al Desarrollo Web I</span><span className={styles.date}>May 2020</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Courses
