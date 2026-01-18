import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView, StatusCode, StatusBar } from 'react-native';
import { theme } from './src/utils/theme';
import TodoInput from './src/components/TodoInput';
import TodoItem from './src/components/TodoItem';
import TodoFilters from './src/components/TodoFilters';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load todos on startup
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos whenever they change, but only after initial load
  useEffect(() => {
    if (isLoaded) {
      saveTodos(todos);
    }
  }, [todos, isLoaded]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('@todo_team_app_data');
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (e) {
      console.error('Failed to load todos', e);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveTodos = async (newTodos) => {
    try {
      await AsyncStorage.setItem('@todo_team_app_data', JSON.stringify(newTodos));
    } catch (e) {
      console.error('Failed to save todos', e);
    }
  };

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const [filter, setFilter] = useState('all'); // 'all', 'active', 'done'

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active': return todos.filter(t => !t.completed);
      case 'done': return todos.filter(t => t.completed);
      default: return todos;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <View style={styles.content}>
        <Text style={styles.title}>My Tasks</Text>

        <TodoFilters filter={filter} onFilterChange={setFilter} />

        <TodoInput onAddTodo={addTodo} />

        <FlatList
          data={getFilteredTodos()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              onToggle={() => toggleTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.xl,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.l,
    marginLeft: theme.spacing.s, // Align with list items visual
  },
  listContent: {
    paddingBottom: 100, // Space for bottom input if we move it there, or just general padding
    paddingTop: theme.spacing.s,
  },
});
