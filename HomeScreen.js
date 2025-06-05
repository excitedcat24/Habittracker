import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import { saveTasks, loadTasks } from '../storage/taskStorage';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  useEffect(() => {
    saveTasks(taskList);
  }, [taskList]);

  const loadTasksFromStorage = async () => {
    const storedTasks = await loadTasks();
    if (storedTasks) setTaskList(storedTasks);
  };

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = { id: Date.now().toString(), text: task, done: false };
    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const toggleTaskDone = (id) => {
    const updated = taskList.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTaskList(updated);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Task Manager</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTaskDone}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderBottomWidth: 1, marginRight: 10, padding: 8 },
});
