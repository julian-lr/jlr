# Julián Laurito Riscica - Personal Website

## Tech Stack

- Vite (build tool)
- React (with TypeScript)
- SCSS Modules (modular, component-scoped styles)
- DM Serif Text (custom web font)
- CSS Variables (for theme and color management)
- Responsive, mobile-first design

## Changelog

### [1.0.5] - 07-07-2025
- **Contact Form Migration**: Migrated contact form from web3forms to a native Cloudflare Pages function (`/functions/api/contact.js`) using Resend API for email delivery.
- **Enhanced Email Handling**: Contact form now sends emails via Resend with proper formatting, reply-to headers, and professional templates.
- **Improved User Feedback**: Added dynamic response messages from the server, loading states ("Sending..."), and better error handling for network issues.
- **CORS Support**: Added proper CORS headers to the contact endpoint for cross-origin requests during development.

### [1.0.4] - 07-07-2025
- Updated meta descriptions to match the exact opening text from About Me section for better search engine results.
- Updated all domain references from placeholder to actual domain (julianlr.com) in canonical URL, Open Graph, and Twitter meta tags.

### [1.0.3] - 05-07-2025
- Centered course names and dates in the Courses section on mobile for improved readability and visual balance.
- Added personalized SEO meta tags, Open Graph, and Twitter Card tags for improved discoverability and social sharing.
- Set meta description, author, robots, canonical URL, and social preview image/title/description for portfolio branding.
- Added mobile-only scrollspy: navbar links now highlight based on the section heading (or Home profile image) currently visible on screen.
- Improved scrollspy logic for reliability and correct section detection as you scroll.

### [1.0.2] - 03-07-2025
- Updated favicon to a custom SVG logo (JLR) for a unique browser tab icon.
- Changed the page title in `<head>` to "Julián Laurito Riscica – Portfolio" for a professional appearance.

### [1.0.1] - 03-07-2025
#### Hotfix: Mobile/Cloudflare build, mobile spacing, and Courses layout
- Added a robust `useIsMobile` React hook for mobile detection and conditional rendering of full-page navigation (desktop) vs. stacked scroll (mobile).
- Fixed all section title top spacings on mobile for a more compact layout.
- Ensured all import paths and file/folder names use correct casing for cross-platform (Cloudflare/Linux) compatibility.
- Verified that all files are present and correctly named in the repo to prevent build errors on case-sensitive systems (e.g., Cloudflare Pages).
- Refactored the Courses section for a consistent, mobile-friendly layout: course names are always left-aligned, and dates are clearly presented below or to the right depending on screen size.

### [1.0.0] - 03-07-2025
- Finalized all code and UI/UX for production-ready release.
- Contact form now uses FormData for full compatibility with web3forms (fixes email delivery issue).
- Cleaned up all code comments: removed placeholder notes, kept only meaningful explanations.
- Ensured consistent bottom padding and layout for all sections, including Contact and Gallery.
- Verified all navigation, scroll, and accessibility features work as intended.
- Project is now complete and ready for deployment.

### [0.1.4] - 01-07-2025
- Lifted `currentSection` state to `App.tsx` to unify control between navbar clicks, scroll, and swipe, and synced `Navbar` active state with current section at all times.
- Integrated all full-page sections (`Home`, `About Me`, `Work Experience`, `Gallery`, etc.) into a centralized map and introduced a custom scroll/snap transition system mimicking fullPage.js behavior (scroll/swipe transitions only at section edges, mobile swipe support, iOS pull-to-refresh prevention).
- Navbar: fully mobile-first, animated burger menu, SVG theme toggle, divider logic, and active link highlighting (now synced with scroll/swipe/click).
- Switched primary font to DM Serif Text (locally hosted); removed all Arvo references and assets.
- Light mode is now default; dark mode is optional and toggled via the navbar. All colors and backgrounds use CSS variables for easy theme switching.
- Added new `Gallery` page between `Work Experience` and `Education` in both scroll order and navbar, with a fully responsive 3-column grid displaying 5 featured projects (local preview images, h3 titles, short professional descriptions, clear distinction between course projects and personal tools, and deprecated Allnighter v2 marked as such).
- Created the `WorkExperience` page from scratch, using a narrative style for each role, splitting jobs accurately by position, and displaying jobs in a timeline-like format.
- Rewrote the About Me page for a more personal and professional tone, with improved vertical alignment and responsive padding for desktop and mobile.
- Replaced all section headings with semantic `<h2>` (only one `<h1>` used on Home for SPA compliance), switched Gallery card titles to `<h3>`, and applied consistent styles to section titles for accessibility and SEO.
- All pages always cover 100% width and at least 100vh height; removed root max-width restriction for true full-width layouts.
- Removed extra spacing between card image, title, and description, and removed default `margin-top` on card `<p>` tags for a tighter layout.
- Fixed all section backgrounds to use `var(--color-bg)` for full dark mode compatibility, and confirmed all text and elements inherit themed colors from global variables.
- General code cleanup, comments, and refactoring for maintainability.
- Fixed all import paths and folder structure issues after attempted refactor.
- All transitions (scrolling, clicking navbar, swiping) now work seamlessly between all pages, and all scroll bugs (e.g., not being able to scroll back to Home or top of About Me) have been fixed.

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