import axios from "axios";
import {
  MUTATE_DEVICE_LIST,
  MUTATE_DEVICE_ITEM,
  MUTATE_ATTR_VALUE_LIST
} from "../constants";

export const actions = {
  actFetchDevices({ commit }, classID) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}/devices`
      )
      .then(res => {
        commit(MUTATE_DEVICE_LIST, res.data);
      });
  },
  actFetchDeviceByID({ commit }, { classID, deviceID }) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/classes/${classID}/devices/${deviceID}`
      )
      .then(res => {
        commit(MUTATE_DEVICE_ITEM, res.data);
      });
  },
  actUpdateDevice({ commit }, payload) {
    let classID = payload.classID;
    let deviceID = payload.deviceID;
    let p = payload.device;
    return axios
      .put(
        `${process.env.VUE_APP_URL}/classes/${classID}/devices/${deviceID}`,
        p
      )
      .then(res => {
        commit(MUTATE_DEVICE_ITEM, res.data);
      });
  },
  actFetchDeviceAttrValues({ commit }, { deviceID }) {
    return axios
      .get(
        `${process.env.VUE_APP_URL}/devices/${deviceID}/attributes/values`
      )
      .then(res => {
        commit(MUTATE_ATTR_VALUE_LIST, res.data);
      });
  },
  actCreateDevice(noneUse, payload) {
    let classID = payload.classID;
    return axios
      .post(
        `${process.env.VUE_APP_URL}/classes/${classID}/devices`,
        payload
      )
  },
  actCreateAttribute(noneUse, payload) {
    let classID = payload.classID;
    return axios
      .post(
        `${process.env.VUE_APP_URL}/classes/${classID}/attributes`,
        payload
      )
  }
};