import { MUTATE_CLASS_LIST } from "../constants";

export const mutations = {
  [MUTATE_CLASS_LIST](state, classList) {
    return state.classes = classList;
  }
};