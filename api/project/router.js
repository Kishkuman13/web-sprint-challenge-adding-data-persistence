// build your `/api/projects` router here
const projectsRouter = require('express').Router();
const Projects = require('./model');

projectsRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.findAll();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

projectsRouter.post('/', async (req, res, next) => {
  const project = req.body;

  if (!project.project_name) {
    res.status(400).json({ message: 'project must have a name' });
    next();
  } else {
    try {
      const newProject = await Projects.addProject(project);
      res.status(200).json(newProject);
    } catch (err) {
      next(err);
    }
  }
});

module.exports = projectsRouter;
