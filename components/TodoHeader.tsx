import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TodoHeaderProps {
  totalTodos: number;
  pendingCount: number;
}

export default function TodoHeader({ totalTodos, pendingCount }: TodoHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todoリスト</Text>
      <Text style={styles.subtitle}>
        {pendingCount}個のタスク
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});