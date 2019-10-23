export const state = {
  products: [],
  bundles: [],
  cards: []
};

export const getters = {
  getProducts: state => state.products,
  getBundles: state => state.bundles,
  getCards: state => state.cards
};