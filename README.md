# CSE Job Fair 2026 Workspace

Monorepo includes:

- `frontend`: React + TypeScript + Vite application.
- `backend`: Express + TypeScript health check API.

Current version for both apps is `0.0.0`.

## Link to live site:
- Personal GitHub Pages: https://penguakauseless.github.io/jobfair/
- CSE GitHub Pages: htttps://hcmutcse.github.io/jobfair/
- CSE Official Domain: https://cse.hcmut.edu.vn/jobfair/

## Setup

1. Backend:
   - `cd backend`
   - `cp .env.example .env`
   - `npm install`
   - `npm run build`
   - `npm run start`
2. Frontend:
   - `cd frontend`
   - `cp .env.example .env`
   - `npm install`
   - `npm run dev`

## Validation Commands

- `cd frontend && npm run lint`
- `cd frontend && npm run build`
- `cd backend && npm run build`

## Frontend Notes

- Main routes: `/`, `/register`, `/seminars`, and `/brand-assets`
- Frontend is organized by page domain under `frontend/src/pages`
- Shared shell components are in `frontend/src/components/shared`
- Tailwind is removed; styling is plain CSS with colocated files
- Critical above-the-fold images are imported from `frontend/src/assets`
- Non-critical static assets are served from `frontend/public`
- 3D map model path is `frontend/public/Map.glb`
- Seminar images are grouped by order in `frontend/public/seminar-photo/{1..4}/` with `hero.jpg` and `sub.jpg`

## API Routes

- `GET /api/health`
