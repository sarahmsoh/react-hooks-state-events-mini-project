import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', category: 'Shopping' },
    { id: 2, text: 'Clean the house', category: 'Housework' },
    { id: 3, text: 'Finish homework', category: 'School' }
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Shopping', 'Housework', 'School'];

  // Function to handle task deletion
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to handle task form submission
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
      />
      <NewTaskForm
        categories={categories.filter(c => c !== 'All')}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
};

export default App;
