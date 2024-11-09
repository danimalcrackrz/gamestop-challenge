import { StyleSheet, FlatList } from "react-native";

import { View } from "@/components/Themed";
import useProducts from "@/hooks/useProducts";
import SearchBar from "@/components/SearchBar";
import ProductListings from "@/components/ProductListings";

export default function TabOneScreen() {
  const { products } = useProducts();

  return (
    <View style={styles.container}>
      <SearchBar />
      <ProductListings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
