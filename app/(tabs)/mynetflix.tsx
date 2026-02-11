import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; //

type Movie = {
  id: string;
  image: string;
};

const myList: Movie[] = [
  {
    id: '1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  },
  {
    id: '2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  },
];

export default function ProfileScreen() {
  const [myList, setMyList] = useState([]);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@movie_list');
      setMyList(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log('Error loading data');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Netflix ของฉัน</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="white" style={{ marginRight: 20 }} />
          <Ionicons name="menu" size={24} color="white" />
        </View>
      </View>


      <View style={styles.profileBox}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          }}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>.i.</Text>
      </View>

      <Text style={styles.sectionTitle}>รายการทีวีและภาพยนตร์ที่คุณถูกใจ</Text>


      <FlatList<Movie>
        data={myList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image source={{ uri: item.image }} style={styles.poster} />
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="paper-plane-outline" size={14} color="white" />
              <Text style={styles.shareText}>แชร์</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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

  headerIcons: {
    flexDirection: 'row'
  },

  profileBox: {
    alignItems: 'center',
    marginVertical: 20
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 8
  },

  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
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

  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  shareText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5
  }
});