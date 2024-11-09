import { StyleSheet, Text, View, FlatList } from "react-native";
import { useRecoilValue } from "recoil";
import { productState } from "@/atoms";
import ProductTile from "./ProductTile";

const ProductListings = () => {
  const products = useRecoilValue(productState);

  return (
    <FlatList
      contentContainerStyle={{ width: "100%", gap: 10, paddingVertical: 10 }}
      data={products}
      renderItem={({ item }) => <ProductTile {...item} />}
      keyExtractor={(item) => item.id + new Date().toString()}
      ListEmptyComponent={<Text>No products found</Text>}
    />
  );
};

export default ProductListings;

const styles = StyleSheet.create({});
