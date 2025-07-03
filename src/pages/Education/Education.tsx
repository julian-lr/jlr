import styles from './Education.module.scss'

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.timeline}>
        {/* UTN */}
        <div className={styles.entry}>
          <strong>Universidad Tecnológica Nacional</strong>
          <span className={styles.degree}><em>Bachelor of Business Administration</em></span>
          <span className={styles.dates}>Mar 2025 – Present</span>
        </div>
        {/* Coderhouse */}
        <div className={styles.entry}>
          <strong>Coderhouse</strong>
          <span className={styles.degree}><em>ReactJS Front-end Developer Certificate</em></span>
          <span className={styles.dates}>May 2023 – Nov 2023</span>
        </div>
        {/* Instituto William Morris */}
        <div className={styles.entry}>
          <strong>Instituto William Morris</strong>
          <span className={styles.degree}><em>High School Diploma, Specialization in Social Sciences</em></span>
          <span className={styles.dates}>Mar 2010 – Nov 2015</span>
        </div>
      </div>
    </section>
  )
}

export default Education
