import {
  MUTATE_DEVICE_LIST,
  MUTATE_DEVICE_ITEM,
  MUTATE_ATTR_VALUE_LIST
} from "../constants";

export const mutations = {
  [MUTATE_DEVICE_LIST](state, deviceList) {
    return state.devices = deviceList;
  },
  [MUTATE_DEVICE_ITEM](state, device) {
    return state.device = device;
  },
  [MUTATE_ATTR_VALUE_LIST](state, attrList) {
    return state.attrValues = attrList;
  }
};