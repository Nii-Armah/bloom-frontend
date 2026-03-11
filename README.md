# bloom-frontend

Frontend for Bloom

## Frontend Framework: Next.js

**Why Next.js over alternatives(React (Vite), Vue/Nuxt, Svelte, Angular):**

1. **SEO (Marketplace requirement)**
   - Professional profiles need discoverability
   - SSR/SSG improves search ranking
   - React SPA cannot do this

2. **Performance**
   - Automatic code splitting
   - Image optimization built-in
   - API routes for lightweight backend calls

3. **Full-Stack Development**
   - API routes handle auth, validation
   - Faster feedback loop (API + UI in same project)
   - Reduces backend dependency during frontend dev

4. **Developer Experience**
   - File-based routing (vs React Router config)
   - Fast refresh, HMR
   - Unified TypeScript setup

5. **Production Ready**
   - Built-in deployment (Vercel, others)
   - Automatic static optimization
   - Edge functions for scalability

**Trade-off:** More opinionated than React. But for this project, beneficial (faster shipping).
