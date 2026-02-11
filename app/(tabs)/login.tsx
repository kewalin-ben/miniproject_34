import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ใครกำลังรับชมอยู่?</Text>

      {/* จำลองโปรไฟล์จากรูปที่ 1 */}
      <TouchableOpacity
          style={styles.profileBox}
        
        onPress={() => router.push('/pin')}
      >
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          }} 
            style={ styles.avatar }
        />
            <Text style={styles.name}>เคเค</Text>
        </TouchableOpacity>

      <Text style={styles.footer}>จัดการโปรไฟล์</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  profileBox: {alignItems: 'center',marginBottom: 20},
  title: { color: '#fff', fontSize: 20, marginBottom: 30, fontWeight: 'bold' },
  avatar: { width: 100, height: 100, borderRadius: 10, marginBottom: 10 },
  name: { color: '#fff', fontSize: 16 },
  footer: { color: 'gray', marginTop: 50, fontSize: 14 }
})