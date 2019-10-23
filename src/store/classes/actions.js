import axios from "axios";
import {
  MUTATE_BUNDLE_LIST,
  MUTATE_CARD_LIST
} from "../constants";

export const actions = {
  actFetchProductByOrg({ commit }, { orgID, productType }) {
    return axios
      .get(
        `${process.env.VUE_APP_ES}/orgs/${orgID}/products?type=${productType}`
      )
      .then(res => {
        switch (productType) {
          case "bundle":
            commit(MUTATE_BUNDLE_LIST, res.data);
            break;
          case "card":
            commit(MUTATE_CARD_LIST, res.data);
            break;
          default:
            var lstBundle = [];
            var lstCard = [];
            res.data.forEach(p => {
              if (p.productType == "bundle") {
                lstBundle.push(p)
              } else if (p.productType == "card") {
                lstCard.push(p)
              }
            })
            commit(MUTATE_BUNDLE_LIST, lstBundle);
            commit(MUTATE_CARD_LIST, lstCard);
            break;
        }
      });
  },
  actFetchProductByID(noneUse, { orgID, productID }) {
    return axios.get(`${process.env.VUE_APP_ES}/orgs/${orgID}/products/${productID}`)
  }

};