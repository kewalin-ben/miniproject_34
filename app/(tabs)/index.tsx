import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  
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

            <TouchableOpacity style={styles.myListButton}>
              <Ionicons name="add" size={24} color="white" />
              <Text style={styles.myListText}>รายการของฉัน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* 2. รายการหนังด้านล่าง (Horizontal List) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>รายการทีวีแนวคอมเมดี้สัญชาติเกาหลี</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.movieCard}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/th/7/76/True_Beauty_TV_series_poster.jpg'
                }}
                style={styles.poster}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView >
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