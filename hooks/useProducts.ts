import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productState } from "@/atoms";

export default function useProducts() {
  const [products, setProducts] = useRecoilState(productState);

  const dummyData = require("../products.json");

  useEffect(() => {
    setProducts(dummyData);
  }, []);

  return { products };
}
