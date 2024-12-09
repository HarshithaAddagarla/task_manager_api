import axios from 'axios';

const API_BASE_URL = '/api/tasks'; // Relative to the backend server

export const getAllTasks = async () => axios.get(API_BASE_URL);
export const getTaskById = async (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createTask = async (task) => axios.post(API_BASE_URL, task);
export const updateTask = async (id, task) => axios.put(`${API_BASE_URL}/${id}`, task);
export const deleteTask = async (id) => axios.delete(`${API_BASE_URL}/${id}`);
