import { StyleSheet, Text, TextInput, View } from "react-native";
import { useRecoilState } from "recoil";
import { searchState, productState } from "@/atoms";

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [products, setProducts] = useRecoilState(productState);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(search)
    );

    console.log("Filtered products:", filteredProducts);
    setProducts(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search...'
        placeholderTextColor={"black"}
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={handleSearch}
        autoFocus
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 40,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  Text: {
    fontSize: 20,
    color: "black",
  },
});
