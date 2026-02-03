import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const login = async () => {
    if (username !== "") {
      await AsyncStorage.setItem("login", "true");
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Netflix</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#aaa"
        style={styles.input}
        onChangeText={setUsername}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", padding: 30 },
  logo: { color: "red", fontSize: 32, textAlign: "center", marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 8,
  },
  loginText: { color: "#fff", textAlign: "center", fontSize: 16 },
});
