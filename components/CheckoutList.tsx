import { StyleSheet, Text, View, FlatList } from "react-native";
import CartTile from "./CartTile";
import { useRecoilValue } from "recoil";
import { cartState } from "@/atoms";

const CheckoutList = () => {
  const cart = useRecoilValue(cartState);
  return (
    <FlatList
      contentContainerStyle={{
        width: "100%",
        gap: 10,
        paddingVertical: 10,
      }}
      data={cart}
      renderItem={({ item }) => <CartTile {...item} />}
      keyExtractor={(item) => item.id + new Date().toString()}
      ListEmptyComponent={
        <Text style={{ color: "white" }}>No products found</Text>
      }
    />
  );
};

export default CheckoutList;

const styles = StyleSheet.create({});
