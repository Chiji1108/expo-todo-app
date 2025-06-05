import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Todo } from '@/types/Todo';
import TodoItem from '@/components/TodoItem';
import TodoInput from '@/components/TodoInput';
import TodoHeader from '@/components/TodoHeader';
import EmptyState from '@/components/EmptyState';

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputText.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
      setInputText('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderTodoItem = ({ item }: { item: Todo }) => (
    <TodoItem
      item={item}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TodoHeader
          totalTodos={todos.length}
          pendingCount={todos.filter(todo => !todo.completed).length}
        />

        <TodoInput
          value={inputText}
          onChangeText={setInputText}
          onSubmit={addTodo}
        />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyState />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
