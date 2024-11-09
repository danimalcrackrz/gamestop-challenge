import CheckoutList from "@/components/CheckoutList";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";

const checkout = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    creditCard: "",
  });
  return (
    <KeyboardAvoidingView behavior='padding'>
      <CheckoutList />
      <View style={{ borderColor: "white", borderWidth: 1, height: "auto" }}>
        <TextInput
          style={{ padding: 5, backgroundColor: "white" }}
          placeholderTextColor={"black"}
          placeholder='Name'
          textContentType='name'
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
          accessibilityLabel='Name'
        />
        <TextInput
          style={{ padding: 5, backgroundColor: "white" }}
          placeholderTextColor={"black"}
          placeholder='Phone'
          textContentType='telephoneNumber'
          value={form.phone}
          onChangeText={(text) => setForm({ ...form, phone: text })}
          accessibilityLabel='Phone'
        />
        <TextInput
          placeholder='Address'
          style={{ padding: 5, backgroundColor: "white" }}
          placeholderTextColor={"black"}
          textContentType='fullStreetAddress'
          value={form.address}
          onChangeText={(text) =>
            setForm({
              ...form,
              address: text,
            })
          }
          accessibilityLabel='Address'
        />
        <TextInput
          style={{ padding: 5, backgroundColor: "white" }}
          placeholderTextColor={"black"}
          placeholder='Credit Card'
          value={form.creditCard}
          textContentType='creditCardNumber'
          secureTextEntry
          onChangeText={(text) =>
            setForm({
              ...form,
              creditCard: text,
            })
          }
          accessibilityLabel='Credit Card'
        />
      </View>
      <Pressable
        style={{
          backgroundColor: "red",
          padding: 10,
        }}
      >
        <Text style={styles.title}>Pay Now</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default checkout;

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
