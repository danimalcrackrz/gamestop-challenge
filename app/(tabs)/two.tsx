import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRecoilValue } from "recoil";
import { cartState } from "@/atoms";
import CartList from "@/components/CartList";
import { Link, router } from "expo-router";

export default function TabTwoScreen() {
  const cart = useRecoilValue(cartState);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <View style={styles.container}>
      <CartList />
      <Pressable
        disabled={cart.length === 0}
        onPress={handleCheckout}
        style={{
          backgroundColor: "red",
          padding: 10,
          opacity: cart.length === 0 ? 0.5 : 1,
        }}
      >
        <Text style={styles.title}>Checkout {cart.length} item(s)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
