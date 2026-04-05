/**
 * Configuration du menu des pizzas.
 * Chaque catégorie contient ses pizzas avec nom, prix et ingrédients.
 */

export interface Pizza {
  name: string;
  price: number;
  ingredients: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  pizzas: Pizza[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'base-tomate',
    title: 'Les Bases Tomates',
    description: 'Nos pizzas sur base sauce tomate maison',
    pizzas: [
      {
        name: 'Margarita',
        price: 10,
        ingredients: ['Tomate', 'Mozzarella', 'Basilic'],
      },
      {
        name: 'Diavola',
        price: 12,
        ingredients: ['Tomate', 'Basilic', 'Mozzarella', 'Chorizo'],
      },
      {
        name: 'Parme',
        price: 13,
        ingredients: ['Tomate', 'Basilic', 'Mozzarella', 'Jambon cru'],
      },
      {
        name: '3 Fromages',
        price: 13,
        ingredients: ['Tomate', 'Basilic', 'Chèvre', 'Bleu', 'Tome de vache'],
      },
      {
        name: 'Regina',
        price: 12,
        ingredients: ['Tomate', 'Mozzarella', 'Jambon blanc', 'Champignon'],
      },
      {
        name: 'Bolognaise',
        price: 13,
        ingredients: ['Tomate', 'Oignon', 'Viande hachée', 'Emmental'],
      },
      {
        name: 'Chèvre Miel',
        price: 12,
        ingredients: ['Tomate', 'Chèvre', 'Miel'],
      },
      {
        name: 'Orientale',
        price: 12,
        ingredients: ['Tomate', 'Oignons', 'Poivrons', 'Ail', 'Merguez'],
      },
      {
        name: 'Mariana',
        price: 7,
        ingredients: ['Tomate', 'Origan', 'Ail'],
      },
    ],
  },
  {
    id: 'base-creme',
    title: 'Les Bases Crème',
    description: 'Nos pizzas sur base crème fraîche',
    pizzas: [
      {
        name: 'Béninoise',
        price: 14,
        ingredients: [
          'Crème citronnée',
          'Aneth',
          'Gravlax de truite',
          'Roquette',
        ],
      },
      {
        name: '3 Fromages',
        price: 12,
        ingredients: ['Crème', 'Chèvre', 'Bleu', 'Tome de vache'],
      },
      {
        name: 'Savoyarde',
        price: 12,
        ingredients: [
          'Crème',
          'Pomme de terre',
          'Oignon',
          'Lardon',
          'Raclette',
        ],
      },
      {
        name: 'Chèvre Miel',
        price: 12,
        ingredients: ['Crème', 'Chèvre frais', 'Miel'],
      },
    ],
  },
];
