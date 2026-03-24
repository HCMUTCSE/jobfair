# CSE Job Fair 2026 Frontend

React + TypeScript + Vite frontend for CSE Job Fair pages.

## Commands

- `npm install`
- `npm run lint`
- `npm run build`
- `npm run dev`

## Environment

- Run `cp .env.example .env`.
- Configure `VITE_API_BASE_URL` if backend is not `http://localhost:4000/api`.

## Routes

- `/` Home page
- `/register` Register split page
- `/seminars` Seminar information and modal details
- `/brand-assets` Brand assets page

## Structure

- `src/app/App.tsx` route setup
- `src/pages/home` Home page and page-owned sections
- `src/pages/register` Register page
- `src/pages/seminars` Seminars page
- `src/pages/brand` Brand assets page
- `src/components/shared` shared shell components (Navbar, Footer)
- `src/assets` critical above-the-fold images imported by pages
- `public` non-critical static assets (logos, map model, seminar photos)

## Styling

- Tailwind has been removed.
- Global base styles and tokens are in `src/index.css`.
- Each page/component keeps colocated CSS with prefixed selectors.

## Naming Rules

- Components: PascalCase
- Variables/functions: camelCase
- Seminar photo groups: `public/seminar-photo/{1..4}/hero.jpg` and `public/seminar-photo/{1..4}/sub.jpg`
