import { useState } from "react";
import { View, Text, StyleSheet, Switch, FlatList } from "react-native";

export default function Habit() {
  const [habits, setHabits] = useState([
    { id: "1", name: "Drink water", completed: false },
    { id: "2", name: "10 min walk", completed: false },
    { id: "3", name: "Read 5 pages", completed: false },
  ]);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker 🌿</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <View style={styles.habitRow}>
            <Text style={[styles.habitText, item.completed && styles.completed]}>{item.name}</Text>
            <Switch value={item.completed} onValueChange={() => toggleHabit(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#dceef8" }, // light brown

  habitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  habitText: { fontSize: 18, color: "#3a5a40" },
  completed: { textDecorationLine: "line-through", color: "#6c757d" },

   title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#071739", // earthy green
    marginBottom: 10,
    marginTop: 70, // pushed lower
  },
});
