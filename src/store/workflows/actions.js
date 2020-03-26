import axios from "axios";
import {
  MUTATE_WORKFLOW_LIST, MUTATE_WORKFLOW, MUTATE_ACTION_LIST
} from "../constants";

export const actions = {
  actFetchWorkflowsByClassID({ commit }, classID) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}/workflows`
      )
      .then(res => {
        commit(MUTATE_WORKFLOW_LIST, res.data);
      });
  },
  actFetchWorkflowByID({ commit }, { classID, workflowID }) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}/workflows/${workflowID}`
      )
      .then(res => {
        commit(MUTATE_WORKFLOW, res.data);
      });
  },
  actFetchActionsByWorkflowID({ commit }, workflowID) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/workflows/${workflowID}/actions`
      )
      .then(res => {
        commit(MUTATE_ACTION_LIST, res.data);
      });
  }
};