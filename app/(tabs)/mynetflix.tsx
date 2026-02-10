import { View, Text, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyNetflix() {
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await AsyncStorage.getItem('myMovies');
    if (data) {
      setMyMovies(JSON.parse(data));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 10 }}>
      <Text style={{ color: '#fff', fontSize: 20, marginBottom: 10 }}>
        Netflix ของฉัน
      </Text>

      <FlatList
        data={myMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={{ width: 120, height: 180, marginRight: 10 }}
          />
        )}
      />
    </View>
  );
}