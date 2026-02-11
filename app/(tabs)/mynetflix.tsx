import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';

type Movie = {
  id: string;
  image: string;
};

export default function ProfileScreen() {
  const [myList, setMyList] = useState<Movie[]>([]);

  const STORAGE_KEY = '@movie_list';

  // โหลดข้อมูล
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      setMyList(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log('Error loading data');
    }
  };

  // เพิ่มข้อมูล
  const addMovie = async () => {
    const movies = [
      'https://upload.wikimedia.org/wikipedia/th/7/76/True_Beauty_TV_series_poster.jpg',
      'https://i0.wp.com/www.korseries.com/wp-content/uploads/2024/03/Queen-of-tears-tvn-netflix-poster-th-040324.jpg?resize=692%2C1024&ssl=1',
      'https://s359.kapook.com/r/600/auto/pagebuilder/1332cd36-83ad-4a91-9894-0357c00ddcf2.jpg',
      'https://s359.kapook.com/pagebuilder/b2d0fdb5-a599-44ed-932b-1a247a0460e5.jpg',
      'https://s359.kapook.com/pagebuilder/5efe817b-01b6-496f-bbf7-88299fee4226.jpg',
      'https://s359.kapook.com/pagebuilder/885e7f35-2967-4b22-910d-9e77e18059ac.jpg',
      'https://mpics.mgronline.com/pics/Images/565000012416705.JPEG',
      'https://cms.dmpcdn.com/ugcarticle/2026/02/03/618f75d0-00ad-11f1-842a-7baa2fadedfa_webp_original.webp'
    ];

    const randomImage = movies[Math.floor(Math.random() * movies.length)];

    const newMovie: Movie = {
      id: Date.now().toString(),
      image: randomImage,
    };

    const updatedList = [...myList, newMovie];
    setMyList(updatedList);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  };

  const deleteMovie = async (id: string) => {
    Alert.alert(
      'ยืนยันการลบ',
      'คุณต้องการลบรายการนี้หรือไม่?',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        {
          text: 'ลบ',
          style: 'destructive',
          onPress: async () => {
            const filtered = myList.filter(item => item.id !== id);
            setMyList(filtered);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
          }
        }
      ]
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Netflix ของฉัน</Text>

          <TouchableOpacity onPress={addMovie}>
            <Ionicons name="add-circle" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          รายการทีวีและภาพยนตร์ที่คุณถูกใจ
        </Text>

        <FlatList
          data={myList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.movieCard}>
              <Image source={{ uri: item.image }} style={styles.poster} />

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteMovie(item.id)}
              >
                <Ionicons name="trash" size={14} color="white" />
                <Text style={styles.deleteText}>ลบ</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text style={styles.sectionTitle}>
           รายการของฉัน
        </Text>

         <FlatList
           data={myList}
           horizontal
           showsHorizontalScrollIndicator={false}
           keyExtractor={(item) => item.id + "2"}
           renderItem={({ item }) => (
            <View style={styles.movieCard}>
                 <Image source={{ uri: item.image }} style={styles.poster} />
                  </View>

                  
                )}
              />

        <Text style={styles.sectionTitle}>
           ตัวอย่างที่ดูแล้ว
        </Text>

         <FlatList
           data={myList}
           horizontal
           showsHorizontalScrollIndicator={false}
           keyExtractor={(item) => item.id + "2"}
           renderItem={({ item }) => (
            <View style={styles.movieCard}>
                 <Image source={{ uri: item.image }} style={styles.poster} />
                  </View>

                  
                )}
              />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },

  movieCard: {
    marginRight: 12,
    width: 110
  },

  poster: {
    width: 110,
    height: 160,
    borderRadius: 4
  },

  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#E50914',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  deleteText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5
  }
});