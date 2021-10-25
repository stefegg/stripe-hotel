import { atom } from "recoil";
import Style from "../Style";

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
  stayLength: atom({
    key: "stayLength",
    default: null,
  }),
  theme: atom({
    key: "theme",
    default: Style,
  }),
};
