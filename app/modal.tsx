import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";
import { router } from "expo-router";

export default function ModalScreen() {
  const [cart, setCart] = useRecoilState(cartState);
  const { name, image, type, variations, details, id } = useLocalSearchParams();

  const variationsArray =
    typeof variations === "string" ? variations.split(",") : [];

  const handleAddToCart = () => {
    setCart((prev) => [...prev, { id, name }]);
    router.replace("/two");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={{ uri: "https://via.placeholder.com/200" }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        {variationsArray.map((variation) => (
          <Pressable key={variation} style={styles.variations}>
            <Text>{variation}</Text>
          </Pressable>
        ))}
      </View>

      <View>
        <Text style={styles.description}>{details}</Text>
      </View>

      <Pressable
        onPress={handleAddToCart}
        style={{ backgroundColor: "red", alignItems: "center", padding: 10 }}
      >
        <Text>Add to cart</Text>
      </Pressable>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
  },
  type: {
    fontSize: 20,
    color: "white",
  },
  variations: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});
