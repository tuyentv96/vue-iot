export const state = {
  workflows: [],
  workflow: {},
  actions: []
};

export const getters = {
  getWorkflows: state => state.workflows,
  getWorkflow: state => state.workflow,
  getActions: state => state.actions
};