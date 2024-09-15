import TaskModel from '../models/Task.js';

/********** Creating new task *********/
export const createTask = async (req, res) => {
    try {
        const { title, desc, duedate, status } = req.body;
        const newTask = new TaskModel({
            title,
            desc,
            duedate: duedate || Date.now(),
            status: status || 'todo',
            user : req.user._id
        });
        const savedTask = await newTask.save();
        res.status(201).json({ message: "Task created successfully", task: savedTask });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to create task" });
    }
};

/********** Getting all tasks *********/
export const getAllTasks = async (req, res) => {
    const query = req.query.status ? { status: req.query.status } : {};
    // const userid = req.user._id
    const userId = req.query.userId
    // console.log(userid)
    try {
        // const allTasks = await TaskModel.find(query).sort({ createdAt: -1 });
        const allTasks = await TaskModel.find({user:userId,...query}).sort({ createdAt: -1 });
        res.status(200).json({ message: "Task fetched successfully", tasks: allTasks });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks" });
    }
};

/********** Getting single task by id *********/
export const getTaskById = async (req, res) => {
    try {

        const singleTask = await TaskModel.findById(req.params.id)

        if (!singleTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ singleTask });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch single task" });
    }
};


/********** Getting single task by id *********/
export const updateTaskById = async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task" });
    }
};


/********** Getting single task by id *********/
export const deleteTaskById = async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task" });
    }
};   