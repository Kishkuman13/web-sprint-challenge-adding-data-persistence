// build your `/api/tasks` router here
const tasksRouter = require('express').Router();
const Tasks = require('./model');

tasksRouter.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

tasksRouter.post('/', async (req, res, next) => {
  const task = req.body;

  if (!task.project_id || !task.task_description) {
    res.status(400).json({ message: 'task must have a project id and a description' })
    next();
  } else {
    try {
      const newTask = await Tasks.addTask(task);
      res.status(200).json(newTask);
    } catch (err) {
      next(err);
    }
  }
});

module.exports = tasksRouter;
