# BDI WWW — Next.js (dark-mode-first) + Sanity + CI

## macOS — szybki start lokalny
1. Rozpakuj paczkę.
2. Otwórz Terminal i przejdź do folderu projektu:
   ```bash
   cd ~/Downloads/bdi-www-plus
   npm i
   npm run dev
   ```
3. Otwórz `http://localhost:3000`.

## Pierwszy push na GitHub (repo: krzysztof-bdi/bdi-www)
```bash
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/krzysztof-bdi/bdi-www.git
git push -u origin main
```

## Vercel (opcjonalny preview)
- Importuj repo z GitHub → Deploy.

## Sanity Studio
1. Utwórz projekt na sanity.io i skopiuj `projectId` + `dataset`.
2. W katalogu głównym utwórz `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Uruchom Studio:
   ```bash
   cd studio
   npm i
   npm run dev  # http://localhost:3333
   ```

## Resolver sekcji
`components/resolved/section-resolver.tsx` mapuje:
- `featureGrid` → `FeatureGrid`
- `stats` → `Stats`
- `testimonial` → `Testimonial`
- `rich` → `Rich`
