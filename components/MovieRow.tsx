import React from 'react';
import { View,Text,ScrollView,Image,TouchableOpacity,StyleSheet } from 'react-native';

type Props = {
  title: string;
  images: string[];
  addToMyList?: (imageUrl: string) => Promise<void>;
};

export default function MovieRow({ title, images, addToMyList }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.movieCard}>
            <TouchableOpacity onPress={() => addToMyList?.(image)}>
              <Image source={{ uri: image }} style={styles.poster} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  movieCard: {
    marginRight: 10,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
});