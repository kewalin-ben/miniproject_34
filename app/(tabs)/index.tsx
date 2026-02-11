import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const STORAGE_KEY = '@movie_list';

  const addToMyList = async (imageUrl: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      const currentList = jsonValue != null ? JSON.parse(jsonValue) : [];

    
      const alreadyExists = currentList.find(
        (item: any) => item.image === imageUrl
      );

      if (alreadyExists) {
        console.log("มีรายการนี้แล้ว");
        return; 
      }

      const newMovie = {
        id: Date.now().toString(),
        image: imageUrl,
      };

      const updatedList = [...currentList, newMovie];

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedList)
      );

      console.log("เพิ่มสำเร็จ");
    } catch (e) {
      console.log("Error saving");
    }
  };

  
return (
  
  <ScrollView style={styles.container}>
    {/* 1. ส่วนหนังเด่น (Hero Section) ตามรูปที่ส่งมา */}
    <ImageBackground
      source={{
        uri: 'https://s359.kapook.com/pagebuilder/f387e97c-8ed1-49e0-a902-bdf12f2bd1b9.jpg'
      }} // ใส่ URL รูป "7 ประจัญบาน"
      style={styles.heroImage}
    >
      <View style={styles.heroOverlay}>
        {/* ชื่อเรื่องขนาดใหญ่ */}
        <Text style={styles.heroTitle}>7 ประจัญบาน</Text>
        <Text style={styles.heroSubtitle}>ดูตอนใหม่ได้วันพฤหัสบดีนี้</Text>

        {/* แถบปุ่มกด (Play / My List) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="black" />
            <Text style={styles.playButtonText}>เล่น</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myListButton}
            onPress={() =>
              addToMyList(
                'https://s359.kapook.com/pagebuilder/f387e97c-8ed1-49e0-a902-bdf12f2bd1b9.jpg'
              )
            }
          />
        </View>
      </View>
    </ImageBackground>

    {/* 2. รายการหนังด้านล่าง (Horizontal List) */}
    {/* แถวที่ 1 */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>รายการทีวีแนวคอมเมดี้สัญชาติเกาหลี</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          'https://upload.wikimedia.org/wikipedia/th/7/76/True_Beauty_TV_series_poster.jpg',
          'https://i0.wp.com/www.korseries.com/wp-content/uploads/2024/03/Queen-of-tears-tvn-netflix-poster-th-040324.jpg?resize=692%2C1024&ssl=1',
          'https://s359.kapook.com/r/600/auto/pagebuilder/1332cd36-83ad-4a91-9894-0357c00ddcf2.jpg',
          'https://s359.kapook.com/pagebuilder/b2d0fdb5-a599-44ed-932b-1a247a0460e5.jpg',
          'https://s359.kapook.com/pagebuilder/5efe817b-01b6-496f-bbf7-88299fee4226.jpg',
          'https://s359.kapook.com/pagebuilder/885e7f35-2967-4b22-910d-9e77e18059ac.jpg',
          'https://mpics.mgronline.com/pics/Images/565000012416705.JPEG',
          'https://cms.dmpcdn.com/ugcarticle/2026/02/03/618f75d0-00ad-11f1-842a-7baa2fadedfa_webp_original.webp'
        ].map((image, index) => (
          <View key={index} style={styles.movieCard}>
            <Image source={{ uri: image }} style={styles.poster} />
          </View>
        ))}
      </ScrollView>
    </View>

    {/* แถวที่ 2 */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>ภาพยนตร์เอเชียตะวันออกเฉียงใต้</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          'https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/544741242_1371209348345405_5474873055370959877_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a7zfEv28tJ0Q7kNvwHAzDb5&_nc_oc=Adl2dRPlaGU0g_j5O6cThwufxhWUaQQ5CO3B2px2tIQzp4Zo9cUHzMDmiULCtqQxQySGQweFruCZr5mR9twMHHo6&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=7iIhLm4FAgFnXNgE2bdEIA&oh=00_Afv3Bcw5Op85gx-g7WAq5G4hIUF3iAVmP6n8diQFIOApNQ&oe=69925BC4',
          'https://lh3.googleusercontent.com/g3qlW_3yHBXyNwwdpofj7Q1aYRQn9mKEWGIqikMdPjidSeOkJUCwbzjfx02FRrHxgxRsbVjvwmoCngbLSfi_xA5GW8XvFBXVUQ=w260',
          'https://i.pinimg.com/736x/90/56/5b/90565bb85855f7b0d0dafcf31461d0c6.jpg',
          'https://s.isanook.com/mv/0/ud/37/185835/teeyai_mainposter.jpg?ip/resize/w728/q80/jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEXW_4t4g7Kda4-w4D_7nEzCw4ZI4_MIFAg&s',
          ''
        ].map((image, index) => (
          <View key={index} style={styles.movieCard}>
            <Image source={{ uri: image }} style={styles.poster} />
          </View>
        ))}
      </ScrollView>
    </View>

    {/* แถวที่ 3 */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>ซีรี่ย์ LGBTQ+</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          'https://upload.wikimedia.org/wikipedia/th/7/76/True_Beauty_TV_series_poster.jpg',
          'https://i0.wp.com/www.korseries.com/wp-content/uploads/2024/03/Queen-of-tears-tvn-netflix-poster-th-040324.jpg?resize=692%2C1024&ssl=1',
          'https://upload.wikimedia.org/wikipedia/en/1/16/Squid_Game_poster.jpg',
          'https://upload.wikimedia.org/wikipedia/en/7/7e/All_of_Us_Are_Dead.jpeg',
          'https://m.media-amazon.com/images/M/MV5BYjg2M2QxYTUtYTE0YS00MWVmLWFlMDQtN2VkNGE2OGNlMGUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          ''
        ].map((image, index) => (
          <View key={index} style={styles.movieCard}>
            <Image source={{ uri: image }} style={styles.poster} />
          </View>
        ))}
      </ScrollView>
    </View>

  </ScrollView>


);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  heroImage: {
    width: '100%',
    height: 420,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },

  heroOverlay: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)', // เงาดำจางๆ ให้ตัวหนังสือชัด
  },

  heroTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  playButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10
  },

  playButtonText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 5
  },

  myListButton: {
    backgroundColor: '#333',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center'
  },

  myListText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5
  },

  section: { padding: 10 },

  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },

  movieCard: { marginRight: 10 },

  poster: {
    width: 110,
    height: 160,
    borderRadius: 4
  }
});