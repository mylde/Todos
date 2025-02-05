import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => (
        <TaskItem task={item} onToggle={() => onToggleTask(index)} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TaskList;
