# Pryzon Website

One-page Vite + React + Tailwind CSS website for Pryzon, a cybersecurity startup offering paid cyber exposure checks and business security reviews for small businesses.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The project is ready for Vercel or Netlify. Both platforms can install dependencies and run `npm run build`. Netlify is configured to publish `dist` using `netlify.toml`; Vercel is configured with `vercel.json`.

The hero is implemented as a canvas-based interactive particle effect in `src/components/ParticleHero.jsx`. It is scoped to the top section only, with reduced interaction on mobile.
