import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';



type Movie = {
  id: string;
  image: string;
};

export default function ProfileScreen() {
  const [favoriteList, setFavoriteList] = useState<Movie[]>([]);

  const [myList, setMyList] = useState<Movie[]>([
  {
      id: 'm1',
      image: 'https://upload.wikimedia.org/wikipedia/th/thumb/2/2e/Whale_Store_xoxo_2025_Official_Poster.png/250px-Whale_Store_xoxo_2025_Official_Poster.png'
    },
    {
      id: 'm2',
      image: 'https://upload.wikimedia.org/wikipedia/th/thumb/1/15/ThamePo_Heart_That_Skips_a_Beat_2024_Official_Poster.png/250px-ThamePo_Heart_That_Skips_a_Beat_2024_Official_Poster.png'
    },
    {
      id: 'm3',
      image: 'https://files.thaiware.site/movie/2024-07/images-poster/240724120411x98.jpg'
    },
    {
      id: 'm4',
      image: 'https://files.thaiware.site/movie/2023-03/images-poster/2303191204146ck.jpg'
    },
    {
      id: 'm5',
      image: 'https://s359.kapook.com/pagebuilder/d1100769-51ff-4fda-86d4-958800a7488f.jpg'
    },
    {
      id: 'm6',
      image: 'https://cms.dmpcdn.com/dara/2023/02/11/c4588160-a9db-11ed-a430-3b590511d3ad_webp_original.jpg'
    },
    {
      id: 'm7',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2emGI-0i9UsNqwSsGm2OOCbEUMR-dubisvA&s'
    },
    {
      id: 'm8',
      image: 'https://s.isanook.com/mv/0/ud/36/182983/298970.jpg?ip/resize/w728/q80/jpg'
    },
  ]);
  const watchedList: Movie[] = [
    {
      id: 'w1',
      image: 'https://s359.kapook.com/pagebuilder/b2d0fdb5-a599-44ed-932b-1a247a0460e5.jpg'
    },
    {
      id: 'w2',
      image: 'https://i.pinimg.com/736x/90/56/5b/90565bb85855f7b0d0dafcf31461d0c6.jpg'
    },
    {
      id: 'w3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEXW_4t4g7Kda4-w4D_7nEzCw4ZI4_MIFAg&s'
    },
    {
      id: 'w4',
      image: 'https://files.thaiware.site/movie/2024-07/images-poster/240724120411x98.jpg'
    },
    {
      id: 'w5',
      image: 'https://f.ptcdn.info/366/083/000/s9kh99dfwStOrsMXNSV-o.jpg'
    },
    {
      id: 'w6',
      image: 'https://ptcdn.info/movies/2025/FSoQNijX3t-1743500949_o.jpg'
    },
    {
      id: 'w7',
      image: 'https://cms.dmpcdn.com/dara/2025/11/29/57d4b020-cd11-11f0-9bba-e38138427309_webp_original.webp'
    },
    {
      id: 'w8',
      image: 'https://f.ptcdn.info/933/012/000/1386166085-o.jpg'
    },
  ];

  const STORAGE_KEY = '@movie_list';

  // โหลดข้อมูล
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      setFavoriteList(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log('Error loading data');
    }
  };

  // เพิ่มข้อมูล
  const addToFavorite = async (image: string) => {
    const newMovie = { id: Date.now().toString(), image };
    const updatedList = [...favoriteList, newMovie];

    setFavoriteList(updatedList);
    await AsyncStorage.setItem('@movie_list', JSON.stringify(updatedList));
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
            const filtered = favoriteList.filter(item => item.id !== id);
            setFavoriteList(filtered);
            await AsyncStorage.setItem('@movie_list', JSON.stringify(filtered));
          }
        }
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Netflix ของฉัน</Text>

          <TouchableOpacity onPress={() => addToFavorite('https://s359.kapook.com/pagebuilder/f387e97c-8ed1-49e0-a902-bdf12f2bd1b9.jpg')}>
            <Ionicons name="add-circle" size={28} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          รายการทีวีและภาพยนตร์ที่คุณถูกใจ
        </Text>

        <FlatList
          data={favoriteList}
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
          data={watchedList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id + "3"}
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
    marginBottom: 6,
    marginTop: 15
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