import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const profiles = [
  {
    id: 1,
    name: "kuromi",
    avatar: "https://i.pinimg.com/474x/f3/ab/1d/f3ab1dc2ccc4639fd329432e033d89e1.jpg",
  },
  {
    id: 2,
    name: "i love gay",
    avatar: "https://deanmorriscards.co.uk/cdn/shop/files/RAN-154_b6e60568-7230-4f5b-a33d-79a2742d72a9.jpg?v=1768271671",
  },
  {
    id: 3,
    name: "my melody",
    avatar: "https://preview.redd.it/is-there-a-reason-why-theres-seen-to-be-a-bit-of-discourse-v0-xot0sz4fwtld1.png?auto=webp&s=f69804e8880d4b9afd94c03ac8ed179bbcfeab3f",
  },
];

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>เลือกโปรไฟล์</Text>

      <View style={styles.row}>
        {profiles.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.profile}
            onPress={() => router.push("/pin")}
          >
            <Image source={{ uri: p.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{p.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    fontSize: 22,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
  },
  profile: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    color: "#fff",
  },
});
