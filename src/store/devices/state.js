export const state = {
  devices: [],
  device: {},
  attrValues: []
};

export const getters = {
  getDevices: state => state.devices,
  getDevice: state => state.device,
  getAttrValues: state => state.attrValues
};