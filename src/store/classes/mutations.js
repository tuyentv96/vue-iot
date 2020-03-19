import { MUTATE_CLASS_LIST, MUTATE_CLASS_ITEM, MUTATE_ATTR_LIST } from "../constants";

export const mutations = {
  [MUTATE_CLASS_LIST](state, classList) {
    return state.classes = classList;
  },
  [MUTATE_CLASS_ITEM](state, classI) {
    return state.class = classI;
  },
  [MUTATE_ATTR_LIST](state, attrs) {
    return state.attrs = attrs;
  }
};