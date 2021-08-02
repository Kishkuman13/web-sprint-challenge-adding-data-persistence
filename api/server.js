// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./project/router');
const ResourcesRouter = require('./resource/router');
const TasksRouter = require('./task/router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
