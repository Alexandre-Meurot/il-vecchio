# Il Vecchio — Guide du projet

## Vue d'ensemble

Site vitrine pour la pizzeria **Il Vecchio** à Cransac-les-Thermes.
Angular 21+ avec SSR (Server-Side Rendering) et hydratation, optimisé pour le SEO et le mobile.

---

## Architecture du projet

```
src/
├── app/
│   ├── core/                          # Logique métier et configuration
│   │   ├── config/
│   │   │   ├── site.config.ts         # Métadonnées, coordonnées, horaires
│   │   │   └── menu.config.ts         # Carte des pizzas (prix, ingrédients)
│   │   ├── content/
│   │   │   └── texts.ts               # Tous les textes de l'application
│   │   └── services/
│   │       └── seo.service.ts         # Gestion dynamique des meta SEO + canonical
│   │
│   ├── shared/                        # Composants et utilitaires partagés
│   │   ├── components/
│   │   │   ├── header/                # Barre de navigation (responsive)
│   │   │   ├── footer/                # Pied de page
│   │   │   └── fab-call/              # Bouton flottant d'appel (mobile)
│   │   ├── directives/
│   │   │   └── reveal.directive.ts    # Animation au scroll (IntersectionObserver)
│   │   └── pipes/
│   │       └── safe-url.pipe.ts       # Pipe pour URLs sécurisées (iframe)
│   │
│   ├── pages/                         # Pages du site (lazy-loaded)
│   │   ├── home/                      # Accueil (héro, intro, engagements, teaser terrasse, CTA)
│   │   ├── menu/                      # Carte des pizzas
│   │   ├── bar-terrace/               # Bar & Terrasse (sur place, boissons, réservation)
│   │   ├── about/                     # Notre histoire / À propos
│   │   ├── contact/                   # Contact, horaires, carte Google Maps
│   │   ├── legal/                     # Mentions légales & CGU
│   │   └── not-found/                 # Page 404
│   │
│   ├── app.ts                         # Composant racine
│   ├── app.html                       # Template racine (header + router + footer + FAB)
│   ├── app.scss                       # Styles racine (layout flex)
│   ├── app.routes.ts                  # Configuration du routing
│   ├── app.config.ts                  # Configuration Angular (client + hydratation)
│   ├── app.config.server.ts           # Configuration Angular (serveur SSR)
│   └── app.routes.server.ts           # Configuration routing serveur (prerender)
│
├── styles/
│   ├── _theme.scss                    # Variables de thème (couleurs, typo, espacements)
│   ├── _reset.scss                    # Reset CSS global
│   ├── _utilities.scss                # Classes utilitaires (.container, .btn, .btn--lg…)
│   └── _animations.scss               # Animations partagées (reveal, divider, shimmer…)
│
├── index.html                         # HTML principal (meta SEO, Schema.org, fonts)
├── styles.scss                        # Point d'entrée des styles globaux
├── main.ts                            # Bootstrap client
├── main.server.ts                     # Bootstrap serveur SSR
└── server.ts                          # Serveur Express SSR

public/
├── assets/images/                     # Images du site (hero, about, terrasse, og)
├── robots.txt                         # Directives pour les moteurs de recherche
├── sitemap.xml                        # Plan du site pour le SEO
└── favicon.ico                        # Favicon
```

---

## Fichiers clés à modifier

### Changer les couleurs du site
Fichier : `src/styles/_theme.scss`
Toutes les variables CSS sont centralisées et commentées en français.

### Modifier les textes
Fichier : `src/app/core/content/texts.ts`
Tous les textes (navigation, pages, SEO) sont dans un seul objet `TEXTS`.

### Modifier le menu des pizzas
Fichier : `src/app/core/config/menu.config.ts`
Ajouter/supprimer/modifier des pizzas ou catégories.

### Modifier les informations du restaurant
Fichier : `src/app/core/config/site.config.ts`
Adresse, téléphone, horaires, modes de paiement, réseaux sociaux.

### Modifier les métadonnées SEO
- Titres et descriptions des pages : `src/app/core/content/texts.ts` (section `seo`)
- Schema.org JSON-LD : `src/index.html`
- Sitemap : `public/sitemap.xml`

---

## Routing

