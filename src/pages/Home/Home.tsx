import styles from './Home.module.scss'
import profileImg from '../../assets/img/profile/pfp.jpg'

// Home page: shows profile image, name, and roles in a responsive layout
function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        {/* Profile image, styled as a circle with CSS */}
        <div className={styles.photoWrapper}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.photo}
          />
        </div>
        {/* Info section: name and roles */}
        <div className={styles.info}>
          {/* Name: first name normal, last names highlighted (color changes with theme) */}
          <h1 className={styles.name}>
            Julián <span className={styles.highlight}>Laurito Riscica</span>
          </h1>
          {/* Roles: concise, separated by centered dots */}
          <div className={styles.roles}>
            <span>QA</span>
            <span> • </span>
            <span>Email Dev</span>
            <span> • </span>
            <span>Frontend Dev</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
