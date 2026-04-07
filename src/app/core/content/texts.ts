/**
 * Textes de l'application Il Vecchio.
 * Centralise tous les contenus textuels pour faciliter les modifications.
 */

export const TEXTS = {
  /** Navigation */
  nav: {
    home: 'Accueil',
    menu: 'La Carte',
    about: 'Notre Histoire',
    contact: 'Contact',
    cta: 'Commander',
  },

  /** Page d'accueil */
  home: {
    heroTitle: 'Il Vecchio',
    heroSubtitle: 'Pizza artisanale au feu de bois',
    heroCta: 'Découvrir la carte',
    heroSecondary: 'Nous contacter',

    introTitle: 'L\'art de la pizza traditionnelle',
    introText:
      'Chez Il Vecchio, chaque pizza est confectionnée à la main avec passion. ' +
      'Notre farine locale provient du Moulin Castanié et nos produits sont sélectionnés ' +
      'pour leur qualité, issus pour la plupart de l\'agriculture biologique et de producteurs locaux.',

    highlightsTitle: 'Nos engagements',
    highlights: [
      {
        icon: 'fire',
        title: 'Cuisson au feu de bois',
        text: 'Une cuisson traditionnelle pour une pâte croustillante et savoureuse.',
      },
      {
        icon: 'wheat',
        title: 'Farine locale',
        text: 'Farine du Moulin Castanié, pour une pâte authentique et de qualité.',
      },
      {
        icon: 'leaf',
        title: 'Produits bio & locaux',
        text: 'Des ingrédients sélectionnés auprès de producteurs locaux et biologiques.',
      },
    ],

    ctaTitle: 'Envie d\'une pizza ?',
    ctaText: 'Passez commande par téléphone et récupérez votre pizza toute chaude.',
    ctaButton: 'Appeler maintenant',
  },

  /** Page Menu / La Carte */
  menu: {
    title: 'La Carte',
    subtitle: 'Toutes nos pizzas sont faites maison, cuites au feu de bois',
    badge: 'À emporter',
    priceUnit: '€',
    note: 'Tous nos produits peuvent contenir des allergènes. N\'hésitez pas à nous consulter.',
  },

  /** Page À Propos */
  about: {
    title: 'Notre Histoire',
    subtitle: 'La passion de la pizza artisanale',

    storyTitle: 'Il Vecchio',
    storyText: [
      'Il Vecchio est une pizzeria artisanale installée au cœur de Cransac-les-Thermes. ' +
      'Notre passion pour la pizza traditionnelle se traduit dans chaque création, ' +
      'de la préparation de la pâte à la cuisson au feu de bois.',

      'Chaque pizza est confectionnée à la main avec de la farine locale du Moulin Castanié. ' +
      'Nous sélectionnons nos produits avec soin, privilégiant les producteurs locaux ' +
      'et l\'agriculture biologique pour vous offrir des saveurs authentiques.',

      'Notre engagement : vous proposer une pizza de qualité, préparée avec des ingrédients ' +
      'frais et locaux, dans le respect de la tradition italienne.',
    ],

    valuesTitle: 'Nos Valeurs',
    values: [
      {
        title: 'Authenticité',
        text: 'Des recettes traditionnelles, une cuisson au feu de bois, un savoir-faire artisanal.',
      },
      {
        title: 'Qualité',
        text: 'Des ingrédients frais, une farine locale, des produits issus de l\'agriculture biologique.',
      },
      {
        title: 'Local',
        text: 'Un ancrage dans notre territoire, des partenariats avec les producteurs de la région.',
      },
    ],
  },

  /** Page Contact */
  contact: {
    title: 'Contact',
    subtitle: 'Retrouvez-nous à Cransac-les-Thermes',

    infoTitle: 'Nos coordonnées',
    hoursTitle: 'Horaires d\'ouverture',
    paymentTitle: 'Modes de paiement',

    ctaPhone: 'Appeler pour commander',
    ctaDirection: 'Itinéraire',

    mapAlt: 'Localisation d\'Il Vecchio à Cransac-les-Thermes',
  },

  /** Page 404 */
  notFound: {
    code: '404',
    title: 'Cette pizza n\'existe pas… encore !',
    text: 'La page que vous cherchez semble avoir été dévorée. Pas de panique, notre carte et notre accueil sont toujours là.',
    ctaHome: 'Retour à l\'accueil',
    ctaMenu: 'Voir la carte',
  },

  /** Page Mentions légales / CGU */
  legal: {
    title: 'Mentions légales & CGU',
    subtitle: 'Conditions générales d\'utilisation',

    editorTitle: 'Éditeur du site',
    editorText:
      'Le site il-vecchio.fr est édité par Il Vecchio, pizzeria artisanale.\n' +
      'Adresse : 6 rue du 14 Juillet, 12110 Cransac-les-Thermes, France.\n' +
      'Téléphone : 06 28 63 95 88.',

    hostingTitle: 'Hébergement',
    hostingText:
      'Le site est hébergé par [Nom de l\'hébergeur], ' +
      '[Adresse de l\'hébergeur]. ' +
      'Téléphone : [Téléphone de l\'hébergeur].',

    intellectualPropertyTitle: 'Propriété intellectuelle',
    intellectualPropertyText:
      'L\'ensemble du contenu de ce site (textes, images, logos, photographies, vidéos) ' +
      'est protégé par le droit d\'auteur. Toute reproduction, représentation, modification, ' +
      'publication ou adaptation de tout ou partie des éléments du site est interdite ' +
      'sans l\'autorisation écrite préalable d\'Il Vecchio.',

    personalDataTitle: 'Données personnelles',
    personalDataText:
      'Ce site ne collecte aucune donnée personnelle. Aucun formulaire de contact, ' +
      'cookie de suivi ou outil d\'analyse n\'est utilisé. ' +
      'Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi ' +
      'Informatique et Libertés, vous disposez d\'un droit d\'accès, de rectification et de ' +
      'suppression de vos données. Pour exercer ce droit, contactez-nous par téléphone.',

    liabilityTitle: 'Responsabilité',
    liabilityText:
      'Il Vecchio s\'efforce de fournir des informations aussi précises que possible. ' +
      'Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ' +
      'ou des carences dans la mise à jour, qu\'elles soient de son fait ou du fait des ' +
      'tiers partenaires qui lui fournissent ces informations. Les prix et disponibilités ' +
      'indiqués sur le site sont donnés à titre indicatif et peuvent être modifiés à tout moment.',

    cookiesTitle: 'Cookies',
    cookiesText:
      'Ce site n\'utilise aucun cookie de suivi ni cookie publicitaire. ' +
      'Seuls des cookies strictement nécessaires au fonctionnement technique du site ' +
      'peuvent être utilisés.',

    cguTitle: 'Conditions générales d\'utilisation',
    cguText:
      'L\'utilisation du site il-vecchio.fr implique l\'acceptation pleine et entière ' +
      'des conditions générales d\'utilisation décrites ci-dessous. Ces conditions sont ' +
      'susceptibles d\'être modifiées à tout moment. L\'utilisateur est invité à les consulter ' +
      'régulièrement. Ce site est accessible gratuitement à tout utilisateur disposant d\'un ' +
      'accès à Internet. Tous les frais liés à l\'accès au site sont à la charge de l\'utilisateur.',

    applicableLawTitle: 'Droit applicable',
    applicableLawText:
      'Tout litige en relation avec l\'utilisation du site il-vecchio.fr est soumis au droit français. ' +
      'Il est fait attribution exclusive de juridiction aux tribunaux compétents de Rodez.',

    lastUpdate: 'Dernière mise à jour : avril 2026',
  },

  /** Footer */
  footer: {
    copyright: '© {year} Il Vecchio — Tous droits réservés',
    tagline: 'Pizza artisanale au feu de bois — Cransac-les-Thermes',
    legalMention: 'Mentions légales & CGU',
  },

  /** SEO — Titres des pages */
  seo: {
    homeTitle: 'Il Vecchio — Pizza artisanale au feu de bois | Cransac-les-Thermes',
    menuTitle: 'La Carte — Nos Pizzas | Il Vecchio',
    aboutTitle: 'Notre Histoire | Il Vecchio — Pizzeria artisanale',
    contactTitle: 'Contact & Horaires | Il Vecchio — Cransac-les-Thermes',

    homeDescription:
      'Il Vecchio, pizzeria artisanale à Cransac-les-Thermes. Pizzas cuites au feu de bois, farine locale du Moulin Castanié, produits bio et locaux. À emporter.',
    menuDescription:
      'Découvrez notre carte de pizzas artisanales : bases tomate et crème, ingrédients locaux et bio. À emporter à Cransac-les-Thermes.',
    aboutDescription:
      'Découvrez l\'histoire d\'Il Vecchio, pizzeria artisanale à Cransac-les-Thermes. Farine locale, produits bio, cuisson au feu de bois.',
    contactDescription:
      'Contactez Il Vecchio pour commander vos pizzas artisanales. Horaires, adresse et téléphone à Cransac-les-Thermes.',
    legalTitle: 'Mentions légales & CGU | Il Vecchio',
    legalDescription:
      'Mentions légales, conditions générales d\'utilisation et politique de confidentialité du site Il Vecchio, pizzeria artisanale à Cransac-les-Thermes.',
  },
} as const;
