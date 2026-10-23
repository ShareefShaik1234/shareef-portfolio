# Shaik Baba Shareef — Developer Portfolio

A responsive React + Vite portfolio based on the supplied resume. It uses a dark editorial design, custom CSS project visuals, responsive navigation, skills, projects, internship experience, education, certifications, and contact links.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in the project directory.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy on Render (static site)
1. Push this project to a GitHub repository.
2. In Render, choose **New + → Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy.

## Resume
The provided resume is copied to `public/ShareefShaik_NEW.pdf`. Replace this file with the latest approved PDF, keeping the same filename, or update `profile.resume` in `src/main.jsx`.

## Before publishing
- Confirm the GitHub profile URL in `src/main.jsx`.
- Add the exact LinkedIn profile URL to `profile.linkedin` (currently omitted because the source PDF text did not expose the actual URL).
- Confirm that the Online Booking System and E-Commerce Backend System repository/demo URLs are available. The site intentionally does not invent those links.
- Verify phone and email are suitable for public display.
- Review all certification names and profile links.
- Test the downloaded resume after deployment.

## Notes
- No backend is used. The contact CTA opens the visitor's email application using a `mailto:` link; it does not claim to submit a server-side contact form.
- Project illustrations are built with CSS and do not depend on external image services.
