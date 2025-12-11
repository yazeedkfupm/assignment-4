# Technical Documentation – Portfolio Web App

## 1. Overview

This document explains the technical design and implementation of my personal portfolio web application.

## 2. Architecture

Frontend-only application:

- `index.html` – semantic structure and content
- `css/styles.css` – layout, theming, and responsive design
- `js/script.js` – interactivity (navigation, filters, theme toggle, form validation)

No backend or database is used. The site is deployed as static files using GitHub Pages.

## 3. HTML Structure

- `<header>` – sticky navigation bar with:
  - Logo link
  - Navigation links
  - Theme toggle button
- `<main>` sections:
  - `#hero` – introduction and call-to-action buttons
  - `#about` – short bio
  - `#skills` – grouped skill cards
  - `#projects` – project cards with filter controls
  - `#timeline` – ordered list showing chronological milestones
  - `#contact` – contact form and external links
- `<footer>` – copyright and link to AI usage report

Semantic elements improve accessibility and SEO.

## 4. Styling & Layout

- Mobile-first CSS using:
  - Flexbox for header and buttons
  - CSS Grid for hero and project layouts
- Theme variables:
  - `body.light-theme` and `body.dark-theme` define color palettes using CSS custom properties (e.g. `--bg`, `--text`, `--accent`).
- Components:
  - **Cards** for skills and projects
  - **Buttons** with primary/secondary styles
  - **Timeline** with a vertical line and circular markers
- Responsiveness:
  - `@media (max-width: 720px)` simplifies hero layout and converts navigation to a dropdown panel.

## 5. JavaScript Behavior

### 5.1 Theme Toggle

- On load:
  - Reads `localStorage` key `theme`.
  - Applies `dark-theme` or `light-theme` class on `<body>`.
- On click:
  - Toggles between dark and light theme classes.
  - Updates button icon (🌙 / ☀️).
  - Persists preference using `localStorage`.

### 5.2 Mobile Navigation

- Button `.nav-toggle` toggles `.nav-links.open` to show/hide menu.
- `aria-expanded` attribute is updated for accessibility.
- Clicking a nav link closes the menu on small screens.

### 5.3 Project Filtering

- Buttons `.filter-btn` have `data-filter` attributes (`all`, `web`, `ui`, `other`).
- Project cards `.project-card` have `data-category` attributes.
- On button click:
  - Active filter styling changes.
  - Cards that don’t match the selected category are hidden using `style.display = "none"`.

### 5.4 Contact Form Validation

- Form `#contact-form` uses basic client-side validation:
  - Checks that name, email, and message are not empty.
  - Validates email with a simple regex.
- Errors are displayed in `<small class="error-message">` under each field.
- On success, a message is shown in `#form-status` and the form resets.
- No data is sent to a backend; submission is simulated.

### 5.5 Footer Year

- The current year is injected into `#year` using `new Date().getFullYear()`.

## 6. Performance & Optimization

- No heavy frameworks; only vanilla JS and CSS.
- Single CSS and JS file each to reduce requests.
- Project prepared to use compressed images in `assets/images/`.
- Avoids external fonts and large libraries to keep load times low.

## 7. Accessibility Considerations

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`).
- `aria-label` and `aria-expanded` on navigation toggle.
- Form labels associated with inputs via `for` / `id`.
- High contrast between text and background in both themes.
- Focus outlines not removed for interactive elements.

## 8. Deployment

- Deployed via GitHub Pages:
  - Repository: `assignment-4`
  - Branch: `main`
  - GitHub Pages set to serve from root of `main`.
- After pushing to `main`, GitHub Pages builds and serves the latest version automatically.

## 9. Future Improvements

- Connect contact form to a backend or a form handling service.
- Add smooth scroll animations and section reveal effects.
- Add more detailed project pages or modals.
- Extend the portfolio with a blog or articles section.
