import { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'

// Navigation links for the navbar. Each id should match a section in the page.
const links = [
  { name: 'Home', id: 'home' },
  { name: 'About me', id: 'aboutme' },
  { name: 'Work experience', id: 'workexperience' },
  { name: 'Education', id: 'education' },
  { name: 'Courses', id: 'courses' },
  { name: 'Contact', id: 'contact' },
]

// SVG icon for sun (light mode)
function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <g stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  )
}

// SVG icon for moon (dark mode)
function MoonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="currentColor" />
    </svg>
  )
}

function Navbar() {
  // Track which link is active (for highlight)
  const [active, setActive] = useState('home')
  // Track if the mobile menu is open
  const [open, setOpen] = useState(false)
  // Track the current theme (light/dark)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // On first render, check the current data-theme or default to light
    if (typeof window !== 'undefined') {
      return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'light';
    }
    return 'light';
  });

  // Update the data-theme attribute on the <html> element when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Handle link click: set active, close mobile menu, scroll to section
  const handleClick = (id: string) => {
    setActive(id)
    setOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <nav className={styles.navbar}>
      {/* Navbar content: logo, burger, desktop links, theme toggle */}
      <div className={styles.navbarContent}>
        <span className={styles.logo}>JLR</span>
        {/* Burger menu button for mobile */}
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
        {/* Desktop menu: links and dividers, theme toggle at end */}
        <div className={styles.linksDesktop}>
          {links.map((link, idx) => (
            <>
              {/* Nav link */}
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
              {/* Divider between links, not after last */}
              {idx < links.length - 1 && (
                <span key={'divider-' + idx} className={styles.divider}>|</span>
              )}
            </>
          ))}
          {/* Theme toggle button (SVG icon) */}
          <button
            className={styles.themeToggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
      {/* Mobile menu: links stacked, theme toggle centered below */}
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
        {/* Theme toggle centered in mobile menu */}
        <button
          className={styles.themeToggle}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          onClick={toggleTheme}
          type="button"
        >
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
