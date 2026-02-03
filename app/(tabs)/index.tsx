import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>สำหรับคุณ</Text>

      <Image
        source={{
          uri: "https://picsum.photos/400/220&quot"}}
          style={ styles.banner }
        
      /> 

      <Text style={styles.section}>ใหม่ที่ Netflix</Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((i) => (
      <Image
        key={i}
source={{ uri: `https://picsum.photos/150/200?${i}` }}
        style={styles.poster}/>))}
        </ScrollView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  banner: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 10,
  },
});