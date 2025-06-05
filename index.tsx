// app/(tabs)/index.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#0077b6", headerShown: false }}>
      <Tabs.Screen name="Home" options={{ title: "Home", tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
      <Tabs.Screen name="Todo" options={{ title: "Tasks", tabBarIcon: ({ color }) => <Ionicons name="checkbox" size={24} color={color} /> }} />
      <Tabs.Screen name="Weather" options={{ title: "Weather", tabBarIcon: ({ color }) => <Ionicons name="sunny" size={24} color={color} /> }} />
    <Tabs.Screen name="Habit" options={{ title: "Habits", tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
  }}
/>

    </Tabs>
  );
}
