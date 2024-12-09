const express = require('express');
const Joi = require('joi');
const Task = require('../models/task');
const router = express.Router();

// Validation Schema
const taskSchema = Joi.object({
  title: Joi.string().required().max(100),
  description: Joi.string().optional(),
  status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED'),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
  dueDate: Joi.date().optional(),
});

// Create Task
router.post('/', async (req, res, next) => { /* Implementation */ });

// Get All Tasks
router.get('/', async (req, res, next) => { /* Implementation */ });

// Get Task by ID
router.get('/:id', async (req, res, next) => { /* Implementation */ });

// Update Task
router.put('/:id', async (req, res, next) => { /* Implementation */ });

// Delete Task
router.delete('/:id', async (req, res, next) => { /* Implementation */ });

module.exports = router;
