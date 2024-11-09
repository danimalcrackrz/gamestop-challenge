import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";
import CartList from "@/components/CartList";

export default function TabTwoScreen() {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <View style={styles.container}>
      <CartList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
