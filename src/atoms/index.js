import { atom } from "recoil";

export default {
  cart: atom({
    key: "cart",
    default: null,
  }),
  showSiteModal: atom({
    key: "showSiteModal",
    default: null,
  }),
  checkout: atom({
    key: "checkout",
    default: false,
  }),
};
