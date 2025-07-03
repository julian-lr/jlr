### [1.0.1] - 03-07-2025
#### Hotfix: Mobile/Cloudflare build & mobile spacing
- Added a robust `useIsMobile` React hook for mobile detection and conditional rendering of full-page navigation (desktop) vs. stacked scroll (mobile).
- Fixed all section title top spacings on mobile for a more compact layout.
- Ensured all import paths and file/folder names use correct casing for cross-platform (Cloudflare/Linux) compatibility.
- Verified that all files are present and correctly named in the repo to prevent build errors on case-sensitive systems (e.g., Cloudflare Pages).
