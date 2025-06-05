// app/(tabs)/Todo.tsx
import { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task) setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your To-Do List</Text>
      <TextInput placeholder="Enter task" style={styles.input} value={task} onChangeText={setTask} />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>• {item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#edf6f9", // soft green-blue
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#071739", // earthy green
    marginBottom: 10,
    marginTop: 70, // pushed lower
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  task: {
    fontSize: 16,
    paddingVertical: 6,
    color: "#1d3557", // dark blue
  },
});

