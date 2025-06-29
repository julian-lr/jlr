import { useState } from 'react'
import styles from './Navbar.module.scss'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About me', id: 'aboutme' },
  { name: 'Work experience', id: 'workexperience' },
  { name: 'Education', id: 'education' },
  { name: 'Courses', id: 'courses' },
  { name: 'Contact', id: 'contact' },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  const handleClick = (id: string) => {
    setActive(id)
    setOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <span className={styles.logo}>JLR</span>
        <button
          className={open ? styles.burger + ' ' + styles.burgerOpen : styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerBar}></span>
          <span className={styles.burgerBar}></span>
          <span className={styles.burgerBar}></span>
        </button>
        {/* Desktop menu */}
        <div className={styles.linksDesktop}>
          {links.map((link, idx) => (
            <span
              key={link.id}
              className={
                styles.link +
                (active === link.id ? ' ' + styles.active : '')
              }
              onClick={() => handleClick(link.id)}
              onMouseDown={e => e.preventDefault()}
            >
              <span className={styles.linkText}>{link.name}</span>
            </span>
          ))}
          {links.map((_, idx) => (
            idx < links.length - 1 && (
              <span key={'divider-' + idx} className={styles.divider}>|</span>
            )
          ))}
        </div>
      </div>
      {/* Mobile menu outside navbarContent */}
      <div className={open ? styles.linksMobileOpen : styles.linksMobile}>
        {links.map((link) => (
          <span
            key={link.id}
            className={
              styles.link +
              (active === link.id ? ' ' + styles.active : '')
            }
            onClick={() => handleClick(link.id)}
            onMouseDown={e => e.preventDefault()}
          >
            <span className={styles.linkText}>{link.name}</span>
          </span>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
