import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <Text style={[styles.task, task.done && styles.doneTask]}>{task.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    fontSize: 18,
    padding: 10,
  },
  doneTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
