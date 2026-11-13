# Muhammad Qasim — Developer Portfolio
Next.js (App Router) + React + TypeScript. No UI libraries.

## Run
    npm install
    cp .env.example .env.local   # then fill values
    npm run dev                  # http://localhost:3000

## Check
    npm run typecheck && npm run lint && npm run build

## Edit content
All text, skills, projects and links live in `data/portfolio.ts`.
Project `status` and `repoUrl` / `liveUrl` are optional: add them only when real.

## Contact form
Needs `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
Without them the form shows an honest "not configured" error and sends nothing.
