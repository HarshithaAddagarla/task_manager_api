import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../services/taskService';
import TaskCard from '../components/TaskCard';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getAllTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Management</h1>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Home;
