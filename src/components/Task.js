import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task.text} ({task.category})</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
