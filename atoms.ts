import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: [] as any[],
});

export const searchState = atom({
  key: "searchState",
  default: "",
});
