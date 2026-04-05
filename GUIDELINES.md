# Il Vecchio — Guide du projet

## Vue d'ensemble

Site vitrine pour la pizzeria **Il Vecchio** à Cransac-les-Thermes.
Angular 19+ avec SSR (Server-Side Rendering), optimisé pour le SEO et le mobile.

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
│   │   │   └── texts.ts              # Tous les textes de l'application
│   │   └── services/
│   │       └── seo.service.ts         # Gestion dynamique des meta SEO
│   │
│   ├── shared/                        # Composants et utilitaires partagés
│   │   ├── components/
│   │   │   ├── header/                # Barre de navigation (responsive)
│   │   │   └── footer/                # Pied de page
│   │   └── pipes/
│   │       └── safe-url.pipe.ts       # Pipe pour URLs sécurisées (iframe)
│   │
│   ├── pages/                         # Pages du site (lazy-loaded)
│   │   ├── home/                      # Page d'accueil (héro, intro, CTA)
│   │   ├── menu/                      # Carte des pizzas
│   │   ├── about/                     # Notre histoire / À propos
│   │   └── contact/                   # Contact, horaires, carte Google Maps
│   │
│   ├── app.ts                         # Composant racine
│   ├── app.html                       # Template racine (header + router + footer)
│   ├── app.scss                       # Styles racine (layout flex)
│   ├── app.routes.ts                  # Configuration du routing
│   ├── app.config.ts                  # Configuration Angular (client)
│   ├── app.config.server.ts           # Configuration Angular (serveur SSR)
│   └── app.routes.server.ts           # Configuration routing serveur
│
├── styles/
│   ├── _theme.scss                    # Variables de thème (couleurs, typo, espacements)
│   ├── _reset.scss                    # Reset CSS global
│   └── _utilities.scss                # Classes utilitaires (.container, .btn, etc.)
│
├── index.html                         # HTML principal (meta SEO, Schema.org, fonts)
├── styles.scss                        # Point d'entrée des styles globaux
├── main.ts                            # Bootstrap client
├── main.server.ts                     # Bootstrap serveur SSR
└── server.ts                          # Serveur Express SSR

public/
├── assets/images/                     # Images du site (hero, about, og)
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

| Route              | Page           | Composant          |
|--------------------|----------------|--------------------|
| `/`                | Accueil        | `HomeComponent`    |
| `/la-carte`        | La Carte       | `MenuComponent`    |
| `/notre-histoire`  | Notre Histoire | `AboutComponent`   |
| `/contact`         | Contact        | `ContactComponent` |

Toutes les pages sont **lazy-loaded** pour optimiser les performances.

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

| Fichier          | Usage                          | Dimensions recommandées |
|------------------|--------------------------------|-------------------------|
| `hero-bg.jpg`    | Fond du héro page d'accueil    | 1920x1080 min           |
| `about-bg.jpg`   | Image page Notre Histoire      | 800x1000 min            |
| `og-cover.jpg`   | Image Open Graph (partage)     | 1200x630                |

---

## SEO

Le site est optimisé pour le référencement :
- **SSR** : rendu côté serveur pour un contenu indexable
- **Schema.org** : données structurées Restaurant dans `index.html`
- **Meta tags** : gérés dynamiquement par page via `SeoService`
- **Open Graph / Twitter Cards** : configurés dans `index.html`
- **Sitemap XML** et **robots.txt** : dans le dossier `public/`
- **URLs sémantiques** : `/la-carte`, `/notre-histoire`, `/contact`
- **Balises sémantiques** : `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`

---

## Responsive

Le site est conçu **mobile-first** avec des breakpoints :
- **Mobile** : < 640px
- **Tablette** : 640px – 768px
- **Desktop** : > 768px

Les tailles de police utilisent `clamp()` pour une adaptation fluide.

---

## Déploiement

Le projet génère un serveur Node.js (Express) pour le SSR.
Compatible avec les plateformes : **Vercel**, **Netlify**, **Railway**, **VPS**.

Pour un déploiement statique (sans SSR), modifier `outputMode` dans `angular.json` :
```json
"outputMode": "static"
```
