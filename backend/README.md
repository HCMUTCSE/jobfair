# CSE Job Fair 2026 Backend

Express + TypeScript API for health check ping.

## Setup

1. `cp .env.example .env`
2. `npm install`
3. `npm run build`
4. `npm run start`

## Endpoints

- `GET /api/health`

## Notes

- Returns service metadata and server timestamp.
- CORS origins are controlled by `CORS_ORIGIN` (comma-separated values).
