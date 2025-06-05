// app/(tabs)/Weather.tsx
import { View, Text, StyleSheet } from "react-native";

export default function Weather() {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Bangalore</Text>
      <Text style={styles.temp}>🌤️ 31°C</Text>
      <Text style={styles.desc}>Clear skies with gentle breeze</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#e9f5db" },
  city: { fontSize: 30, fontWeight: "bold", color: "#386641" },
  temp: { fontSize: 50, marginVertical: 10, color: "#6a994e" },
  desc: { fontSize: 18, color: "#a7c957" },
});
