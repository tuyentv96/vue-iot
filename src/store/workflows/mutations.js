import {
  MUTATE_WORKFLOW_LIST,
  MUTATE_WORKFLOW,
  MUTATE_ACTION_LIST
} from "../constants";

export const mutations = {
  [MUTATE_WORKFLOW_LIST](state, workflows) {
    return state.workflows = workflows;
  },
  [MUTATE_WORKFLOW](state, workflow) {
    return state.workflow = workflow;
  },
  [MUTATE_ACTION_LIST](state, actions) {
    return state.actions = actions;
  }
};