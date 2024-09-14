import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskController.js';
const router = express.Router();

// @ /api/task/create 
router.post('/create',createTask);


// @ /api/task
router.get('/' ,getAllTasks)


// @ /api/task/123
router.get('/:id',(req,res)=>{
    console.log("Post")
})

// @ /api/task/124
router.put('/:id', (req,res)=>{
    console.log("Post")
});

// @ /api/task/124
router.delete('/:id', (req,res)=>{
    console.log("Post")
});

export default router;