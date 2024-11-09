import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Link, router } from "expo-router";
import { PLACEHOLDER_IMAGE_URL } from "@/constants/Constants";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";

const CartTile = (items) => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleRemoveFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== items.id);
    setCart(updatedCart);
  };

  return (
    <Link href={{ pathname: "/modal", params: { ...items } }} asChild>
      <Pressable style={styles.tile}>
        <Image
          source={{ uri: PLACEHOLDER_IMAGE_URL }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ marginLeft: 5, fontSize: 20 }}>{items.name}</Text>
        <Pressable style={styles.button}>
          <Text
            style={{ fontSize: 20, color: "white" }}
            onPress={handleRemoveFromCart}
          >
            Remove item
          </Text>
        </Pressable>
      </Pressable>
    </Link>
  );
};

export default CartTile;

const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "gray",
    position: "relative",
  },
  button: {
    backgroundColor: "red",
    position: "absolute",
    right: 5,
    bottom: 5,
    padding: 5,
    borderRadius: 5,
  },
});
