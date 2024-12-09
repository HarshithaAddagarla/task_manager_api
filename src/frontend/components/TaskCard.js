import React from 'react';

const TaskCard = ({ task }) => (
  <div>
    <h2>{task.title}</h2>
    <p>Status: {task.status}</p>
    <p>Priority: {task.priority}</p>
  </div>
);

export default TaskCard;
