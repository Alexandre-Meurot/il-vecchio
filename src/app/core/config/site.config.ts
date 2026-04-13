/**
 * Configuration globale du site Il Vecchio.
 * Centralise les métadonnées, coordonnées et informations SEO.
 */

export interface OpeningHours {
  days: string;
  hours: string;
}

export const SITE_CONFIG = {
  /** Nom de l'établissement */
  name: 'Il Vecchio',

  /** Slogan / baseline */
  tagline: 'Pizza artisanale au feu de bois',

  /** Description SEO principale */
  description:
    'Il Vecchio — Pizzeria artisanale à Cransac-les-Thermes. Pizzas cuites au feu de bois, farine locale du Moulin Castanié, produits bio et locaux. À emporter.',

  /** Mots-clés SEO */
  keywords: [
    'pizzeria',
    'pizza artisanale',
    'feu de bois',
    'Cransac-les-Thermes',
    'à emporter',
    'pizza bio',
    'produits locaux',
    'Aveyron',
    'Il Vecchio',
  ],

  /** URL canonique du site (à adapter au déploiement) */
  url: 'https://pizzeria-il-vecchio.fr',

  /** Langue du site */
  lang: 'fr',

  /** Image OG par défaut (chemin relatif depuis /assets) */
  ogImage: 'assets/images/og-cover.jpg',

  /** Coordonnées */
  contact: {
    phone: '+33628639588',
    phoneDisplay: '06 28 63 95 88',
    email: '',
    address: {
      street: '6 rue du 14 Juillet',
      city: 'Cransac-les-Thermes',
      postalCode: '12110',
      country: 'France',
    },
    coordinates: {
      lat: 44.525100,
      lng: 2.283650,
    },
  },

  /** Horaires d'ouverture */
  hours: [
    { days: 'Lundi – Mardi', hours: '17h00 – 22h00' },
    { days: 'Mercredi', hours: '17h30 – 22h00' },
    { days: 'Jeudi – Samedi', hours: '17h00 – 22h00' },
    { days: 'Dimanche', hours: '17h00 – 22h00' },
  ] as OpeningHours[],

  /** Modes de paiement acceptés */
  paymentMethods: ['Carte bancaire', 'Chèque', 'Espèces'],

  /** Réseaux sociaux */
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61579564966850',
    instagram: '',
  },

  /** Données structurées Schema.org */
  schema: {
    type: 'Restaurant',
    cuisineType: 'Pizza',
    priceRange: '€',
    servesCuisine: 'Italienne',
  },
} as const;
