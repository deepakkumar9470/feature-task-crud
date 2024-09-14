import TaskModel from '../models/Task.js';

/********** Creating new task *********/
export const createTask = async (req, res) => {
  try {
    const {title,desc,duedate,status} = req.body;
    const newTask = new TaskModel({
        title,
        desc,
        duedate : duedate || Date.now(),
        status : status || 'todo'
    });
    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task created successfully", task: savedTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

/********** Getting all tasks *********/
export const getAllTasks = async (req, res) => {
    try {
      const allTasks = await  TaskModel.find().sort({ createdAt: -1 });
      res.status(200).json({ message: "Task fetched successfully", tasks: allTasks });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tasks" });
    }
  };
  
