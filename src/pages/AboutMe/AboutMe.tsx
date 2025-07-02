import styles from './AboutMe.module.scss'

function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className="scrollableContent">
        <div className={styles.centeredContent}>
          <h2>About me</h2>
          <p>
            Hi! I’m Julián, a curious and versatile QA Analyst and Email Developer with a deep passion for learning and technology. I enjoy understanding how things work and love diving into new challenges—whether it’s manual testing, crafting email campaigns, or exploring front-end frameworks like React.
          </p>
          <p>
            I believe the best results come from connecting ideas across disciplines and collaborating with others. That’s why I’m always expanding my skill set—not just in tech, but also in business and communication. I’m currently pursuing a BBA to better understand how organizations operate and how I can contribute beyond code.
          </p>
          <p>
            Based in Buenos Aires, I hold dual Argentinian-Italian citizenship and speak English and Spanish fluently (plus a bit of Portuguese). My journey has taken me from QA and email development into some front-end projects, and I’m excited to keep growing—not only as a developer, but as a well-rounded professional who brings both technical insight and strategic thinking to the table.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
