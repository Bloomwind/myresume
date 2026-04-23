# Haoheng Huang Portfolio (React + Vite + Tailwind)

A production-ready personal portfolio / resume website for an AI systems and ML engineer profile.

## Stack

- React 19 + Vite
- Tailwind CSS (v3)
- Modular section components
- Data-driven content from a single file

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Where to Edit Content

All profile text and links are centralized in:

- `src/data/profile.js` (shared links + locale composition)
- `src/data/locales/en.js` (English content)
- `src/data/locales/zh.js` (Simplified Chinese content)

Update locale files to change:

- Hero copy
- About/experience/projects/skills/education/contact content
- Placeholder links for GitHub, LinkedIn, email, and resume path are in `src/data/profile.js`

## Resume + Social Placeholders

Default placeholders are in `src/data/profile.js`:

- `links.github`
- `links.linkedin`
- `links.email`
- `links.resumePdf`

Resume placement (exact):

1. Put your PDF inside `public/`.
2. Use this filename: `Haoheng_Huang_Resume.pdf`
3. Final path should be: `public/Haoheng_Huang_Resume.pdf`
4. In `src/data/profile.js`, ensure `links.resumePdf` is set to `/Haoheng_Huang_Resume.pdf`

If you rename the file, only update `links.resumePdf` in `src/data/profile.js`.

## Deployment

### Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Vercel will auto-detect Vite settings.
4. Build command: `npm run build`
5. Output directory: `dist`

No extra config is required for standard root-domain deployment.

### GitHub Pages

This project supports configurable base paths using `VITE_BASE_PATH` in `vite.config.js`.

1. Set your repository name, e.g. `my-portfolio`.
2. Build with a repo base path:

```bash
VITE_BASE_PATH=/my-portfolio/ npm run build
```

3. Deploy the `dist` folder to `gh-pages` (using your preferred method, such as `gh-pages` package or a GitHub Actions workflow).

If deploying to a user/org root page (for example `username.github.io`), use:

```bash
npm run build
```

## Project Structure

```text
src/
  components/     # Reusable UI components
  data/           # Single source for profile content
  hooks/          # Theme, active-section, reveal animation hooks
  sections/       # Page sections
  App.jsx         # Page composition
  index.css       # Global styles + design tokens
```

## Notes

- Sticky navigation with active section highlight
- Smooth scrolling
- Responsive layout for mobile/tablet/desktop
- Scroll reveal animations
- Dark mode and language preference are both stored in localStorage
- SEO title + meta description + favicon placeholder
