import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Pin() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const checkPin = () => {
    if (pin === "1234") {
      router.replace("/(tabs)");
    } else {
      alert("รหัสไม่ถูกต้อง");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>password</Text>

      <TextInput
        value={pin}
        onChangeText={setPin}
        keyboardType="number-pad"
        secureTextEntry
        maxLength={4}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={checkPin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 160,
    borderBottomWidth: 2,
    borderColor: "red",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});

