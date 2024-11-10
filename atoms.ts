import { atom } from "recoil";
import { ProductType } from "./constants/Types";

export const productState = atom({
  key: "productState",
  default: [] as ProductType[],
});

export const searchState = atom({
  key: "searchState",
  default: "" as string,
});

export const cartState = atom({
  key: "cartState",
  default: [] as any[],
});
