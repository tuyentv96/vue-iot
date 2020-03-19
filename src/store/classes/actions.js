import axios from "axios";
import {
  MUTATE_CLASS_LIST
} from "../constants";

export const actions = {
  actFetchClasses({ commit }) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes`
      )
      .then(res => {
        commit(MUTATE_CLASS_LIST, res.data);
      });
  }
};