import React, { use, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { useFocusEffect } from 'expo-router'
import { useIsFocused } from '@react-navigation/native'



export default function PinScreen() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const { name } = useLocalSearchParams();
  
  useFocusEffect(() => {
    setPin('');
  });   
  

  const handlePinChange = (text: string) => {
    setPin(text);

    // ตัวอย่าง PIN = 1234
    if (text.length === 4) {
      if (text === '1234') {
        router.replace('/'); // หรือหน้าโปรไฟล์ของเธอ
      } else {
        Alert.alert('รหัส PIN ไม่ถูกต้อง');
        setPin('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        ป้อนรหัส PIN เพื่อเข้าสู่โปรไฟล์
      </Text>

      <TextInput
        style={styles.pinInput}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        autoFocus
        value={pin}
        onChangeText={handlePinChange}
      />

      <Text style={styles.forget}>หากลืมรหัส PIN</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  pinInput: {
    backgroundColor: '#333',
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    width: 120,
    padding: 10,
    borderRadius: 8,
  },
  forget: {
    color: '#007AFF',
    marginTop: 20,
  },
});

