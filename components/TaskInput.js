import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TaskInput;
