import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons' 

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#000' }, // พื้นหลัง Header สีดำ
        headerTintColor: '#E50914', // ตัวอักษรสีแดง Netflix
        tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0 }, // แถบล่างสีดำ
        tabBarActiveTintColor: '#E50914', // Icon สีแดงเมื่อกด
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
        name="add" // คือหน้า AddMovieScreen.js
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
    </Tabs>
  );
}