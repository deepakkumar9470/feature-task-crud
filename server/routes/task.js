import express from 'express';
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from '../controllers/taskController.js';
const router = express.Router();

// @ /api/task/create 
router.post('/create',createTask);

// @ /api/task
router.get('/',getAllTasks);

// @ /api/task/123
router.get('/:id',getTaskById);

// @ /api/task/124
router.put('/:id', updateTaskById);

// @ /api/task/124
router.delete('/:id', deleteTaskById);

export default router;