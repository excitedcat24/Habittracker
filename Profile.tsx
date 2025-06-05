// app/(tabs)/Profile.tsx
import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Zainab</Text>
      <Text style={styles.bio}>Software Developer | Data Science Enthusiast</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f0efeb" },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#2d6a4f" },
  bio: { fontSize: 16, color: "#40916c", marginTop: 10 },
});
