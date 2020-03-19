export const state = {
  classes: [],
  class: {},
  attrs: []
};

export const getters = {
  getClasses: state => state.classes,
  getClass: state => state.class,
  getAttrs: state => state.attrs
};