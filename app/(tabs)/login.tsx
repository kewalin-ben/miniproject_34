import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const profiles = [
    {
      name: "เคเค",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    },
    {
      name: "ปะลักกึก",
      image: "https://api.dicebear.com/7.x/fun-emoji/png?seed=2"
    },
    {
      name: "จันทร์เจ้า",
      image: "https://api.dicebear.com/7.x/fun-emoji/png?seed=3"
    },
    {
      name: "Juckmavin",
      image: "https://api.dicebear.com/7.x/fun-emoji/png?seed=4"
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ใครกำลังรับชมอยู่?</Text>

      {/* จำลองโปรไฟล์จากรูปที่ 1 */}
      <View style={styles.profileContainer}>
        {profiles.map((profile, index) => (
          <TouchableOpacity
            key={index}
            style={styles.profileBox}
            onPress={() => router.push({
              pathname: '/pin',
              params: { name: profile.name }
             })
            }
          >

             
            <Image
              source={{ uri: profile.image }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{profile.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footer}>จัดการโปรไฟล์</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30
  },

  profileBox: {
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 20
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold'
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },

  name: {
    color: '#fff',
    fontSize: 16
  },

  footer: {
    color: 'gray',
    marginTop: 50,
    fontSize: 14
  }
})