| Route              | Page              | Composant              |
|--------------------|-------------------|------------------------|
| `/`                | Accueil           | `HomeComponent`        |
| `/la-carte`        | La Carte          | `MenuComponent`        |
| `/bar-terrasse`    | Bar & Terrasse    | `BarTerraceComponent`  |
| `/notre-histoire`  | Notre Histoire    | `AboutComponent`       |
| `/contact`         | Contact           | `ContactComponent`     |
| `/mentions-legales`| Mentions légales  | `LegalComponent`       |
| `**`               | 404               | `NotFoundComponent`    |

Toutes les pages sont **lazy-loaded** pour optimiser les performances et **pré-rendues** au build (SSG via `RenderMode.Prerender` dans `app.routes.server.ts`).

---

## Commandes

```bash
# Développement
npm start                  # Serveur de dev (http://localhost:4200)

# Build production avec SSR
npm run build              # Build optimisé dans dist/

# Serveur SSR en production
node dist/il-vecchio/server/server.mjs
```

---

## Images à fournir

Placer les images dans `public/assets/images/` :

| Fichier          | Usage                                   | Dimensions recommandées |
|------------------|-----------------------------------------|-------------------------|
| `hero-bg.jpg`    | Fond du héro page d'accueil             | 1920x1080 min           |
| `terrasse.jpg`   | Section terrasse de la page d'accueil   | 1600x1200 min           |
| `about-bg.jpg`   | Image page Notre Histoire               | 800x1000 min            |
| `og-cover.jpg`   | Image Open Graph (partage)              | 1200x630                |

**Note :** chaque image dispose également d'une variante `.webp` (servie en
priorité via `image-set()`) pour réduire le poids et améliorer les Core Web
Vitals.

---

## SEO

Le site est optimisé pour le référencement :
- **SSR + Prerender** : toutes les routes sont pré-rendues au build (HTML statique
  servable en CDN). L'hydratation côté client réactive l'interactivité.
- **Schema.org** : données structurées `Restaurant` dans `index.html`
  (adresse, horaires, géolocalisation, `acceptsReservations`, `hasMenu`,
  `servesCuisine`, modes de paiement…).
- **Meta tags dynamiques** : titre, description, Open Graph et Twitter Cards
  mis à jour par page via `SeoService.updatePage()`.
- **Canonical URLs** : `<link rel="canonical">` mis à jour par page via
  `SeoService.setCanonicalUrl()` (utilise `inject(DOCUMENT)`, SSR-safe).
- **Open Graph / Twitter Cards** : valeurs par défaut dans `index.html`,
  surchargées par page.
- **Sitemap XML** et **robots.txt** : dans le dossier `public/`. Pensez à
  ajouter chaque nouvelle route dans `sitemap.xml`.
- **URLs sémantiques** : `/la-carte`, `/bar-terrasse`, `/notre-histoire`,
  `/contact`, `/mentions-legales`.
- **Balises sémantiques** : `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`.

### Ajouter une page (checklist SEO)

1. Créer le composant dans `src/app/pages/<nom>/`.
2. Ajouter la route dans `src/app/app.routes.ts`.
3. Ajouter le titre + description dans `texts.ts` (section `seo`).
4. Dans le composant, appeler `seo.updatePage(...)` puis
   `seo.setCanonicalUrl('/...')` dans `ngOnInit`.
5. Ajouter le lien de navigation dans `header.component.html` (desktop + mobile).
6. Ajouter l'URL dans `public/sitemap.xml`.
7. Ajouter le label de navigation dans `texts.nav` si exposé dans le menu.

---

## Responsive

Le site est conçu **mobile-first** avec des breakpoints :
- **Mobile** : < 640px
- **Tablette** : 640px – 768px
- **Desktop** : > 768px

Les tailles de police utilisent `clamp()` pour une adaptation fluide.

---

## Déploiement

Le projet génère un serveur Node.js (Express) pour le SSR. Le site est
**hébergé sur Vercel** (mentionné dans les CGU à `texts.legal.hostingText`).
Le projet reste compatible avec d'autres plateformes Node : Netlify, Railway, VPS.

Pour un déploiement statique (sans SSR), modifier `outputMode` dans `angular.json` :
```json
"outputMode": "static"
```

> En cas de changement d'hébergeur, mettre à jour `texts.legal.hostingText`
> (nom, adresse, contact) ainsi que cette section, conformément à la LCEN.
