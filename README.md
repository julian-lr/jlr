# Julián Laurito Riscica - Personal Website

## Tech Stack

- Vite (build tool)
- React (with TypeScript)
- SCSS Modules (modular, component-scoped styles)
- DM Serif Text (custom web font)
- CSS Variables (for theme and color management)
- Responsive, mobile-first design

## Changelog

### [0.1.3] - 29-06-2025
- First push of all the commits (despite being 0.1.3)
- Adopted Semantic Versioning (SemVer) for all future releases
- Home page: profile image (circular, CSS), name with colored last names, concise roles with centered dots, fully responsive
- All pages: always cover 100% width and at least 100vh height
- Navbar: improved divider logic, theme toggle with SVG icons (black sun, white moon), toggle button always ≤320px, centered in mobile
- Navbar mobile menu: background more opaque for readability
- Color system: all colors use CSS variables, theme switching via data-theme
- Code: added clear comments to all major files for maintainability
- Layout: removed root max-width restriction, now full width

### [0.1.2] - 28-06-2025
- Completed navbar color scheme adaptation
- Added a theme toggle to switch between light and dark mode (light mode is the default, even if the user’s OS prefers dark)
- Theme toggle works on both mobile and desktop

### [0.1.1] - 24-06-2025
- Began readapting the navbar color scheme and functionality (work in progress)

### [0.1.0] - 20-06-2025
- Initial version: Responsive navbar with two layouts (logo left/links right for desktop, burger menu for mobile)
- Created placeholder files and folders for all pages and the footer
- Transitioned styles from CSS to SCSS
- Implemented Arvo font for the website