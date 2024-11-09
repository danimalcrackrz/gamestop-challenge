import { StyleSheet, Text, View, FlatList } from "react-native";
import CartTile from "./CartTile";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";

const CartList = () => {
  const [cart, setCart] = useRecoilState(cartState);
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

export default CartList;

const styles = StyleSheet.create({});
