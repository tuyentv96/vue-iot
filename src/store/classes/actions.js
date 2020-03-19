import axios from "axios";
import {
  MUTATE_CLASS_LIST, MUTATE_CLASS_ITEM, MUTATE_ATTR_LIST
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
  },
  actFetchClassByID({ commit }, classID) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}`
      )
      .then(res => {
        commit(MUTATE_CLASS_ITEM, res.data);
      });
  },
  actCreateClass(noneUse, payload) {
    return axios
      .post(
        `${process.env.VUE_APP_URL}/classes`,
        payload
      )
  },
  actFetchAttributesByClassID({ commit }, classID) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}/attributes`
      )
      .then(res => {
        commit(MUTATE_ATTR_LIST, res.data);
      });
  },
};