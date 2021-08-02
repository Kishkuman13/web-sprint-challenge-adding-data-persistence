// build your `Task` model here
const db = require('../../data/dbConfig');

async function findAll() {
  const tasks = await db('tasks as T')
    .leftJoin('projects as P', 'P.id', 'T.project_id')
    .select('T.*', 'P.project_name', 'P.project_description');

  const tasksObj  = tasks.map((task) => {
    return {
      task_id: task_id,
      task_description: task.task_description,
      task_notes: !task.task_notes ? null : task.task_notes,
      task_completed: !task.task_completed
        ? false
        : task.task_completed === 0
        ? false
        : true,
      project_id: task.project_id,
      project_name: task.project_name,
      project_description: task.project_description
    };
  });
  return tasksObj;
}

async function addTask(taskData) {
  const [ 
    task_id, 
    task_description, 
    task_notes, 
    task_completed, 
    project_id, 
    project_name, 
    project_description 
  ] = await db('tasks')
    .join('projects', 'projects_id', 'tasks.project_id')
    .select('tasks.*', 'projects.id')
    .insert(taskData);

  const tasksObj = {
    task_id: task_id,
    task_description: task_description,
    task_notes: !task_notes ? null : task_notes,
    task_completed: !task_completed
      ? false
      : task_completed === 0
      ? false
      : true,
    project_id: project_id,
    project_name: project_name,
    project_description: project_description
  };
  return tasksObj;
}

module.exports = { findAll, addTask };
