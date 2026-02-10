import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const heroMovie = {
  title: "Bloodshot",
  image: "https://image.tmdb.org/t/p/w780/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
  link: "https://www.netflix.com/title/81768545"
};

const popularMovies = [
  {
    id: "1",
    title: "ธี่หยด 3",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkvtDy_bvsLMMtaOErcTu62DroQYVb9tpsJxVQvmvTljpw8OyZ",
  },
  {
    id: "2",
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: "3",
    title: "Business Proposal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGbpKd0ucb3Uzkh22pD-8rUjrmfD63szv0g&s",
  },
  {
    id: "4",
    title: "The ",
    image: "https://pbs.twimg.com/media/Fw0s37BXoAcRTGB.jpg",
  },
  {
    id: "5",
    title: "True Beauty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjGPtbkkURLxQncrQFcj4tLB-T46GyUjeog&s",
  },
];

const Movies = [

];

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>สำหรับคุณ</Text>

      {/* HERO IMAGE*/}
      <View style={styles.heroWrapper}>
        <Image source={{ uri: heroMovie.image }} style={styles.heroImage} />
        <View style={styles.heroButtons}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => Linking.openURL(heroMovie.link)}
          >
            <Ionicons name="play" size={20} color="#000" />
            <Text style={styles.playText}> เล่น</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listButton}>
            <Ionicons name="add" size={20} color="#fff" />
            <Text style={styles.listText}> รายการของฉัน</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* POPULAR */}
      <Text style={styles.sectionTitle}>รายการยอดนิยม</Text>
      <FlatList
        horizontal
        data={popularMovies}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.title)}>
            <Image source={{ uri: item.image }} style={styles.poster} />
          </TouchableOpacity>
        )}
      />                                                                                  

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  heroWrapper: {
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: 420, // <<<<< ความยาวรูปแบบ Netflix
  },
  heroButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  playButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
  },
  playText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  listButton: {
    flexDirection: "row",
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  listText: {
    color: "#fff",
    fontSize: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 10,
  },
  poster: {
    width: 120,
    height: 180,
    marginLeft: 16,
    borderRadius: 6,
  },
});