import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#000' }, // พื้นหลัง Header สีดำ
        headerTintColor: '#E50914', // ตัวอักษรสีแดง Netflix
        tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0 }, // แถบล่างสีดำ
        tabBarActiveTintColor: '#E50914', 
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index" // คือหน้า HomeScreen.js
        options={{
          title: 'หน้าหลัก',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="addmovie" // คือหน้า AddMovieScreen.js
        options={{
          title: 'เพิ่มข้อมูล',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile" // คือหน้า ProfileScreen.js
        options={{
          title: 'โปรไฟล์',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="login" // คือหน้า LoginScreen.js
        options={{
          title: 'เข้าสู่ระบบ',
          tabBarIcon: ({ color }) => <Ionicons name="log-in" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="pin" // คือหน้า PinScreen.js
        options={{
          title: 'รหัส PIN',
          tabBarIcon: ({ color }) => <Ionicons name="key" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="mynetflix" // คือหน้า MyNetflixScreen.js
        options={{
          title: 'My Netflix',
          tabBarIcon: ({ color }) => (
            <Ionicons name="film" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}